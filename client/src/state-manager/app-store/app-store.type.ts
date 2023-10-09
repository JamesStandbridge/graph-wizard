export interface AppState {
    currentLayout: AppLayout;

    setLayout: (layout: AppLayout) => void;
}

export type AppLayout = 'algorithm' | 'graph';
