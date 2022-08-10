import React, { FC } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

type InputProps = {
    type: string;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
};

const Input: FC<InputProps> = ({type, disabled, placeholder, className}) => {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // onChange(event.target.value);
    };

    return <input type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={classNames(styles.input, className)}
            onChange={onInputChange}/>;
};

export default Input;