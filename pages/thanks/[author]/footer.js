import Link from 'next/link';
import { LogoWord } from 'components/logo';
import { getMotivator } from 'lib/motivators';
import { getPictureInfo } from 'lib/backgrounds';

import styles from './footer.module.scss';


const Footer = ({ item }) => {
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
                    at&nbsp;
                    <Link href="https://www.getthanky.com">
                        <a>
                            www.getthanky.com
                        </a>
                    </Link>
                </p>
                <p className={styles.Footer__splash}>
                    We're thankful for
                    <a href={item.splash.bio} target="_blank"> {item.splash.name} </a>
                    and the beautiful picture from
                    <a href={item.splash.link} target="_blank"> Unsplash </a>.
                </p>
            </div>

        </div>
    );
};
export default Footer;
