import { isDefined } from '../../../../helpers/var-helpers';
import { useGraphStore } from '../../../../state-manager/graph-store/graphStore';
import { useGraphSimulationStore } from '../../../../state-manager/simulation-store/simulationStore';
import { GraphLink } from '../../../graph/graph.type';

import {
    AlgorithmApplication,
    ProcessResponse,
    RequirementResponse,
} from '../algorithm-application.type';
import { DijkstraConfiguration } from './dijkstra-application.type';

export const initialDijkstraState: DijkstraConfiguration = {
    startNodeId: null,
    endNodeId: null,
};

const DijkstraApplication: AlgorithmApplication = {
    checkSimulationRequirements: (): RequirementResponse => {
        const algoConf: DijkstraConfiguration = useGraphSimulationStore(
            (state) => state.configuration,
        ) as DijkstraConfiguration;

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
        const links: GraphLink[] = useGraphStore((state) => state.links);

        for (let i = 0; i < links.length; i++) {
            if (links[i].weight < 0) {
                return {
                    status: 'error',
                    errorMessage: 'error_negative_weight',
                };
            }
        }

        return {
            status: 'success',
        };
    },

    launch: (): ProcessResponse => {
        return {
            status: 'success',
        };
    },
};

export default DijkstraApplication;
