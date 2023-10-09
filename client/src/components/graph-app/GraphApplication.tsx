import Graph from '../graph/Graph';
import { PathStep } from '../graph/graph.type';
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

const GraphApplication = ({}: Props) => {
    return (
        <GraphApplicationContainer>
            <Graph path={path} />
        </GraphApplicationContainer>
    );
};

export default GraphApplication;
