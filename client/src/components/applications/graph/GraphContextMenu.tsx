import React from 'react';

import { useGraphEditionStore } from '../../../state-manager/graph-edition-store/graphEditionStore';
import DrawContextMenu from './draw/DrawContextMenu';

type Props = {};

const GraphNodeContextMenu: React.FC<Props> = ({}) => {
    const currentEditionAction = useGraphEditionStore(
        (state) => state.editionAction,
    );

    if (!currentEditionAction) return null;

    const renderContextMenu = () => {
        switch (currentEditionAction) {
            case 'draw':
                return <DrawContextMenu />;

            default:
                return null;
        }
    };

    return <>{renderContextMenu()}</>;
};

export default GraphNodeContextMenu;
