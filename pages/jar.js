import { useEffect, useState } from 'react';
import { BsBucketFill } from 'react-icons/bs';
import { signIn, useSession } from 'next-auth/client';

import Random from 'components/item/random';

import styles from './jar.module.scss';


const JarPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    return (
        <div className={styles.JarPage}>
            <div className={styles.JarPage__title}>
                <span>Welcome to your Happy Place.</span>
            </div>

            <div className={styles.JarPage__items}>
                <Random />
            </div>
        </div>
    );
};
export default JarPage;
