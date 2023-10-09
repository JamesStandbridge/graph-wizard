import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { RequirementResponse } from '../../applications/algorithm/algorithm-application.type';
import {
    MenuItemContainer,
    MenuItemIcon,
    MenuItemTitle,
} from './menu-item.styled';

type Props = {
    icon: any;
    title: string;
    color: string;
    onClick: () => void;
    selected: boolean;
    requirementState?: RequirementResponse;
};

const MenuItem = ({
    icon,
    title,
    color,
    onClick,
    selected,
    requirementState = null,
}: Props) => {
    const { t } = useTranslation('app-menu');

    return (
        <Tooltip placement="bottom" title={t(requirementState?.errorMessage)}>
            <MenuItemContainer
                disabled={requirementState?.status === 'error'}
                selected={selected}
                onClick={onClick}
            >
                <MenuItemIcon
                    disabled={requirementState?.status === 'error'}
                    color={color}
                >
                    {icon}
                </MenuItemIcon>
                <MenuItemTitle>{title}</MenuItemTitle>
            </MenuItemContainer>
        </Tooltip>
    );
};

export default MenuItem;
