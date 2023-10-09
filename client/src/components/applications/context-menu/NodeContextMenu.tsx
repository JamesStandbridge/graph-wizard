import { useAppStore } from '../../../state-manager/app-store/appStore';
import AlgorithmNodeContextMenu from '../algorithm/AlgorithmNodeContextMenu';
import GraphNodeContextMenu from '../graph/GraphNodeContextMenu';
import { ContextMenuContainer } from './context-menu.styled';

type Props = {
    x: number;
    y: number;
    nodeId: string;
};

const NodeContextMenu: React.FC<Props> = ({ x, y, nodeId }) => {
    const currentLayout = useAppStore((state) => state.currentLayout);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const renderNodeContextMenu = () => {
        switch (currentLayout) {
            case 'algorithm': {
                return <AlgorithmNodeContextMenu nodeId={nodeId} />;
            }
            case 'graph': {
                return <GraphNodeContextMenu nodeId={nodeId} />;
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

export default NodeContextMenu;
