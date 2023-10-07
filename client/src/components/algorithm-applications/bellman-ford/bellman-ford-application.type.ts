import { AlgorithmConfiguration } from '../../../state-manager/simulation-store.type';

export interface BellmanFordConfiguration extends AlgorithmConfiguration {
    startNodeId: string | null;
    endNodeId: string | null;
}
