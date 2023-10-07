import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

import { GraphLink, GraphNode, PathStep } from './graph.type';
import { graphElements, graphStylor, isGraphNode } from './graph-simulation';
import { GraphContainer, GraphSvg } from './graph.styled';
import { graph_constants } from './graph.constants';
import { useGraphStore } from '../../state-manager/graphStore';
import NodeContextMenu from '../algorithm-applications/node-context-menu/NodeContextMenu';

type Props = {
    path: PathStep[];
};

const Graph = ({ path }: Props) => {
    const svgRef = useRef(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isSimulating, setIsSimulating] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    const nodes = useGraphStore((state) => state.nodes);
    const links = useGraphStore((state) => state.links);

    const [contextMenuPosition, setContextMenuPosition] = useState<{
        x: number;
        y: number;
        entityId: string;
    } | null>(null);

    // useEffect(() => {
    //     onSetStartEndNodes();
    // }, [startNodeId, endNodeId]);

    useEffect(() => {
        window.addEventListener('resize', resize);
        resize();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    useEffect(() => {
        const { width, height } = resize();

        const svg = d3.select(svgRef.current);
        svg.on('mousedown', () => {
            closeContextMenu();
        });

        svg.selectAll('*').remove();

        const g = svg.append('g');

        graphStylor.initGradients(svg);
        graphStylor.initMarkers(svg);

        const link = graphElements.generateLinkElement(g, links, nodes);
        const linkLabel = graphElements.generateLinkLabelElement(g, links);
        const node = graphElements.generateNodeElement(g, nodes);
        const nodeLabel = graphElements.generateNodeLabelElement(g, nodes);

        const dragBehavior = d3
            .drag<SVGCircleElement, GraphNode>()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);

        const simulation = d3
            .forceSimulation(nodes)
            .force(
                'link',
                d3
                    .forceLink(links)
                    .id((d: d3.SimulationNodeDatum) => (d as GraphNode).id)
                    .distance(150),
            )
            .force(
                'charge',
                d3
                    .forceManyBody()
                    .strength(graph_constants.simulation_charge_strength),
            )
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force(
                'collision',
                d3
                    .forceCollide()
                    .radius(graph_constants.simulation_collision_radius),
            );

        node.call(dragBehavior as any);

        node.on('contextmenu', (event, d) => {
            highlightNode(d.id);
            handleContextMenu(event, d.id);
        });

        simulation.on('tick', () => {
            link.attr('points', (d: GraphLink) => {
                const source = isGraphNode(d.source)
                    ? d.source
                    : nodes.find((n) => n.id === d.source);
                const target = isGraphNode(d.target)
                    ? d.target
                    : nodes.find((n) => n.id === d.target);

                if (!source?.x || !source?.y || !target?.x || !target?.y) {
                    return '';
                }

                // Calcul du point intermédiaire
                const midX = (source?.x + target?.x) / 2;
                const midY = (source?.y + target?.y) / 2;

                return `${source?.x},${source?.y} ${midX},${midY} ${target?.x},${target?.y}`;
            });

            linkLabel
                .attr('x', (d: GraphLink) =>
                    isGraphNode(d.source) && isGraphNode(d.target)
                        ? ((d.source.x ?? 0) + (d.target.x ?? 0)) / 2
                        : 0,
                )
                .attr('y', (d: GraphLink) =>
                    isGraphNode(d.source) && isGraphNode(d.target)
                        ? ((d.source.y ?? 0) + (d.target.y ?? 0)) / 2
                        : 0,
                );

            node.attr('cx', (d: GraphNode) => d.x ?? 0).attr(
                'cy',
                (d: GraphNode) => d.y ?? 0,
            );

            nodeLabel
                .attr('x', (d: GraphNode) => d.x ?? 0)
                .attr('y', (d: GraphNode) => d.y ?? 0);
        });

        function dragstarted(
            this: SVGCircleElement,
            event: d3.D3DragEvent<SVGCircleElement, GraphNode, unknown>,
            d: GraphNode,
        ) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            highlightNode(d.id);
            //simulation.alphaTarget(0);
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(
            this: SVGCircleElement,
            event: d3.D3DragEvent<SVGCircleElement, GraphNode, unknown>,
            d: GraphNode,
        ) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(
            this: SVGCircleElement,
            event: d3.D3DragEvent<SVGCircleElement, GraphNode, unknown>,
            d: GraphNode,
        ) {
            if (!event.active) simulation.alphaTarget(0);
            highlightNode(null);
            d.fx = null;
            d.fy = null;
        }

        const zoomed = (event: d3.D3ZoomEvent<Element, unknown>) => {
            g.attr('transform', event.transform.toString());
        };

        const zoom = d3.zoom().scaleExtent([0.5, 5]).on('zoom', zoomed);

        svg.call(zoom as any);
    }, [nodes, links]);

    const colorizeStep = (stepIndex = 0) => {
        if (stepIndex < path.length) {
            const step = path[stepIndex];
            if (step.type === 'node') {
                d3.select(`circle#${step.id}`).attr(
                    'fill',
                    'url(#visitedCircleGradient)',
                );
            } else if (step.type === 'link') {
                d3.select(`line#${step.id}`).attr(
                    'stroke',
                    graph_constants.simulation_line_stepped_stroke,
                );
            }
            const id = setTimeout(
                () => colorizeStep(stepIndex + 1),
                graph_constants.simulation_step_delta_time,
            );
            setTimeoutId(id);
        } else {
            // Clear the timeoutId once the simulation is complete
            setTimeoutId(null);
        }
    };

    const resetSimulation = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }

        nodes.forEach((node) => {
            d3.select(`circle#${node.id}`).attr('fill', 'url(#circleGradient)');
        });

        links.forEach((link: GraphLink) => {
            if (isGraphNode(link.source) && isGraphNode(link.target)) {
                d3.select(`line#${link.source.id}-${link.target.id}`).attr(
                    'stroke',
                    graph_constants.line_stroke,
                );
            }
        });

        onSetStartEndNodes();

        setIsSimulating(false);
    };

    const handleContextMenu = (event: React.MouseEvent, nodeId: string) => {
        event.preventDefault();
        setContextMenuPosition({
            x: event.clientX,
            y: event.clientY,
            entityId: nodeId,
        });
    };

    const closeContextMenu = () => {
        setContextMenuPosition(null);
        highlightNode(null);
    };

    const highlightNode = (nodeId: string | null) => {
        d3.selectAll('circle').classed('node-active', false);

        if (nodeId) d3.select(`circle#${nodeId}`).classed('node-active', true);
    };

    const resize = () => {
        if (containerRef.current) {
            const { width, height } =
                containerRef.current.getBoundingClientRect();
            d3.select(svgRef.current)
                .attr('width', width)
                .attr('height', height);
            return { width, height };
        }
        return {
            width: graph_constants.resize_width,
            height: graph_constants.resize_height,
        };
    };

    const onSetStartEndNodes = () => {
        d3.selectAll('circle.end-node')
            .classed('end-node', false)
            .attr('fill', 'url(#circleGradient)');

        d3.selectAll('circle.start-node')
            .classed('start-node', false)
            .attr('fill', 'url(#circleGradient)');

        // if (startNodeId) {
        //     d3.select(`circle#${startNodeId}`)
        //         .attr('fill', 'url(#startNodeGradient)')
        //         .classed('start-node', true);
        // }

        // if (endNodeId) {
        //     d3.select(`circle#${endNodeId}`)
        //         .attr('fill', 'url(#endNodeGradient)')
        //         .classed('end-node', true);
        // }
    };

    return (
        <>
            {contextMenuPosition && (
                <NodeContextMenu
                    x={contextMenuPosition.x}
                    y={contextMenuPosition.y}
                    nodeId={contextMenuPosition.entityId}
                />
            )}
            <GraphContainer ref={containerRef}>
                <GraphSvg ref={svgRef}></GraphSvg>
            </GraphContainer>
        </>
    );
};

export default Graph;
