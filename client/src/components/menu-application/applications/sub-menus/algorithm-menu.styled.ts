import styled from 'styled-components';
import { MenuValueProps } from './algorithm-menu.type';

export const MenuLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuLabel = styled.p``;

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
    z-index: 1000000;
    background-color: white;
    top: 80px;
`;
