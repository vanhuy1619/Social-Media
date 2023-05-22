import Header from "~/Components/Layouts/components/Header"
import Sidebar from "./Sidebar"
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind"

const cx = classNames.bind(styles)
function DefaultLayout({children})
{
    return(
        <div className={cx("wrapper")}>
            <Header />
            <div>
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div> 
    )
}
export default DefaultLayout