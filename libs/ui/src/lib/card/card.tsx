import style from './card.module.scss';
import { UICardProps } from './card.props';

const Card = ({ children }: UICardProps) => {
    return <div className={style['ui-card']}>{children}</div>
}

export { Card }