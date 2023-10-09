import { useAppStore } from '../../../state-manager/app-store/appStore';
import AlgorithmContextMenu from '../algorithm/AlgorithmContextMenu';
import GraphContextMenu from '../graph/GraphContextMenu';
import { ContextMenuContainer } from './context-menu.styled';

type Props = {
    x: number;
    y: number;
};

const ContextMenu: React.FC<Props> = ({ x, y }) => {
    const currentLayout = useAppStore((state) => state.currentLayout);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const renderNodeContextMenu = () => {
        switch (currentLayout) {
            case 'algorithm': {
                return <AlgorithmContextMenu />;
            }
            case 'graph': {
                return <GraphContextMenu />;
            }
        }
    };

    return (
        <ContextMenuContainer
            style={{ left: x + 'px', top: y + 'px' }}
            onMouseDown={handleMouseDown}
        >
            {renderNodeContextMenu()}
        </ContextMenuContainer>
    );
};

export default ContextMenu;
