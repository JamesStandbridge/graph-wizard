import { useTranslation } from 'react-i18next';
import { LiaRedoAltSolid, LiaPlaySolid } from 'react-icons/lia';

import Button from '../../../../form/base/button/Button';
import {
    AlgorithmConfiguration,
    BellmanFordConfiguration,
} from '../../../../../state-manager/store.type';
import { useGraphSimulationStore } from '../../../../../state-manager/simulationStore';
import { MenuLabel, MenuLine, MenuValue } from '../algorithm-menu.styled';

type Props = {};

const BellmanFordConfigurationMenu = ({}: Props) => {
    const { t } = useTranslation('app-menu');

    const algoConf: AlgorithmConfiguration | null = useGraphSimulationStore(
        (state) => state.configuration,
    );

    if (!algoConf) return null;

    const bellmanFord = algoConf as BellmanFordConfiguration;

    const onSimulationTrigger = () => {};

    const isSimulating = false;

    return (
        <>
            <MenuLine>
                <MenuLabel>{t('simulation_start_node_key')}</MenuLabel>
                <MenuValue italic={!bellmanFord.startNodeId}>
                    {bellmanFord.startNodeId
                        ? bellmanFord.startNodeId
                        : t('simulation_select_node_helper')}
                </MenuValue>
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('simulation_end_node_key')}</MenuLabel>
                <MenuValue italic={!bellmanFord.endNodeId}>
                    {bellmanFord.endNodeId
                        ? bellmanFord.endNodeId
                        : t('simulation_select_node_helper')}
                </MenuValue>
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('simulation_menu_key')}</MenuLabel>
                <Button
                    severity={isSimulating ? 'danger' : 'info'}
                    onClick={onSimulationTrigger}
                    icon={isSimulating ? <LiaRedoAltSolid /> : <LiaPlaySolid />}
                >
                    {isSimulating
                        ? t('simulation_btn_reset')
                        : t('simulation_btn_start')}
                </Button>
            </MenuLine>
        </>
    );
};

export default BellmanFordConfigurationMenu;
