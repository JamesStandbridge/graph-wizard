import { SupportedGraphAlgorithm } from '../../state-manager/simulation-store/simulation-store.type';
import { RequirementResponse } from '../applications/algorithm/algorithm-application.type';
import BellmanFordApplication from '../applications/algorithm/bellman-ford/bellman-ford-application.service';
import DijkstraApplication from '../applications/algorithm/dijkstra/dijkstra-application.service';

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
                    errorMessage: 'error_not_implemented',
                };
        }
    },
};

export default MenuApplicationService;
