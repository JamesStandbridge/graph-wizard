import styled from 'styled-components';
import { MenuValueProps } from './sub-menu.type';

export const MenuLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuLabel = styled.p``;

export const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuHeaderActions = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuTitle = styled.h3`
    text-transform: capitalize;
`;

export const MenuValue = styled.p<MenuValueProps>`
    ${(props) =>
        props.italic
            ? `
        font-style: italic;
        color: grey;
    `
            : ``}
`;

export const ApplicationMenuContainer = styled.div`
    position: absolute;
    padding: 15px 25px;
    width: 400px;
    border: solid 1px lightgrey;
    left: 30px;
    z-index: 100;
    background-color: white;
    top: 80px;
`;
