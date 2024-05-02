import classNames from 'classnames';
import { UIContainerProps } from "./container.props"

const Container = ({children}: UIContainerProps) => {
    const style = classNames('container', 'md:px-2 lg:px-2 xl:px-0', 'px-2 mx-auto')
    return (
        <div className={style}>{children}</div>
    )
}

export { Container }