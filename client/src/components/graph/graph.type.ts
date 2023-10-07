export interface GraphNode extends d3.SimulationNodeDatum {
    id: string;
    x?: number; // x et y sont optionnels car ils peuvent être définis par D3
    y?: number;
    fx?: number | null;
    fy?: number | null;
}

export type GraphLink = {
    source: GraphNode | string; // Peut être soit un nœud direct, soit un ID de nœud
    target: GraphNode | string;
    weight: number;
    oriented: boolean;
};

export interface GradientStopData {
    offset: string;
    color: string;
}

export type PathStep = { type: 'link' | 'node'; id: string };
