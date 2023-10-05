import { useTranslation } from 'react-i18next';
import { LiaRedoAltSolid, LiaPlaySolid } from 'react-icons/lia';

import {
    ApplicationMenuContainer,
    MenuLabel,
    MenuValue,
    MenuLine,
} from './dijkstra-configuration-menu.styled';
import Button from '../../../../form/base/button/Button';
import {
    AlgorithmConfiguration,
    DijkstraConfiguration,
} from '../../../../../state-manager/store.type';
import { useGraphSimulationStore } from '../../../../../state-manager/simulationStore';

type Props = {};

const DijkstraConfigurationMenu = ({}: Props) => {
    const { t } = useTranslation('app-menu');

    const algoConf: AlgorithmConfiguration | null = useGraphSimulationStore(
        (state) => state.configuration,
    );

    if (!algoConf) return null;

    const dijkstra = algoConf as DijkstraConfiguration;

    const onSimulationTrigger = () => {};

    const isSimulating = false;

    return (
        <ApplicationMenuContainer>
            <MenuLine>
                <MenuLabel>{t('simulation_start_node_key')}</MenuLabel>
                <MenuValue italic={!dijkstra.startNodeId}>
                    {dijkstra.startNodeId
                        ? dijkstra.startNodeId
                        : t('simulation_select_node_helper')}
                </MenuValue>
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('simulation_end_node_key')}</MenuLabel>
                <MenuValue italic={!dijkstra.endNodeId}>
                    {dijkstra.endNodeId
                        ? dijkstra.endNodeId
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
        </ApplicationMenuContainer>
    );
};

export default DijkstraConfigurationMenu;
