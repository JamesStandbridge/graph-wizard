import React from 'react';
import { useTranslation } from 'react-i18next';

import { LuFlagTriangleRight } from 'react-icons/lu';
import { LiaFlagCheckeredSolid } from 'react-icons/lia';

import { useGraphSimulationStore } from '../../../state-manager/simulationStore';
import { BellmanFordConfiguration } from './bellman-ford-application.type';
import { ContextMenuItem } from '../node-context-menu/node-context-menu.styled';

interface Props {
    nodeId: string;
}

const BellmanFordNodeContextMenu: React.FC<Props> = ({ nodeId }) => {
    const { t } = useTranslation('node-context-menu');

    const appConf: BellmanFordConfiguration = useGraphSimulationStore(
        (state) => state.configuration,
    ) as BellmanFordConfiguration;

    const setConfiguration = useGraphSimulationStore(
        (state) => state.setConfiguration,
    );

    return (
        <>
            <ContextMenuItem
                onClick={() =>
                    setConfiguration({ ...appConf, startNodeId: nodeId })
                }
            >
                <LuFlagTriangleRight />
                {t('set_start_node')}
            </ContextMenuItem>
            <ContextMenuItem
                onClick={() =>
                    setConfiguration({ ...appConf, endNodeId: nodeId })
                }
            >
                <LiaFlagCheckeredSolid />
                {t('set_end_node')}
            </ContextMenuItem>
        </>
    );
};

export default BellmanFordNodeContextMenu;
