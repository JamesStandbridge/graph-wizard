import styled from 'styled-components';
import { ButtonProps } from './button.type';

export const BaseButton = styled.button<ButtonProps>`
    cursor: pointer;
    text-transform: uppercase;
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 15px;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const OutlinedButton = styled(BaseButton)`
    color: ${({ theme, severity }) => theme[severity]};
    border: solid 1px ${({ theme, severity }) => theme[severity]};
    background-color: white;

    ${(props) =>
        props.disabled
            ? `
        background-color: lightgrey;
    `
            : ``}
`;

export const BlockButton = styled(BaseButton)`
    color: white;
    border: solid 1px ${({ theme, severity }) => theme[severity]};
    background-color: ${({ theme, severity }) => theme[severity]};

    ${(props) =>
        props.disabled
            ? `
        background-color: lightgrey;
        border: solid 1px lightgrey;
    `
            : ``}
`;
