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
import { GraphAlgorithm } from '../../../state-manager/store.type';
import { useGraphSimulationStore } from '../../../state-manager/simulationStore';

type Props = { isOpen: boolean; onToggle: () => void };

const ShortestPathSearch = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const setAlgorithm = useGraphSimulationStore((state) => state.setAlgorithm);

    const color = '#f28c38';

    const handleClick = (name: string) => {
        const algorithm = name as GraphAlgorithm;
        setAlgorithm(algorithm);
    };

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
                        onClick={() => handleClick('dijkstra')}
                    />
                    <MenuItem
                        color={color}
                        icon={<RiSubtractFill />}
                        title="Bellman-Ford"
                        onClick={() => handleClick('bellman-ford')}
                    />
                    <MenuItem
                        color={color}
                        icon={<FaStarOfLife />}
                        title="A star"
                        onClick={() => handleClick('a-star')}
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default ShortestPathSearch;
