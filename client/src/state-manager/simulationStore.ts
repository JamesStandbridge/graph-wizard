import { create } from 'zustand';
import { GraphLink, GraphNode } from '../components/graph/graph.type';

interface GraphSimulationState {
    startNodeId: string | null;
    endNodeId: string | null;
    nodes: GraphNode[];
    links: GraphLink[];

    setStartNodeId: (id: string | null) => void;
    setEndNodeId: (id: string | null) => void;
}

export const useGraphSimulationStore = create<GraphSimulationState>()(
    (set) => ({
        startNodeId: null,
        endNodeId: null,
        nodes: [],
        links: [],

        setStartNodeId: (id) => set({ startNodeId: id }),
        setEndNodeId: (id) => set({ endNodeId: id }),
    }),
);
