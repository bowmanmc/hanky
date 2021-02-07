import Link from 'next/link';
import {
    BsHouseDoorFill,
    BsBucketFill,
    BsGiftFill,
    BsCalendarFill,
    BsPlus,
    BsSearch,
} from 'react-icons/bs';

import styles from './navbar.module.scss';


const Navbar = () => {
    return (
            <nav className={styles.Navbar}>
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
            </nav>
    );
};
export default Navbar;
