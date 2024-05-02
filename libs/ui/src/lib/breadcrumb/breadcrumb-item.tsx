import { UIBreadcrumbItemProps } from "./breadcrumb.props"
import style from './breadcrumb.module.scss';
import classNames from "classnames";

const BreadcrumbItem = ({ text, active }: UIBreadcrumbItemProps) => {
    const _styles = classNames(
        style['ui-breadcrumb__item'],
        active ? style['ui-breadcrumb__item--active'] : ''
    )
    return (
        <div className={_styles}>{text}</div>
    )
}

export { BreadcrumbItem }