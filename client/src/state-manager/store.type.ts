import { GraphLink, GraphNode } from '../components/graph/graph.type';

export interface GraphSimulationState {
    nodes: GraphNode[];
    links: GraphLink[];

    configuration: AlgorithmConfiguration | null;
    algorithm: SupportedGraphAlgorithm | null;

    setAlgorithm: (algorithm: SupportedGraphAlgorithm | null) => void;
    setConfiguration: (configuration: AlgorithmConfiguration | null) => void;
}

export type SupportedGraphAlgorithm =
    | 'dijkstra'
    | 'a-star'
    | 'dfs'
    | 'bfs'
    | 'girvan-newman'
    | 'kosaraju'
    | 'tarjan'
    | 'bellman-ford'
    | 'kruskal'
    | 'prim'
    | 'union-find'
    | 'girvan-newman';

export type AlgorithmConfiguration = {};

export interface DijkstraConfiguration extends AlgorithmConfiguration {
    startNodeId: string | null;
    endNodeId: string | null;
}

export interface BellmanFordConfiguration extends AlgorithmConfiguration {
    startNodeId: string | null;
    endNodeId: string | null;
}
