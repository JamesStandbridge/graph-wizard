export interface GraphEditionState {
    editionAction: SupportedEditionAction | null;

    setEditionAction: (editionAction: SupportedEditionAction | null) => void;
}

export type SupportedEditionAction = 'draw';
