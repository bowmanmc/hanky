import dayjs from 'dayjs';

import Api from 'lib/api';
import Constants from 'lib/constants';
import { pictures } from 'lib/backgrounds';

import styles from './thanks.module.scss';


// This page takes in an id and an author and is the page
// shared to social media.
const ThanksPage = ({item}) => {

    const splash = {
        backgroundImage: `url(/images/backgrounds/${pictures[2]})`,
    };

    const day = dayjs(item.created).format(Constants.DATE_FORMAT_FULL);

    return (
        <div className={styles.ThanksPage}>
            <div className={styles.ThanksPage__topgradient}></div>
            <div className={styles.ThanksPage__main}>
                <div className={styles.ThanksPage__splash} style={splash}>
                </div>
                <main className={styles.ThanksPage__entry}>
                    <div className={styles.ThanksPage__text}>
                        <p>{item.entry}</p>
                    </div>

                    <div className={styles.ThanksPage__attribution}>
                        <div className={styles.ThanksPage__attributionavatar}>

                        </div>
                        <div className={styles.ThanksPage__attributiontext}>
                            Posted by {item.author} on {day}.
                        </div>
                    </div>

                </main>
            </div>
            <div className={styles.ThanksPage__bottomgradient}></div>
            <div className={styles.ThanksPage__footer}>
                footer
            </div>
        </div>
    );
};
export default ThanksPage;

export async function getServerSideProps(context) {
    const { id, author } = context.query;
    const item = await Api.fetchThanks(author, id);
    return { props: { item } }
};
