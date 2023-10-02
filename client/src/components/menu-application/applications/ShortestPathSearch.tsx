import { useTranslation } from 'react-i18next';

import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia';
import { TbCircleLetterD } from 'react-icons/tb';
import { FaStarOfLife } from 'react-icons/fa';
import { RiSubtractFill } from 'react-icons/ri';

import {
    MenuSection,
    SectionBody,
    SectionHeader,
    SectionTitle,
} from '../menu-application.styled';
import MenuItem from '../menu-item/MenuItem';

type Props = { isOpen: boolean; onToggle: () => void };

const ShortestPathSearch = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#f28c38';

    return (
        <MenuSection>
            <SectionHeader onClick={() => onToggle()}>
                <SectionTitle>
                    {t('menu_section_shortest_path_title')}
                </SectionTitle>
                {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </SectionHeader>
            {isOpen ? (
                <SectionBody>
                    <MenuItem
                        color={color}
                        icon={<TbCircleLetterD />}
                        title="Dijkstra"
                    />
                    <MenuItem
                        color={color}
                        icon={<RiSubtractFill />}
                        title="Bellman-Ford"
                    />
                    <MenuItem
                        color={color}
                        icon={<FaStarOfLife />}
                        title="A star"
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default ShortestPathSearch;
