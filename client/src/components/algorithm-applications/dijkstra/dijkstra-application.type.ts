import { AlgorithmConfiguration } from '../../../state-manager/simulation-store.type';

export interface DijkstraConfiguration extends AlgorithmConfiguration {
    startNodeId: string | null;
    endNodeId: string | null;
}
