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

type Props = { isOpen: boolean; onToggle: () => void };

const MinimumSpanningTree = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#aa4141';
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
                    />
                    <MenuItem color={color} icon={<PiGraph />} title="Prim" />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default MinimumSpanningTree;
