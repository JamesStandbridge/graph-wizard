import { useTranslation } from 'react-i18next';

import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia';
import { TbBinaryTree } from 'react-icons/tb';
import { MdOutlineGroupWork } from 'react-icons/md';

import {
    MenuSection,
    SectionBody,
    SectionHeader,
    SectionTitle,
} from '../menu-application.styled';
import MenuItem from '../menu-item/MenuItem';
import { SupportedGraphAlgorithm } from '../../../state-manager/store.type';
import { useGraphSimulationStore } from '../../../state-manager/simulationStore';

type Props = { isOpen: boolean; onToggle: () => void };

const CycleDetection = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#29af5d';

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
                    {t('menu_section_cycle_detection_title')}
                </SectionTitle>
                {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </SectionHeader>
            {isOpen ? (
                <SectionBody>
                    <MenuItem
                        color={color}
                        icon={<TbBinaryTree />}
                        title="DFS"
                        onClick={() => handleClick('dfs')}
                        selected={currentAlgorithm === 'dfs'}
                    />
                    <MenuItem
                        color={color}
                        icon={<MdOutlineGroupWork />}
                        title="Union-Find"
                        onClick={() => handleClick('union-find')}
                        selected={currentAlgorithm === 'union-find'}
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default CycleDetection;
