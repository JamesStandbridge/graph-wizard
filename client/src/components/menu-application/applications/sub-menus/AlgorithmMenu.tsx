import { useGraphSimulationStore } from '../../../../state-manager/simulationStore';
import { ApplicationMenuContainer } from './algorithm-menu.styled';
import DijkstraConfigurationMenu from './dijkstra/DijkstraConfigurationMenu';

type Props = {};

const AlgorithmMenu = ({}: Props) => {
    const currentAlgorithm = useGraphSimulationStore(
        (state) => state.algorithm,
    );

    console.log(currentAlgorithm);

    if (currentAlgorithm === 'dijkstra') {
        return (
            <ApplicationMenuContainer>
                <DijkstraConfigurationMenu />
            </ApplicationMenuContainer>
        );
    }

    return null;
};

export default AlgorithmMenu;
