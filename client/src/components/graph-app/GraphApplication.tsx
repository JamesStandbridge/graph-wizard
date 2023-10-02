import Graph from '../graph/Graph';
import { GraphLink, GraphNode, PathStep } from '../graph/graph.type';
import { GraphApplicationContainer } from './graph-application.styled';

type Props = {};

const path: PathStep[] = [
    { type: 'node', id: 'node_0' },
    { type: 'link', id: 'link_0-1' },
    { type: 'node', id: 'node_1' },
    { type: 'link', id: 'link_1-2' },
    { type: 'node', id: 'node_2' },
    { type: 'link', id: 'link_2-4' },
    { type: 'node', id: 'node_4' },
    { type: 'link', id: 'link_4-6' },
    { type: 'node', id: 'node_6' },
];

const nodes: GraphNode[] = [
    { id: 'node_0' },
    { id: 'node_1' },
    { id: 'node_2' },
    { id: 'node_3' },
    { id: 'node_4' },
    { id: 'node_5' },
    { id: 'node_6' },
    { id: 'node_7' },
    { id: 'node_8' },
    { id: 'node_9' },
    { id: 'node_10' },
];

const links: GraphLink[] = [
    { source: 'node_0', target: 'node_1', value: 5, oriented: true },
    { source: 'node_1', target: 'node_2', value: 3, oriented: true },
    { source: 'node_2', target: 'node_3', value: 4, oriented: true },
    { source: 'node_3', target: 'node_4', value: 2, oriented: true },
    { source: 'node_4', target: 'node_5', value: -6, oriented: true },
    { source: 'node_5', target: 'node_0', value: -5, oriented: true },
    { source: 'node_2', target: 'node_4', value: 1, oriented: true },
    { source: 'node_3', target: 'node_1', value: 3, oriented: true },
    { source: 'node_4', target: 'node_6', value: 2, oriented: true },
    { source: 'node_6', target: 'node_7', value: 3, oriented: true },
    { source: 'node_7', target: 'node_8', value: 4, oriented: true },
    { source: 'node_8', target: 'node_9', value: 2, oriented: true },
    { source: 'node_9', target: 'node_10', value: 1, oriented: true },
    { source: 'node_10', target: 'node_0', value: 4, oriented: true },
];

const GraphApplication = ({}: Props) => {
    return (
        <GraphApplicationContainer>
            <Graph path={path} nodes={nodes} links={links} />
        </GraphApplicationContainer>
    );
};

export default GraphApplication;
