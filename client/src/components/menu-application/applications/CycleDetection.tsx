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

type Props = { isOpen: boolean; onToggle: () => void };

const CycleDetection = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#29af5d';
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
                    />
                    <MenuItem
                        color={color}
                        icon={<MdOutlineGroupWork />}
                        title="Union-Find"
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default CycleDetection;
