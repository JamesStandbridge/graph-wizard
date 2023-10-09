import { useTranslation } from 'react-i18next';

import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia';
import { AiOutlineNodeIndex } from 'react-icons/ai';

import {
    MenuSection,
    SectionBody,
    SectionHeader,
    SectionTitle,
} from '../../menu-application.styled';
import MenuItem from '../../menu-item/MenuItem';
import { useGraphEditionStore } from '../../../../state-manager/graph-edition-store/graphEditionStore';
import { SupportedEditionAction } from '../../../../state-manager/graph-edition-store/graph-edition-store.type';

type Props = { isOpen: boolean; onToggle: () => void };

const Tools = ({ isOpen, onToggle }: Props) => {
    const { t } = useTranslation('graph-menu');

    const setEditionAction = useGraphEditionStore(
        (state) => state.setEditionAction,
    );

    const currentEditionAction = useGraphEditionStore(
        (state) => state.editionAction,
    );

    const color = '#f9bd38';

    const handleClick = (name: string) => {
        const editionAction = name as SupportedEditionAction;
        setEditionAction(editionAction);
    };

    return (
        <MenuSection>
            <SectionHeader onClick={() => onToggle()}>
                <SectionTitle>{t('menu_section_tools_title')}</SectionTitle>
                {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </SectionHeader>
            {isOpen ? (
                <SectionBody>
                    <MenuItem
                        color={color}
                        icon={<AiOutlineNodeIndex />}
                        title="Draw"
                        onClick={() => handleClick('draw')}
                        selected={currentEditionAction === 'draw'}
                    />
                </SectionBody>
            ) : null}
        </MenuSection>
    );
};

export default Tools;
