import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContextMenuItem } from '../../context-menu/context-menu.styled';

interface Props {}

const DrawContextMenu: React.FC<Props> = ({}) => {
    const { t } = useTranslation('node-context-menu');

    return (
        <>
            <h1>DRAW</h1>
        </>
    );
};

export default DrawContextMenu;
