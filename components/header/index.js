import Link from 'next/link';
import {
    BsBucketFill,
    BsGiftFill,
    BsCalendarFill,
    BsPlus,
    BsSearch,
} from 'react-icons/bs';

import { getCompliment } from 'lib/compliments';
import { getGreeting } from 'lib/greetings';

import styles from './index.module.scss';

const greeting = getGreeting();
const compliment = getCompliment();

const Header = () => {
    return (
        <div className={styles.Header}>
            <span className={styles.Header__greeting}>{greeting} Michael!</span>
            <span className={styles.Header__compliment}>{compliment}</span>

            <nav>
                <ul>
                    <li className={styles.Header__navbutton}>
                        <Link href="/">
                            <a>
                                <BsPlus />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.Header__navbutton}>
                        <Link href="/jar">
                            <a>
                                <BsBucketFill />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.Header__navbutton}>
                        <Link href="/gift">
                            <a>
                                <BsGiftFill />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.Header__navbutton}>
                        <Link href="/calendar">
                            <a>
                                <BsCalendarFill />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.Header__navbutton}>
                        <Link href="/search">
                            <a>
                                <BsSearch />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Header;
