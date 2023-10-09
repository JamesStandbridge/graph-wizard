import React from 'react';

import { useGraphEditionStore } from '../../../state-manager/graph-edition-store/graphEditionStore';
import DrawNodeContextMenu from './draw/DrawNodeContextMenu';

type Props = {
    nodeId: string;
};

const GraphNodeContextMenu: React.FC<Props> = ({ nodeId }) => {
    const currentEditionAction = useGraphEditionStore(
        (state) => state.editionAction,
    );

    if (!currentEditionAction) return null;

    const renderContextMenu = () => {
        switch (currentEditionAction) {
            case 'draw':
                return <DrawNodeContextMenu nodeId={nodeId} />;

            default:
                return null;
        }
    };

    return <>{renderContextMenu()}</>;
};

export default GraphNodeContextMenu;
