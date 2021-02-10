import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Api from 'lib/api';
import Feed from 'components/item/feed';

import styles from './history.module.scss';


const HistoryPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const [feed, setFeed] = useState([]);
    useEffect(() => {
        Api.allFeed().then(items => {
            setFeed(items);
        });
    }, []);

    return (
        <div className={styles.HistoryPage}>

            <Feed feed={feed} />

        </div>
    );
};
export default HistoryPage;
