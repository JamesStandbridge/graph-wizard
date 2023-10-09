import React from 'react';

import DijkstraNodeContextMenu from './dijkstra/DijkstraNodeContextMenu';
import BellmanFordNodeContextMenu from './bellman-ford/BellmanFordNodeContextMenu';
import { useGraphSimulationStore } from '../../../state-manager/simulation-store/simulationStore';

type Props = {
    nodeId: string;
};

const AlgorithmNodeContextMenu: React.FC<Props> = ({ nodeId }) => {
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

    return <>{renderContextMenu()}</>;
};

export default AlgorithmNodeContextMenu;
