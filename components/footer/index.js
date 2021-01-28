import Link from 'next/link';

import styles from './index.module.scss';


const Footer = () => {

    return (
        <div className={styles.Footer}>

            <nav>
                <ul>
                    <li><Link href='/jar'><a>Jar</a></Link></li>
                    <li><Link href='/gift'><a>Gift</a></Link></li>
                    <li><Link href='/calendar'><a>Calendar</a></Link></li>
                    <li><Link href='/search'><a>Search</a></Link></li>
                </ul>
            </nav>

        </div>
    )
};
export default Footer;
