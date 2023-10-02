import styled from 'styled-components';
import { SelectContainerProps } from './select.type';

export const SelectContainer = styled.div<SelectContainerProps>`
    width: ${(props) => props.width};
`;
