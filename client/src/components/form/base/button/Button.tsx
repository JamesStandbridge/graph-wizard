import { ReactNode } from 'react';
import { BlockButton, OutlinedButton } from './button.styled';

type Props = {
    children: ReactNode;
    onClick: () => void;
    severity?: 'info' | 'danger';
    outlined?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
};

const Button = ({
    children,
    onClick,
    outlined = false,
    severity = 'info',
    icon = null,
    disabled = false,
}: Props) => {
    if (outlined) {
        return (
            <OutlinedButton
                disabled={disabled}
                severity={severity}
                onClick={onClick}
            >
                {icon}
                {children}
            </OutlinedButton>
        );
    } else {
        return (
            <BlockButton
                disabled={disabled}
                severity={severity}
                onClick={onClick}
            >
                {icon}
                {children}
            </BlockButton>
        );
    }
};

export default Button;
