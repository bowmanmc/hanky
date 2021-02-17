import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Api from 'lib/api';
import History from 'components/history';

import styles from './history.module.scss';

const HistoryPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const [feed, setFeed] = useState([]);
    useEffect(() => {
        Api.allFeed().then((items) => {
            setFeed(items);
        });
    }, []);

    // Format the data like
    // {year: {month: [item, item...], month: []}, ...}
    let currentYear, currentMonth;
    let history = {};
    for (let i = 0; i < feed.length; i++) {
        const item = feed[i];
        const year = dayjs(item.created).format('YYYY');
        const month = dayjs(item.created).format('MMMM');
        if (!currentYear || currentYear !== year) {
            currentYear = year;
            history[currentYear] = {};
            currentMonth = null;
        }
        if (!currentMonth || currentMonth !== month) {
            currentMonth = month;
            history[currentYear][currentMonth] = [];
        }
        history[currentYear][currentMonth].push(item);
    }

    return (
        <div className={styles.HistoryPage}>
            <History history={history} />
        </div>
    );
};
export default HistoryPage;
