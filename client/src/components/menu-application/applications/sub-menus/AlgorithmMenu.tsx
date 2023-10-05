import { useGraphSimulationStore } from '../../../../state-manager/simulationStore';
import DijkstraConfigurationMenu from './dijkstra/DijkstraConfigurationMenu';

type Props = {};

const AlgorithmMenu = ({}: Props) => {
    const currentAlgorithm = useGraphSimulationStore(
        (state) => state.algorithm,
    );

    console.log(currentAlgorithm);

    if (currentAlgorithm === 'dijkstra') {
        return <DijkstraConfigurationMenu />;
    }

    return null;
};

export default AlgorithmMenu;
