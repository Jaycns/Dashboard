import Image from 'next/image'
import logo from '../images/jaycn_d.png';
import { MdClose  } from "react-icons/md";
import styles from '../styles/nav.module.scss'




 function Nav () {
    return (
        <div className={styles.top}>
            <div className={styles.logo}>
                <Image src={logo} width='40px' height='40px' alt="" className={styles.img} />
                <h2>JAY<span className={styles.danger}>CN</span></h2>
            </div>
            <div className="" id="close-btn">
                <MdClose />
            </div>
        </div>
    )
}
export default Nav