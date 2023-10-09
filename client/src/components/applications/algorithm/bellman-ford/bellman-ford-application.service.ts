import { isDefined } from '../../../../helpers/var-helpers';
import { useGraphSimulationStore } from '../../../../state-manager/simulation-store/simulationStore';

import {
    AlgorithmApplication,
    ProcessResponse,
    RequirementResponse,
} from '../algorithm-application.type';
import { BellmanFordConfiguration } from './bellman-ford-application.type';

export const initialBellmanFordState: BellmanFordConfiguration = {
    startNodeId: null,
    endNodeId: null,
};

const BellmanFordApplication: AlgorithmApplication = {
    checkSimulationRequirements: (): RequirementResponse => {
        const algoConf: BellmanFordConfiguration = useGraphSimulationStore(
            (state) => state.configuration,
        ) as BellmanFordConfiguration;

        if (
            isDefined(algoConf?.startNodeId) &&
            isDefined(algoConf?.endNodeId)
        ) {
            return {
                status: 'success',
            };
        } else {
            return {
                status: 'error',
            };
        }
    },

    checkGraphRequirements: (): RequirementResponse => {
        return { status: 'success' };
    },

    launch: (): ProcessResponse => {
        return {
            status: 'success',
        };
    },
};

export default BellmanFordApplication;
