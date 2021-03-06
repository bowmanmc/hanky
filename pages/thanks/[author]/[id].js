import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import Meta from './meta';
import Footer from './footer';
import Api from 'lib/api';
import Constants from 'lib/constants';

import styles from './thanks.module.scss';

dayjs.extend(advancedFormat);

// This page takes in an id and an author and is the page
// shared to social media.
const ThanksPage = ({ item, author }) => {
    console.log(item.splash);
    const splash = {
        backgroundImage: `url(/images/backgrounds/${item.splash.image})`,
    };

    const day = dayjs(item.created).format(Constants.DATE_FORMAT_FULL);
    const title = `Thanks from ${author.name} on ${day}`;
    const url = `https://app.getthanky.com/thanks/${author}/${item.id}`;

    return (
        <div className={styles.ThanksPage}>
            <Meta item={item} title={title} url={url} />
            <div className={styles.ThanksPage__topgradient}></div>
            <div className={styles.ThanksPage__main}>
                <div className={styles.ThanksPage__splash} style={splash}>
                </div>
                <main className={styles.ThanksPage__entry}>
                    <div className={styles.ThanksPage__text}>
                        <p>{item.entry}</p>
                    </div>

                    <div className={styles.ThanksPage__attribution}>
                        <div className={styles.ThanksPage__avatar}>
                            <img src={author.image} alt={author.name} />
                        </div>
                        <div className={styles.ThanksPage__attributiontext}>
                            Posted by {author.name} on {day}.
                        </div>
                    </div>

                </main>
            </div>
            <div className={styles.ThanksPage__bottomgradient}></div>
            <div className={styles.ThanksPage__footer}>
                <Footer item={item} />
            </div>
        </div>
    );
};
export default ThanksPage;

export async function getServerSideProps(context) {
    const { id, author } = context.query;
    const item = await Api.fetchThanks(author, id);
    const authorDetails = await Api.fetchAuthor(author);
    return { props: { item, author : authorDetails } };
};
