'use client'
import { UIButtonProps } from "./button.props"
import styles from './button.module.scss';
import classNames from "classnames";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Button = ({text, icon, click= () => {}, active, disabled}: UIButtonProps) => {
    const _styles = classNames(
        styles['ui-button'],
        active ? styles['ui-button--active'] : '',
        'flex justify-center items-center'
    );
    return (
        <button data-testid="ui-button" className={_styles} onClick={() => click()} disabled={disabled}>
            {icon ? <img className="pr-3" src={icon} alt="icon"/> : null}
            {text}</button>
    )
}

export { Button }