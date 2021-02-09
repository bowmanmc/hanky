import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Feed from 'components/item/feed';

import styles from './calendar.module.scss';


const CalendarPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const loadData = async () => {
        const response = await fetch('/api/entries/feed');
        const items = await response.json();
        return items;
    };

    const [feed, setFeed] = useState([]);
    useEffect(() => {
        loadData().then(items => {
            setFeed(items);
        });
    }, []);

    return (
        <div className={styles.CalendarPage}>

            <Feed feed={feed} />

        </div>
    );
};
export default CalendarPage;
