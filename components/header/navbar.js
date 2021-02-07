import Link from 'next/link';
import {
    BsHouseDoorFill,
    BsBucketFill,
    BsGiftFill,
    BsCalendarFill,
    BsPlus,
    BsSearch,
} from 'react-icons/bs';

import { LogoWord } from '../logo';

import styles from './navbar.module.scss';


const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__logo}>
                <LogoWord />
            </div>
            {/* <nav>
                <ul>
                    <li className={styles.Navbar__navbutton}>
                        <Link href="/">
                            <a>
                                <BsHouseDoorFill />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.Navbar__navbutton}>
                        <Link href="/jar">
                            <a>
                                <BsBucketFill />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.Navbar__navbutton}>
                        <Link href="/calendar">
                            <a>
                                <BsCalendarFill />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav> */}
        </div>
    );
};
export default Navbar;
