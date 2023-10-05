import { create } from 'zustand';
import {
    AlgorithmConfiguration,
    DijkstraConfiguration,
    GraphAlgorithm,
    GraphSimulationState,
} from './store.type';

export const useGraphSimulationStore = create<GraphSimulationState>()(
    (set) => ({
        nodes: [],
        links: [],
        algorithm: null,
        configuration: null,

        setAlgorithm: (algorithm: GraphAlgorithm | null) => {
            set({ algorithm, configuration: initialDijkstraState });
        },

        setConfiguration: (configuration: AlgorithmConfiguration | null) =>
            set({ configuration }),
    }),
);

export const initialDijkstraState: DijkstraConfiguration = {
    startNodeId: null,
    endNodeId: null,
};
