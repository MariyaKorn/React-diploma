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
    

    return <input type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={classNames(styles.input, className)}
            />;
};

export default Input;