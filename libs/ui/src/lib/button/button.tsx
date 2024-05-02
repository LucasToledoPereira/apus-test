'use client'
import { UIButtonProps } from "./button.props"
import styles from './button.module.scss';
import classNames from "classnames";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Button = ({text, icon, click= () => {}, active, disabled}: UIButtonProps) => {
    const _styles = classNames(
        styles['ui-button'],
        active ? styles['ui-button--active'] : ''
    );
    return (
        <button className={_styles} onClick={() => click()} disabled={disabled}>{text}</button>
    )
}

export { Button }