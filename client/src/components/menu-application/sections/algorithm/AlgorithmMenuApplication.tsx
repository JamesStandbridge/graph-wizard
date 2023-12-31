import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { FaCode } from 'react-icons/fa';

import {
    MenuApplicationContainer,
    MenuHeader,
    MenuHeaderIcon,
} from '../../menu-application.styled';

import ShortestPathSearch from './ShortestPathSearch';
import CycleDetection from './CycleDetection';
import MinimumSpanningTree from './MinimumSpanningTree';
import StronglyConnectedComponent from './StronglyConnectedComponent';
import Clustering from './Clustering';

type Props = {};

const AlgorithmMenuApplication = ({}: Props) => {
    const { t } = useTranslation('app-menu');
    const [openSections, setOpenSections] = useState<string[]>([
        'shortest_path',
        'cycle_detection',
        'min_spanning_tree',
        'strongly_connected_component',
        'clustering',
    ]);

    const handleToggleSection = (sectionTitle: string) => {
        setOpenSections((prevSections) => {
            if (prevSections.includes(sectionTitle)) {
                return prevSections.filter(
                    (section) => section !== sectionTitle,
                );
            }

            return [...prevSections, sectionTitle];
        });
    };

    return (
        <MenuApplicationContainer>
            <MenuHeader>
                <MenuHeaderIcon color={'#10a3e0'}>
                    <FaCode />
                </MenuHeaderIcon>
                {t('algorithm_menu_application_title')}
            </MenuHeader>
            <ShortestPathSearch
                isOpen={openSections.includes('shortest_path')}
                onToggle={() => handleToggleSection('shortest_path')}
            />
            <CycleDetection
                isOpen={openSections.includes('cycle_detection')}
                onToggle={() => handleToggleSection('cycle_detection')}
            />
            <MinimumSpanningTree
                isOpen={openSections.includes('min_spanning_tree')}
                onToggle={() => handleToggleSection('min_spanning_tree')}
            />
            <StronglyConnectedComponent
                isOpen={openSections.includes('strongly_connected_component')}
                onToggle={() =>
                    handleToggleSection('strongly_connected_component')
                }
            />
            <Clustering
                isOpen={openSections.includes('clustering')}
                onToggle={() => handleToggleSection('clustering')}
            />
        </MenuApplicationContainer>
    );
};

export default AlgorithmMenuApplication;
