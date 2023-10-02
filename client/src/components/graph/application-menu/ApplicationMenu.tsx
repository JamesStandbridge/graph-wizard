import { useTranslation } from 'react-i18next';
import { LiaRedoAltSolid, LiaPlaySolid } from 'react-icons/lia';

import Button from '../../form/base/button/Button';
import {
    ApplicationMenuContainer,
    MenuLabel,
    MenuValue,
    MenuLine,
} from './application-menu.styled';
import { useGraphSimulationStore } from '../../../state-manager/simulationStore';
import Select from '../../form/base/select/Select';

type Props = { onSimulationTrigger: () => void; isSimulating: boolean };

const ApplicationMenu = ({ onSimulationTrigger, isSimulating }: Props) => {
    const { t } = useTranslation('app-menu');

    const startNodeId = useGraphSimulationStore((state) => state.startNodeId);
    const endNodeId = useGraphSimulationStore((state) => state.endNodeId);

    return (
        <ApplicationMenuContainer>
            <MenuLine>
                <MenuLabel>{t('simulation_start_node_key')}</MenuLabel>
                <MenuValue italic={!startNodeId}>
                    {startNodeId
                        ? startNodeId
                        : t('simulation_select_node_helper')}
                </MenuValue>
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('simulation_end_node_key')}</MenuLabel>
                <MenuValue italic={!endNodeId}>
                    {endNodeId ? endNodeId : t('simulation_select_node_helper')}
                </MenuValue>
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('simulation_algorithm_key')}</MenuLabel>
                <Select
                    value={'dijkstra'}
                    options={[{ value: 'dijkstra', label: 'Dijkstra' }]}
                    onChange={() => {}}
                />
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

export default ApplicationMenu;
