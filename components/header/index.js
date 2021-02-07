import { getCompliment } from 'lib/compliments';
import { getGreeting } from 'lib/greetings';

import { LogoIcon } from '../logo';
import Navbar from './navbar';

import styles from './index.module.scss';

const greeting = getGreeting();
const compliment = getCompliment();

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.Header__navbar}>
                <Navbar />
            </div>
            <div className={styles.Header__greeting}>
                <div className={styles.Header__icon}>
                    <LogoIcon />
                </div>
                <div className={styles.Header__text}>
                    <span className={styles.Header__howdy}>
                        {greeting} Michael!
                    </span>
                    <span className={styles.Header__compliment}>
                        {compliment}
                    </span>
                </div>
            </div>
            <div className={styles.Header__bottom}>
            </div>
        </div>
    );
};
export default Header;
