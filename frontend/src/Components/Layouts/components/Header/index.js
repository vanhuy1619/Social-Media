import classNames from "classnames/bind";
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <div>
            <h3 className={cx('wrapper')}>Headeer</h3>
        </div>
     );
}

export default Header;