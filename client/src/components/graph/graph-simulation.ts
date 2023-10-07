import * as d3 from 'd3';

import { GradientStopData, GraphLink, GraphNode } from './graph.type';
import { graph_constants } from './graph.constants';

export function isGraphNode(node: string | GraphNode): node is GraphNode {
    return (node as GraphNode).id !== undefined;
}

export const graphElements = {
    generateLinkElement: (
        g: d3.Selection<SVGGElement, unknown, null, undefined>,
        links: GraphLink[],
        nodes: GraphNode[],
    ) => {
        return g
            .append('g')
            .selectAll('polyline')
            .data(links)
            .join('polyline')
            .attr('points', (d: GraphLink) => {
                const source = isGraphNode(d.source)
                    ? d.source
                    : nodes.find((n) => n.id === d.source);
                const target = isGraphNode(d.target)
                    ? d.target
                    : nodes.find((n) => n.id === d.target);

                // Vérifier si 'source' et 'target' sont définis
                if (!source?.x || !source?.y || !target?.x || !target?.y) {
                    return '';
                }

                // Calcul du point intermédiaire
                const midX = (source?.x + target?.x) / 2;
                const midY = (source?.y + target?.y) / 2;

                return `${source?.x},${source?.y} ${midX},${midY} ${target?.x},${target?.y}`;
            })
            .attr('stroke', graph_constants.line_stroke)
            .attr('stroke-width', graph_constants.line_stroke_width)
            .attr('id', (d: GraphLink) => {
                const sourceId = isGraphNode(d.source) ? d.source.id : d.source;
                const targetId = isGraphNode(d.target) ? d.target.id : d.target;
                return `${sourceId}-${targetId}`;
            })
            .attr('marker-mid', (d: GraphLink) =>
                d.oriented ? 'url(#end)' : '',
            );
    },

    generateLinkLabelElement: (
        g: d3.Selection<SVGGElement, unknown, null, undefined>,
        links: GraphLink[],
    ) => {
        return g
            .append('g')
            .selectAll('text')
            .data(links)
            .join('text')
            .text((d: GraphLink) => d.weight)
            .attr('font-size', graph_constants.link_label_font_size)
            .attr('dx', graph_constants.link_label_dx)
            .attr('dy', graph_constants.link_label_dy);
    },

    generateNodeElement: (
        g: d3.Selection<SVGGElement, unknown, null, undefined>,
        nodes: GraphNode[],
    ) => {
        return g
            .append('g')
            .selectAll('circle')
            .data(nodes)
            .join('circle')
            .attr('r', graph_constants.node_radius)
            .attr('fill', 'url(#circleGradient)')
            .style('box-shadow', graph_constants.node_box_shadow)
            .attr('id', (d: GraphNode) => d.id)
            .on('mouseover', function () {
                d3.select(this).classed('node-hover', true);
            })
            .on('mouseout', function () {
                d3.select(this).classed('node-hover', false);
            });
    },

    generateNodeLabelElement: (
        g: d3.Selection<SVGGElement, unknown, null, undefined>,
        nodes: GraphNode[],
    ) => {
        return g
            .append('g')
            .selectAll('text')
            .data(nodes)
            .join('text')
            .text((d: GraphNode) => d.id)
            .attr('font-size', graph_constants.node_label_font_size)
            .attr('font-family', graph_constants.node_label_font_family)
            .attr('text-anchor', 'middle')
            .attr('dy', graph_constants.node_label_dy)
            .attr('fill', graph_constants.node_label_fill)
            .style('text-shadow', graph_constants.node_label_text_shadow)
            .style('pointer-events', 'none');
    },
};

export const circleGradientData: GradientStopData[] = [
    { offset: '0%', color: graph_constants.node_gradient_0 },
    { offset: '100%', color: graph_constants.node_gradient_100 },
];

export const visitedCircleGradientData: GradientStopData[] = [
    { offset: '0%', color: graph_constants.visited_node_gradient_0 },
    { offset: '100%', color: graph_constants.visited_node_gradient_100 },
];

export const startNodeGradientData: GradientStopData[] = [
    { offset: '0%', color: graph_constants.start_node_gradient_0 },
    { offset: '100%', color: graph_constants.start_node_gradient_100 },
];

export const endNodeGradientData: GradientStopData[] = [
    { offset: '0%', color: graph_constants.end_node_gradient_0 },
    { offset: '100%', color: graph_constants.end_node_gradient_100 },
];

export const graphStylor = {
    initMarkers: (svg: any) => {
        svg.append('defs')
            .selectAll('marker')
            .data(['end']) // Marqueur pour le milieu
            .enter()
            .append('marker')
            .attr('id', String)
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 0) // centré sur le point d'inflexion
            .attr('refY', 0)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('class', 'arrowHead');

        return svg;
    },

    initGradients: (svg: any) => {
        svg.append('linearGradient')
            .attr('id', 'circleGradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '0%')
            .attr('y2', '100%')
            .selectAll('stop')
            .data(circleGradientData)
            .enter()
            .append('stop')
            .attr('offset', (d: GradientStopData) => d.offset)
            .attr('stop-color', (d: GradientStopData) => d.color);

        svg.append('linearGradient')
            .attr('id', 'visitedCircleGradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '0%')
            .attr('y2', '100%')
            .selectAll('stop')
            .data(visitedCircleGradientData)
            .enter()
            .append('stop')
            .attr('offset', (d: GradientStopData) => d.offset)
            .attr('stop-color', (d: GradientStopData) => d.color);

        svg.append('linearGradient')
            .attr('id', 'startNodeGradient')
            .selectAll('stop')
            .data(startNodeGradientData)
            .enter()
            .append('stop')
            .attr('offset', (d: GradientStopData) => d.offset)
            .attr('stop-color', (d: GradientStopData) => d.color);

        svg.append('linearGradient')
            .attr('id', 'endNodeGradient')
            .selectAll('stop')
            .data(endNodeGradientData)
            .enter()
            .append('stop')
            .attr('offset', (d: GradientStopData) => d.offset)
            .attr('stop-color', (d: GradientStopData) => d.color);

        return svg;
    },
};
