export interface GraphSimulationState {
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
