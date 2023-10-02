import styled from 'styled-components';

export const GraphSvg = styled.svg`
    width: 100%;
    height: 100%;
`;

export const GraphContainer = styled.div`
    width: 100%;
    height: 100%;
    cursor: grab;
    overflow: hidden;
    position: relative;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:active {
        cursor: grabbing;
    }
`;
