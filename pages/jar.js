import { useEffect, useState } from 'react';
import { BsBucketFill } from 'react-icons/bs';
import { signIn, useSession } from 'next-auth/client';

import Item from 'components/item/item';
import Api from 'lib/api';

import styles from './jar.module.scss';


const JarPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    // Pinned Feed


    const [randomFeed, setRandomFeed] = useState([]);
    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        Api.randomizedFeed().then(items => {
            setRandomFeed(items);
        });
    }, []);

    let randomItem = null;
    if (randomFeed) {
        randomItem = randomFeed[randomIndex];
    }

    return (
        <div className={styles.JarPage}>
            <div className={styles.JarPage__title}>
                <span>Welcome to your Happy Place.</span>
            </div>

            <div className={styles.JarPage__items}>
                {randomItem && <Item item={randomItem} />}
            </div>
        </div>
    );
};
export default JarPage;
