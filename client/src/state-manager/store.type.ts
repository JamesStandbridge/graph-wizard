import { GraphLink, GraphNode } from '../components/graph/graph.type';

export interface GraphSimulationState {
    nodes: GraphNode[];
    links: GraphLink[];

    configuration: AlgorithmConfiguration | null;
    algorithm: GraphAlgorithm | null;

    setAlgorithm: (algorithm: GraphAlgorithm | null) => void;
    setConfiguration: (configuration: AlgorithmConfiguration | null) => void;
}

export type GraphAlgorithm = 'dijkstra' | 'a-star' | 'dfs' | 'bfs';

export type AlgorithmConfiguration = {};

export interface DijkstraConfiguration extends AlgorithmConfiguration {
    startNodeId: string | null;
    endNodeId: string | null;
}
