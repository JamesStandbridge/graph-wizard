import { useTranslation } from 'react-i18next';

import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia';
import { SiGraphql } from 'react-icons/si';

import {
    MenuSection,
    SectionBody,
    SectionHeader,
    SectionTitle,
} from '../menu-application.styled';
import MenuItem from '../menu-item/MenuItem';

type Props = { isOpen: boolean; onToggle: () => void };

const StronglyConnectedComponent = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('app-menu');

    const color = '#f9bd38';

    return (
        <MenuSection>
            <SectionHeader onClick={() => onToggle()}>
                <SectionTitle>
                    {t('menu_section_strongly_connected_component_title')}
                </SectionTitle>
                {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </SectionHeader>
            {isOpen ? (
                <SectionBody>
                    <MenuItem
                        color={color}
                        icon={<SiGraphql />}
                        title="Tarjan"
                    />
                    <MenuItem
                        color={color}
                        icon={<SiGraphql />}
                        title="Kosaraju"
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default StronglyConnectedComponent;
