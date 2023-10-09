import { Select as AntSelect } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { SelectContainer } from './select.styled';

type Props = {
    options: Array<{ value: string | number; label: string }>;
    value: string;
    onChange: (value: string) => void;
    size?: SizeType;
    width?: string | number;
    bordered?: boolean;
    darkMode?: boolean;
};

const Select = ({
    options,
    value,
    onChange,
    size = 'small',
    width = 120,
    bordered = true,
    darkMode = false,
}: Props) => {
    return (
        <SelectContainer
            width={typeof width === 'string' ? width : `${width}px`}
        >
            <AntSelect
                options={options}
                value={value}
                onChange={onChange}
                size={size}
                style={{ width: '100%' }}
                bordered={bordered}
                className={darkMode ? 'dark-select' : 'light-select'}
            />
        </SelectContainer>
    );
};

export default Select;
