import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    width: fit-content;
    cursor: pointer;
    padding: 5px;

    box-sizing: border-box;

    &:hover {
        background-color: #d3d3d366;
    }
`;

export const MenuItemIcon = styled.div`
    font-size: 40px;
    color: ${(props) => props.color};
    text-align: center;
    height: 45px;
`;

export const MenuItemTitle = styled.p`
    margin: 0;
    text-align: center;
    font-size: 13px;
`;