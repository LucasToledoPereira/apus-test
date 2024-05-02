import { BreadcrumbItem } from './breadcrumb-item';
import style from './breadcrumb.module.scss';
import { UIBreadcrumbProps } from './breadcrumb.props';

const Breadcrumb = ({children}: UIBreadcrumbProps) => {
    return (
        <div className={style['ui-breadcrumb']}>
            {children}
        </div>
    )
}

Breadcrumb.Item = BreadcrumbItem;
export { Breadcrumb }