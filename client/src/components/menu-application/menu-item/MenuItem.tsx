import {
    MenuItemContainer,
    MenuItemIcon,
    MenuItemTitle,
} from './menu-item.styled';

type Props = { icon: any; title: string; color: string; onClick: () => void };

const MenuItem = ({ icon, title, color, onClick }: Props) => {
    return (
        <MenuItemContainer onClick={onClick}>
            <MenuItemIcon color={color}>{icon}</MenuItemIcon>
            <MenuItemTitle>{title}</MenuItemTitle>
        </MenuItemContainer>
    );
};

export default MenuItem;
