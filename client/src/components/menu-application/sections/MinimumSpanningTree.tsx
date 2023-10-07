import { useTranslation } from 'react-i18next';

import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia';
import { PiGraph } from 'react-icons/pi';

import {
    MenuSection,
    SectionBody,
    SectionHeader,
    SectionTitle,
} from '../menu-application.styled';
import MenuItem from '../menu-item/MenuItem';
import { SupportedGraphAlgorithm } from '../../../state-manager/simulation-store.type';
import { useGraphSimulationStore } from '../../../state-manager/simulationStore';
import MenuApplicationService from '../menu-application.service';

type Props = { isOpen: boolean; onToggle: () => void };

const MinimumSpanningTree = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#aa4141';

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
                    {t('menu_section_min_spanning_tree_title')}
                </SectionTitle>
                {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </SectionHeader>
            {isOpen ? (
                <SectionBody>
                    <MenuItem
                        color={color}
                        icon={<PiGraph />}
                        title="Kruskal"
                        onClick={() => handleClick('kruskal')}
                        selected={currentAlgorithm === 'kruskal'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'kruskal',
                        )}
                    />
                    <MenuItem
                        color={color}
                        icon={<PiGraph />}
                        title="Prim"
                        onClick={() => handleClick('prim')}
                        selected={currentAlgorithm === 'prim'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'prim',
                        )}
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default MinimumSpanningTree;
