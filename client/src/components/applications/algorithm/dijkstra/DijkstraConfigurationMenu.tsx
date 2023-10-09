import { useTranslation } from 'react-i18next';
import { LiaRedoAltSolid, LiaPlaySolid } from 'react-icons/lia';

import { MenuLabel, MenuLine, MenuValue } from '../../sub-menu/sub-menu.styled';
import Button from '../../../form/base/button/Button';
import DijkstraApplication from './dijkstra-application.service';
import { useGraphSimulationStore } from '../../../../state-manager/simulation-store/simulationStore';
import { DijkstraConfiguration } from './dijkstra-application.type';

type Props = {};

const DijkstraConfigurationMenu = ({}: Props) => {
    const { t } = useTranslation('app-menu');

    const appConf: DijkstraConfiguration = useGraphSimulationStore(
        (state) => state.configuration,
    ) as DijkstraConfiguration;

    if (!appConf) return null;

    const onSimulationTrigger = () => {};

    const isSimulating = false;

    return (
        <>
            <MenuLine>
                <MenuLabel>{t('simulation_start_node_key')}</MenuLabel>
                <MenuValue italic={!appConf.startNodeId}>
                    {appConf.startNodeId
                        ? appConf.startNodeId
                        : t('simulation_select_node_helper')}
                </MenuValue>
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('simulation_end_node_key')}</MenuLabel>
                <MenuValue italic={!appConf.endNodeId}>
                    {appConf.endNodeId
                        ? appConf.endNodeId
                        : t('simulation_select_node_helper')}
                </MenuValue>
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('simulation_menu_key')}</MenuLabel>
                <Button
                    severity={isSimulating ? 'danger' : 'info'}
                    onClick={() => {}}
                    icon={isSimulating ? <LiaRedoAltSolid /> : <LiaPlaySolid />}
                    disabled={
                        DijkstraApplication.checkSimulationRequirements()
                            .status === 'error'
                    }
                >
                    {t('simulation_btn_start')}
                    {/* {isSimulating
                        ? t('simulation_btn_reset')
                        : } */}
                </Button>
            </MenuLine>
        </>
    );
};

export default DijkstraConfigurationMenu;
