import { create } from 'zustand';

import {
    AlgorithmConfiguration,
    BellmanFordConfiguration,
    DijkstraConfiguration,
    SupportedGraphAlgorithm,
    GraphSimulationState,
} from './store.type';

export const useGraphSimulationStore = create<GraphSimulationState>()(
    (set) => ({
        nodes: [],
        links: [],
        algorithm: null,
        configuration: null,

        setAlgorithm: (algorithm: SupportedGraphAlgorithm | null) => {
            set({
                algorithm,
                configuration: algorithm ? initStateMapping[algorithm] : null,
            });
        },

        setConfiguration: (configuration: AlgorithmConfiguration | null) =>
            set({ configuration }),
    }),
);

export const initialBellmanFordState: BellmanFordConfiguration = {
    startNodeId: null,
    endNodeId: null,
};

export const initialDijkstraState: DijkstraConfiguration = {
    startNodeId: null,
    endNodeId: null,
};

const initStateMapping: Record<
    SupportedGraphAlgorithm,
    AlgorithmConfiguration
> = {
    dijkstra: initialDijkstraState,
    'a-star': initialDijkstraState,
    'bellman-ford': initialBellmanFordState,
    bfs: initialDijkstraState,
    dfs: initialDijkstraState,
    'girvan-newman': initialDijkstraState,
    kosaraju: initialDijkstraState,
    kruskal: initialDijkstraState,
    prim: initialDijkstraState,
    tarjan: initialDijkstraState,
    'union-find': initialDijkstraState,
};
