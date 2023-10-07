import { SupportedGraphAlgorithm } from '../../state-manager/simulation-store.type';
import { RequirementResponse } from '../algorithm-applications/algorithm-application.type';
import BellmanFordApplication from '../algorithm-applications/bellman-ford/bellman-ford-application.service';
import DijkstraApplication from '../algorithm-applications/dijkstra/dijkstra-application.service';

const MenuApplicationService = {
    checkGraphRequirements: (
        algorithm: SupportedGraphAlgorithm,
    ): RequirementResponse => {
        switch (algorithm) {
            case 'bellman-ford':
                return BellmanFordApplication.checkGraphRequirements();
            case 'dijkstra':
                return DijkstraApplication.checkGraphRequirements();
            default:
                return {
                    status: 'error',
                    errorMessage: 'Not implemented yet',
                };
        }
    },
};

export default MenuApplicationService;
