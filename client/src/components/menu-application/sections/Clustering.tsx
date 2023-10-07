import { useTranslation } from 'react-i18next';

import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia';
import { ImMakeGroup } from 'react-icons/im';

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

const Clustering = ({ isOpen, onToggle }: Props) => {
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
                    {t('menu_section_clustering_title')}
                </SectionTitle>
                {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </SectionHeader>
            {isOpen ? (
                <SectionBody>
                    <MenuItem
                        color={color}
                        icon={<ImMakeGroup />}
                        title="Girvan-Newman"
                        onClick={() => handleClick('girvan-newman')}
                        selected={currentAlgorithm === 'girvan-newman'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'girvan-newman',
                        )}
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default Clustering;
