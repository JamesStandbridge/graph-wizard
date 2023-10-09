import { create } from 'zustand';
import { AppLayout, AppState } from './app-store.type';

export const useAppStore = create<AppState>()((set) => ({
    currentLayout: 'algorithm',

    setLayout: (layout: AppLayout) => set({ currentLayout: layout }),
}));
