import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckLg } from 'react-icons/bs';

import { MenuLabel, MenuLine, MenuValue } from '../../sub-menu/sub-menu.styled';
import Button from '../../../form/base/button/Button';
import Input from '../../../form/base/input/Input';
import { useGraphStore } from '../../../../state-manager/graph-store/graphStore';

type Props = {};

const AddNodeConfigurationMenu = ({}: Props) => {
    const { t } = useTranslation('graph-menu');

    const [nodeName, setNodeName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const nodes = useGraphStore((state) => state.nodes);

    const confirmNodeName = (): boolean => {
        if (nodeName.trim().length === 0) {
            setError(t('add_node_error_not_null'));
            return false;
        }

        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id === nodeName) {
                setError(t('add_node_error_duplicate'));
                return false;
            }
        }

        return true;
    };

    const handleAddNode = () => {
        if (!confirmNodeName()) return;
    };

    return (
        <>
            <MenuLine>
                <MenuLabel>{t('graph_node_name_key')}</MenuLabel>
                <Input
                    value={nodeName}
                    onChange={(e) => setNodeName(e.target.value)}
                    name="nodeName"
                    error={error}
                />
            </MenuLine>
            <MenuLine>
                <MenuLabel>{t('add_node_menu_key')}</MenuLabel>
                <Button onClick={handleAddNode} icon={<BsCheckLg />}>
                    {t('add_node_btn_confirm')}
                </Button>
            </MenuLine>
        </>
    );
};

export default AddNodeConfigurationMenu;
