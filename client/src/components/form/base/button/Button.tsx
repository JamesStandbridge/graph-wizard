import { ReactNode } from 'react';
import { BlockButton, OutlinedButton } from './button.styled';

type Props = {
    children: ReactNode;
    onClick: () => void;
    severity?: 'info' | 'danger';
    outlined?: boolean;
    icon?: ReactNode;
};

const Button = ({
    children,
    onClick,
    outlined = false,
    severity = 'info',
    icon = null,
}: Props) => {
    if (outlined) {
        return (
            <OutlinedButton severity={severity} onClick={onClick}>
                {icon}
                {children}
            </OutlinedButton>
        );
    } else {
        return (
            <BlockButton severity={severity} onClick={onClick}>
                {icon}
                {children}
            </BlockButton>
        );
    }
};

export default Button;
