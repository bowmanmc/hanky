import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client';

import Preview from 'components/polaroid';

import styles from './thanks.module.scss';


// This page takes in an id and an author and is the page
// shared to social media.
const ThanksPage = (props) => {
    const [session, loading] = useSession();

    const router = useRouter();
    const { id, author } = router.query;

    const loadItem = async (itemId, itemAuthor) => {
        console.log(`Loading ${itemId} by ${itemAuthor}...`);
        if (!itemId || !itemAuthor) {
            return;
        }
        // TODO: Start here!
        const response = await fetch(`/api/thanks?id=${itemId}&author=${itemAuthor}`);
        const item = await response.json();
        return item;
    };

    const [item, setItem] = useState(null);
    useEffect(() => {
        loadItem(id, author).then(i => {
            setItem(i);
        });
    }, [id, author]);


    // Loading Screen
    if (!item) {
        return (
            <div className={styles.ThanksPage}>
                <p>loading...</p>
            </div>
        );
    }

    return (
        <div className={styles.ThanksPage}>
            {item && <Preview item={item} /> }
        </div>
    );
};
export default ThanksPage;
