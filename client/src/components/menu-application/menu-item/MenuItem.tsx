import {
    MenuItemContainer,
    MenuItemIcon,
    MenuItemTitle,
} from './menu-item.styled';

type Props = { icon: any; title: string; color: string };

const MenuItem = ({ icon, title, color }: Props) => {
    return (
        <MenuItemContainer>
            <MenuItemIcon color={color}>{icon}</MenuItemIcon>
            <MenuItemTitle>{title}</MenuItemTitle>
        </MenuItemContainer>
    );
};

export default MenuItem;
