import { create } from 'zustand';

import {
    AlgorithmConfiguration,
    SupportedGraphAlgorithm,
    GraphSimulationState,
} from './simulation-store.type';
import { initialDijkstraState } from '../components/algorithm-applications/dijkstra/dijkstra-application.service';
import { initialBellmanFordState } from '../components/algorithm-applications/bellman-ford/bellman-ford-application.service';

export const useGraphSimulationStore = create<GraphSimulationState>()(
    (set) => ({
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
