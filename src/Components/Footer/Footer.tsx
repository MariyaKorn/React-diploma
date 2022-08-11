import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Footer.module.css';
import { useThemeContext, Theme } from '../../Context/themeModeContext';
import Button from '../Button';
import ToggleSwitch from '../ToggleSwitch';

const Footer: FC = () => {
    const { theme, onChangeTheme = () => {} } = useThemeContext();
    const onClickTheme = () => {
        const themeValue = theme === Theme.Light ? Theme.Dark : Theme.Light;
        onChangeTheme(themeValue);
    }
    return (
        <div className={classNames(styles.footer)}>
            <div>© 2022 Blogologo</div>
            <div className={classNames(styles.toggleWrapper)}>
                <div>Dark theme</div>
                <ToggleSwitch />
                <Button title={ theme } onClick={onClickTheme}/>
            </div>
        </div>
    )
}

export default Footer;