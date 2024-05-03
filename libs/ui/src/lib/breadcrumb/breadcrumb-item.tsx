/* eslint-disable @typescript-eslint/no-empty-function */
import { UIBreadcrumbItemProps } from "./breadcrumb.props"
import style from './breadcrumb.module.scss';
import classNames from "classnames";

const BreadcrumbItem = ({ text, active, click = () => {} }: UIBreadcrumbItemProps) => {
    const _styles = classNames(
        style['ui-breadcrumb__item'],
        active ? style['ui-breadcrumb__item--active'] : ''
    )
    return (
        <div className={_styles} onClick={() => click()}>{text}</div>
    )
}

export { BreadcrumbItem }