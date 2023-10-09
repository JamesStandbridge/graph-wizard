import { create } from 'zustand';
import {
    GraphEditionState,
    SupportedEditionActions,
} from './graph-edition-store.type';

export const useGraphEditionStore = create<GraphEditionState>()((set) => ({
    editionAction: null,

    setEditionAction: (editionAction: SupportedEditionActions | null) => {
        set({
            editionAction,
        });
    },
}));
