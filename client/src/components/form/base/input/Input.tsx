import { ChangeEventHandler } from 'react';
import { Input as AntInput } from 'antd';
import { Helper, InputContainer } from './input.styled';

type Props = {
    value: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
    error?: string;
};

const Input = ({
    value,
    onChange,
    placeholder = '',
    name,
    error = '',
}: Props) => {
    return (
        <InputContainer>
            <AntInput
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                status={error.length > 0 ? 'error' : ''}
            />
            <Helper>{error}</Helper>
        </InputContainer>
    );
};

export default Input;
