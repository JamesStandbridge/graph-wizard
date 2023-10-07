import React from 'react';

import { useGraphSimulationStore } from '../../../state-manager/simulationStore';
import { ContextMenu } from './node-context-menu.styled';
import DijkstraNodeContextMenu from '../dijkstra/DijkstraNodeContextMenu';
import BellmanFordNodeContextMenu from '../bellman-ford/BellmanFordNodeContextMenu';

interface Props {
    x: number;
    y: number;
    nodeId: string;
}

const NodeContextMenu: React.FC<Props> = ({ x, y, nodeId }) => {
    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const currentAlgorithm = useGraphSimulationStore(
        (state) => state.algorithm,
    );

    if (!currentAlgorithm) return null;

    const renderContextMenu = () => {
        switch (currentAlgorithm) {
            case 'dijkstra':
                return <DijkstraNodeContextMenu nodeId={nodeId} />;

            case 'bellman-ford':
                return <BellmanFordNodeContextMenu nodeId={nodeId} />;
            default:
                return null;
        }
    };

    return (
        <ContextMenu
            style={{ left: x + 'px', top: y + 'px' }}
            onMouseDown={handleMouseDown}
        >
            {renderContextMenu()}
        </ContextMenu>
    );
};

export default NodeContextMenu;
