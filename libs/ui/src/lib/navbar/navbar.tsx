import classNames from "classnames";
import styles from './navbar.module.scss';
import { UINavbarProps } from "./navbar.props";

const Navbar = ({title, logo}: UINavbarProps) => {
    const _styles = classNames(
        'flex flex-1 flex-row flex-wrap justify-between',
        'content-center items-center p-4',
        styles['ui-navbar'],
    )
    return <nav className={_styles}>
        <div className="flex flex-1 items-center">
            <div className={classNames('pr-4', styles['ui-navbar__menu_icon'])}>
                <img src='/images/icons/menu.png' alt="Menu Icon"/> 
            </div>
            <div className={styles['ui-navbar__title']}>{title}</div>
        </div>
        <img src={logo} alt="Logo"/> 
    </nav>
}

export { Navbar }