import Link from 'next/link';
import { LogoWord } from 'components/logo';
import { getMotivator } from 'lib/motivators';

import styles from './footer.module.scss';


const Footer = () => {
    const motivation = getMotivator();

    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__branding}>
                <LogoWord />
                <p>
                    { motivation.statement }
                </p>
                <p>
                    Start keeping your own gratitude journal
                    at &nbsp;
                    <Link href="https://www.getthanky.com">
                        <a>
                            www.getthanky.com
                        </a>
                    </Link>
                </p>
            </div>

        </div>
    );
};
export default Footer;
