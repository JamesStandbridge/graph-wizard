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
    { id: 'Paris' },
    { id: 'Lyon' },
    { id: 'Marseille' },
    { id: 'Toulouse' },
    { id: 'Bordeaux' },
    { id: 'Nantes' },
    { id: 'Strasbourg' },
    { id: 'Lille' },
    { id: 'Nice' },
    { id: 'Rennes' },
    { id: 'Montpellier' },
];

const links: GraphLink[] = [
    { source: 'Paris', target: 'Lyon', value: 465, oriented: false },
    { source: 'Lyon', target: 'Marseille', value: 315, oriented: false },
    { source: 'Marseille', target: 'Toulouse', value: 403, oriented: false },
    { source: 'Toulouse', target: 'Bordeaux', value: 246, oriented: false },
    { source: 'Bordeaux', target: 'Nantes', value: 334, oriented: false },
    { source: 'Nantes', target: 'Paris', value: 385, oriented: false },
    { source: 'Marseille', target: 'Bordeaux', value: 645, oriented: false },
    { source: 'Toulouse', target: 'Lyon', value: 538, oriented: false },
    { source: 'Bordeaux', target: 'Strasbourg', value: 760, oriented: false },
    { source: 'Strasbourg', target: 'Lille', value: 570, oriented: false },
    { source: 'Lille', target: 'Nice', value: 835, oriented: false },
    { source: 'Nice', target: 'Rennes', value: 1145, oriented: false },
    { source: 'Rennes', target: 'Montpellier', value: 889, oriented: false },
    { source: 'Montpellier', target: 'Paris', value: 748, oriented: false },
];

const GraphApplication = ({}: Props) => {
    return (
        <GraphApplicationContainer>
            <Graph path={path} nodes={nodes} links={links} />
        </GraphApplicationContainer>
    );
};

export default GraphApplication;
