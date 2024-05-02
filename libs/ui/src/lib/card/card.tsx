import classNames from 'classnames';
import style from './card.module.scss';
import { UICardProps } from './card.props';

const Card = ({ children, className }: UICardProps) => {
    return <div className={classNames(style['ui-card'], className)}>{children}</div>
}

export { Card }