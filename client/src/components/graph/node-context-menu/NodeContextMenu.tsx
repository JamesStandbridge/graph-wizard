import React from 'react';
import { useTranslation } from 'react-i18next';

import { LuFlagTriangleRight } from 'react-icons/lu';
import { LiaFlagCheckeredSolid } from 'react-icons/lia';

import { useGraphSimulationStore } from '../../../state-manager/simulationStore';
import { ContextMenu, ContextMenuItem } from './node-context-menu.styled';

interface Props {
    x: number;
    y: number;
    nodeId: string;
    closeMenu: () => void;
}

const NodeContextMenu: React.FC<Props> = ({ x, y, nodeId, closeMenu }) => {
    const { t } = useTranslation('node-context-menu');

    const startNodeId = useGraphSimulationStore((state) => state.startNodeId);
    const endNodeId = useGraphSimulationStore((state) => state.endNodeId);

    const setStartNodeId = useGraphSimulationStore(
        (state) => state.setStartNodeId,
    );

    const setEndNodeId = useGraphSimulationStore((state) => state.setEndNodeId);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const setStartNode = () => {
        if (nodeId === endNodeId) setEndNodeId(null);
        setStartNodeId(nodeId);
    };

    const setEndNode = () => {
        if (nodeId === startNodeId) setStartNodeId(null);
        setEndNodeId(nodeId);
    };

    return (
        <ContextMenu
            style={{ left: x + 'px', top: y + 'px' }}
            onMouseDown={handleMouseDown}
        >
            <ContextMenuItem onClick={setStartNode}>
                <LuFlagTriangleRight />
                {t('set_start_node')}
            </ContextMenuItem>
            <ContextMenuItem onClick={setEndNode}>
                <LiaFlagCheckeredSolid />
                {t('set_end_node')}
            </ContextMenuItem>
        </ContextMenu>
    );
};

export default NodeContextMenu;
