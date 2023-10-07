import styled from 'styled-components';
import { MenuItemIconProps, MenuItemProps } from './menu-item.type';

export const MenuItemContainer = styled.div<MenuItemProps>`
    width: fit-content;
    cursor: pointer;
    padding: 5px;

    box-sizing: border-box;

    &:hover {
        background-color: #d3d3d366;
    }

    ${(props) =>
        props.selected
            ? `background-color: #00e3cd52;

        &:hover {background-color: #00e3cd52;
        }
    `
            : ``}

    ${(props) =>
        props.disabled
            ? `
        background-color: white;
        color: grey;
        &:hover {background-color: white;
    `
            : ``}
`;

export const MenuItemIcon = styled.div<MenuItemIconProps>`
    font-size: 40px;
    text-align: center;
    height: 45px;

    color: ${(props) => props.color};

    ${(props) => (props.disabled ? `color: grey;` : ``)}
`;

export const MenuItemTitle = styled.p`
    margin: 0;
    text-align: center;
    font-size: 13px;
`;
