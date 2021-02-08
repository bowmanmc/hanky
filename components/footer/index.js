import Link from 'next/link';
import LogoWord from '../logo/wordmark.svg';

import styles from './index.module.scss';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__sections}>
                <div className={styles.Footer__section}>
                    <div className={styles.Footer__logo}>
                        <LogoWord />
                    </div>
                </div>

                <div className={styles.Footer__section}>
                    <span className={styles.Footer__sectiontitle}>Sitemap</span>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/jar">
                                    <a>Jar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/gift">
                                    <a>Gift</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/calendar">
                                    <a>Calendar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/search">
                                    <a>Search</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={styles.Footer__legal}>
                <p>
                    &copy; 2021 All rights reserved.
                    The Thanky application and GetThanky.com website
                    were built by &nbsp;
                    <Link href="https://www.itschilitime.com"><a>Chilitime Design</a></Link>
                    . View our &nbsp;
                    <Link href="https://www.getthanky.com/privacy"><a>Privacy Policy</a></Link>
                </p>
            </div>
        </div>
    );
};
export default Footer;
