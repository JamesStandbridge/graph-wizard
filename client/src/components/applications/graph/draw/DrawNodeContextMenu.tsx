import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContextMenuItem } from '../../context-menu/context-menu.styled';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useGraphStore } from '../../../../state-manager/graph-store/graphStore';

interface Props {
    nodeId: string;
}

const DrawNodeContextMenu: React.FC<Props> = ({ nodeId }) => {
    const { t } = useTranslation('node-context-menu');
    const deleteNode = useGraphStore((state) => state.deleteNode);

    const handleDeleteNode = () => {
        deleteNode(nodeId);
    };

    return (
        <>
            <ContextMenuItem onClick={handleDeleteNode}>
                <AiOutlineDelete />
                {t('delete_node')}
            </ContextMenuItem>
            {/* <ContextMenuItem
                onClick={() =>
                    setConfiguration({ ...appConf, endNodeId: nodeId })
                }
            >
                <AiOutlineEdit />
                {t('rename_node')}
            </ContextMenuItem> */}
        </>
    );
};

export default DrawNodeContextMenu;
