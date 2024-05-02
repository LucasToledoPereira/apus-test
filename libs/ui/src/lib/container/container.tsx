import classNames from 'classnames';
import { UIContainerProps } from "./container.props"

const Container = ({children}: UIContainerProps) => {
    const style = classNames('container', 'mx-auto')
    return (
        <div className={style}>{children}</div>
    )
}

export { Container }