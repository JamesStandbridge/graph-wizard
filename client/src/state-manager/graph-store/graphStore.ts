import { create } from 'zustand';

import { GraphState } from './graph-store.type';
import { GraphLink, GraphNode } from '../../components/graph/graph.type';

const initialNodes: GraphNode[] = [
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

const initialLinks: GraphLink[] = [
    { source: 'Paris', target: 'Lyon', weight: -465, oriented: false },
    { source: 'Lyon', target: 'Marseille', weight: 315, oriented: false },
    { source: 'Marseille', target: 'Toulouse', weight: 403, oriented: false },
    { source: 'Toulouse', target: 'Bordeaux', weight: 246, oriented: false },
    { source: 'Bordeaux', target: 'Nantes', weight: 334, oriented: false },
    { source: 'Nantes', target: 'Paris', weight: 385, oriented: false },
    { source: 'Marseille', target: 'Bordeaux', weight: 645, oriented: false },
    { source: 'Toulouse', target: 'Lyon', weight: 538, oriented: false },
    { source: 'Bordeaux', target: 'Strasbourg', weight: 760, oriented: false },
    { source: 'Strasbourg', target: 'Lille', weight: 570, oriented: false },
    { source: 'Lille', target: 'Nice', weight: 835, oriented: false },
    { source: 'Nice', target: 'Rennes', weight: 1145, oriented: false },
    { source: 'Rennes', target: 'Montpellier', weight: 889, oriented: false },
    { source: 'Montpellier', target: 'Paris', weight: 748, oriented: false },
];

export const useGraphStore = create<GraphState>()((set) => ({
    nodes: initialNodes,
    links: initialLinks,

    setNodes: (nodes: GraphNode[]) => set({ nodes }),
    setLinks: (links: GraphLink[]) => set({ links }),

    addNode: (id: string) =>
        set((state) => ({
            nodes: [...state.nodes, { id }],
        })),

    deleteNode: (id: string) => {
        const updatedLinks = initialLinks.filter(
            (link) => link.source !== id && link.target !== id,
        );
        set((state) => ({
            nodes: state.nodes.filter((node) => node.id !== id),
            links: updatedLinks,
        }));
    },
}));
