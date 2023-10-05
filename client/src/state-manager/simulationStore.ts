import { create } from 'zustand';
import {
    AlgorithmConfiguration,
    GraphAlgorithm,
    GraphSimulationState,
} from './store.type';

export const useGraphSimulationStore = create<GraphSimulationState>()(
    (set) => ({
        nodes: [],
        links: [],
        algorithm: null,
        configuration: null,

        setAlgorithm: (algorithm: GraphAlgorithm | null) => set({ algorithm }),

        setConfiguration: (configuration: AlgorithmConfiguration | null) =>
            set({ configuration }),
    }),
);
