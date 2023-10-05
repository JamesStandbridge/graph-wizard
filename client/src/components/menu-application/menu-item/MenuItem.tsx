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
};

const MenuItem = ({ icon, title, color, onClick, selected }: Props) => {
    return (
        <MenuItemContainer selected={selected} onClick={onClick}>
            <MenuItemIcon color={color}>{icon}</MenuItemIcon>
            <MenuItemTitle>{title}</MenuItemTitle>
        </MenuItemContainer>
    );
};

export default MenuItem;
