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
} from '../../menu-application.styled';
import MenuItem from '../../menu-item/MenuItem';
import { SupportedGraphAlgorithm } from '../../../../state-manager/simulation-store/simulation-store.type';
import MenuApplicationService from '../../menu-application.service';
import { useGraphSimulationStore } from '../../../../state-manager/simulation-store/simulationStore';

type Props = { isOpen: boolean; onToggle: () => void };

const ShortestPathSearch = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#f28c38';

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
                        selected={currentAlgorithm === 'dijkstra'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'dijkstra',
                        )}
                    />
                    <MenuItem
                        color={color}
                        icon={<RiSubtractFill />}
                        title="Bellman-Ford"
                        onClick={() => handleClick('bellman-ford')}
                        selected={currentAlgorithm === 'bellman-ford'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'bellman-ford',
                        )}
                    />
                    <MenuItem
                        color={color}
                        icon={<FaStarOfLife />}
                        title="A star"
                        onClick={() => handleClick('a-star')}
                        selected={currentAlgorithm === 'a-star'}
                        requirementState={MenuApplicationService.checkGraphRequirements(
                            'a-star',
                        )}
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default ShortestPathSearch;
