import { useTranslation } from 'react-i18next';
import { LiaRedoAltSolid, LiaPlaySolid } from 'react-icons/lia';

import {
    MenuLabel,
    MenuLine,
    MenuValue,
} from '../sub-menu/algorithm-menu.styled';
import Button from '../../form/base/button/Button';
import { useGraphSimulationStore } from '../../../state-manager/simulationStore';
import DijkstraApplication from './bellman-ford-application.service';
import { BellmanFordConfiguration } from './bellman-ford-application.type';

type Props = {};

const BellmanFordConfigurationMenu = ({}: Props) => {
    const { t } = useTranslation('app-menu');

    const appConf: BellmanFordConfiguration = useGraphSimulationStore(
        (state) => state.configuration,
    ) as BellmanFordConfiguration;

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

export default BellmanFordConfigurationMenu;
