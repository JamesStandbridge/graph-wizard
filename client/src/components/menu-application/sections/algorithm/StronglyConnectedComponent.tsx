import { useTranslation } from 'react-i18next';

import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia';
import { SiGraphql } from 'react-icons/si';

import {
    MenuSection,
    SectionBody,
    SectionHeader,
    SectionTitle,
} from '../../menu-application.styled';
import MenuItem from '../../menu-item/MenuItem';
import { useGraphSimulationStore } from '../../../../state-manager/simulation-store/simulationStore';
import { SupportedGraphAlgorithm } from '../../../../state-manager/simulation-store/simulation-store.type';
import MenuApplicationService from '../../menu-application.service';

type Props = { isOpen: boolean; onToggle: () => void };

const StronglyConnectedComponent = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#f9bd38';

    const setAlgorithm = useGraphSimulationStore((state) => state.setAlgorithm);
    const currentAlgorithm = useGraphSimulationStore(
        (state) => state.algorithm,
    );

    const handleClick = (name: string) => {
        const algorithm = name as SupportedGraphAlgorithm;
        setAlgorithm(algorithm);
    };

    return (
        <MenuSection>
            <SectionHeader onClick={() => onToggle()}>
                <SectionTitle>
                    {t('menu_section_strongly_connected_component_title')}
                </SectionTitle>
                {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </SectionHeader>
            {isOpen ? (
                <SectionBody>
                    <MenuItem
                        color={color}
                        icon={<SiGraphql />}
                        title="Tarjan"
                        onClick={() => handleClick('tarjan')}
                        selected={currentAlgorithm === 'tarjan'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'tarjan',
                        )}
                    />
                    <MenuItem
                        color={color}
                        icon={<SiGraphql />}
                        title="Kosaraju"
                        onClick={() => handleClick('kosaraju')}
                        selected={currentAlgorithm === 'kosaraju'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'kosaraju',
                        )}
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default StronglyConnectedComponent;
