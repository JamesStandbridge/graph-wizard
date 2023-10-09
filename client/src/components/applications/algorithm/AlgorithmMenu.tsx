import BellmanFordConfigurationMenu from '../algorithm/bellman-ford/BellmanFordConfigurationMenu';
import DijkstraConfigurationMenu from '../algorithm/dijkstra/DijkstraConfigurationMenu';
import {
    ApplicationMenuContainer,
    MenuHeader,
    MenuHeaderActions,
    MenuTitle,
} from '../sub-menu/sub-menu.styled';
import CloseButton from '../../form/base/close-button/CloseButton';
import { useGraphSimulationStore } from '../../../state-manager/simulation-store/simulationStore';

type Props = {};

const AlgorithmMenu = ({}: Props) => {
    const currentAlgorithm = useGraphSimulationStore(
        (state) => state.algorithm,
    );

    const setAlgorithm = useGraphSimulationStore((state) => state.setAlgorithm);

    if (!currentAlgorithm) return null;

    const handleCloseApplication = () => setAlgorithm(null);

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
                <MenuHeaderActions>
                    <CloseButton onClose={handleCloseApplication} />
                </MenuHeaderActions>
            </MenuHeader>
            {renderMenu()}
        </ApplicationMenuContainer>
    );
};

export default AlgorithmMenu;
