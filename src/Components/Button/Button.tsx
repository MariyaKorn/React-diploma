import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
};

const Button: FC<ButtonProps> = ({title, className, onClick}) => {
    return (
        <button onClick={onClick} className={classNames(styles.button, className)}>{title}</button>
    )
};

export default Button;