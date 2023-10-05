import { useGraphSimulationStore } from '../../../../state-manager/simulationStore';
import {
    ApplicationMenuContainer,
    MenuHeader,
    MenuTitle,
} from './algorithm-menu.styled';

import BellmanFordConfigurationMenu from './dijkstra/BellmanFordConfigurationMenu';
import DijkstraConfigurationMenu from './dijkstra/DijkstraConfigurationMenu';

type Props = {};

const AlgorithmMenu = ({}: Props) => {
    const currentAlgorithm = useGraphSimulationStore(
        (state) => state.algorithm,
    );

    if (!currentAlgorithm) return null;

    const renderMenu = () => {
        switch (currentAlgorithm) {
            case 'dijkstra':
                return <DijkstraConfigurationMenu />;
            case 'bellman-ford':
                return <BellmanFordConfigurationMenu />;
            default:
                return null;
        }
    };

    return (
        <ApplicationMenuContainer>
            <MenuHeader>
                <MenuTitle>{`${currentAlgorithm} configuration`}</MenuTitle>
            </MenuHeader>
            {renderMenu()}
        </ApplicationMenuContainer>
    );
};

export default AlgorithmMenu;
