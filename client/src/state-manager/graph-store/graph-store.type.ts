import { GraphLink, GraphNode } from '../../components/graph/graph.type';

export interface GraphState {
    nodes: GraphNode[];
    links: GraphLink[];

    setNodes: (nodes: GraphNode[]) => void;
    setLinks: (links: GraphLink[]) => void;

    addNode: (id: string) => void;
    deleteNode: (id: string) => void;
}
