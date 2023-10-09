import React from 'react';

import { useGraphSimulationStore } from '../../../state-manager/simulation-store/simulationStore';

type Props = {};

const AlgorithmContextMenu: React.FC<Props> = ({}) => {
    const currentAlgorithm = useGraphSimulationStore(
        (state) => state.algorithm,
    );

    if (!currentAlgorithm) return null;

    const renderContextMenu = () => {
        switch (currentAlgorithm) {
            default:
                return null;
        }
    };

    return <>{renderContextMenu()}</>;
};

export default AlgorithmContextMenu;
