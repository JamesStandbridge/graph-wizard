import { useTranslation } from 'react-i18next';
import { LiaRedoAltSolid, LiaPlaySolid } from 'react-icons/lia';

import {
    ApplicationMenuContainer,
    MenuLabel,
    MenuValue,
    MenuLine,
} from './dijkstra-configuration.styled';
import { useGraphSimulationStore } from '../../../../state-manager/simulationStore';
import Select from '../../../form/base/select/Select';
import Button from '../../../form/base/button/Button';
import {
    AlgorithmConfiguration,
    DijkstraConfiguration,
} from '../../../../state-manager/store.type';

type Props = { onSimulationTrigger: () => void; isSimulating: boolean };

const DijkstraConfiguration = ({
    onSimulationTrigger,
    isSimulating,
}: Props) => {
    const { t } = useTranslation('dijkstra-menu');

    const algoConf: AlgorithmConfiguration | null = useGraphSimulationStore(
        (state) => state.configuration,
    );

    if (!algoConf) return null;

    const dijkstra = algoConf as DijkstraConfiguration;

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

export default DijkstraConfiguration;
