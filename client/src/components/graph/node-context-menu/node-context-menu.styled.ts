import styled from 'styled-components';

export const ContextMenu = styled.div`
    position: absolute;
    z-index: 10;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
`;

export const ContextMenuItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    padding: 10px 10px;

    &:hover {
        background-color: #eee;
    }
`;
