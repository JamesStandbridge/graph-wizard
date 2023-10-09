import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { FaDrawPolygon } from 'react-icons/fa';

import {
    MenuApplicationContainer,
    MenuHeader,
    MenuHeaderIcon,
} from '../../menu-application.styled';
import Tools from './Tools';

type Props = {};

const GraphMenuApplication = ({}: Props) => {
    const { t } = useTranslation('graph-menu');
    const [openSections, setOpenSections] = useState<string[]>(['tools']);

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
                <MenuHeaderIcon color={'#f9bd38'}>
                    <FaDrawPolygon />
                </MenuHeaderIcon>
                {t('graph_menu_application_title')}
            </MenuHeader>
            <Tools
                isOpen={openSections.includes('tools')}
                onToggle={() => handleToggleSection('tools')}
            />
        </MenuApplicationContainer>
    );
};

export default GraphMenuApplication;
