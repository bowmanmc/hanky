import { useEffect, useState } from 'react';
import { BsBucketFill } from 'react-icons/bs';
import { signIn, useSession } from 'next-auth/client';

import Polaroid from 'components/polaroid';

import styles from './jar.module.scss';


const JarPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const loadItem = async () => {
        const response = await fetch(`/api/entry/random`);
        const item = await response.json();
        return item;
    };

    const [item, setItem] = useState(null);
    useEffect(() => {
        loadItem().then((i) => {
            setItem(i);
        });
    }, []);

    return (
        <div className={styles.JarPage}>

            <div className={styles.JarPage__header}>
                <div className={styles.JarPage__icon}>
                    <BsBucketFill />
                </div>
                <div className={styles.JarPage__title}>
                    Your Gratitude Jar
                </div>
            </div>

            {item && <Polaroid item={item} editable={false} /> }
        </div>
    );
};
export default JarPage;
