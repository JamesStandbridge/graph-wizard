import styled from 'styled-components';
import { LayoutMenuItemProps } from './header.type';

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    background-color: #222222;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const LayoutMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 80px;
`;

export const LayoutMenuItem = styled.div<LayoutMenuItemProps>`
    width: 50px;
    height: 100%;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${(props) =>
        props.selected
            ? `
        background-color: ${props.color};
    `
            : `
        background-color: none;
        color: grey;

        &:hover {
            color: ${props.color};
        }
    `}
`;

export const HeaderTitle = styled.h1`
    font-size: 21px;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    height: 100%;
`;

export const HeaderRightActions = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
