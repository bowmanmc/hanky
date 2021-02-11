import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Api from 'lib/api';
import Item from 'components/item';

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

    let currentYear, currentMonth;
    const render = [];
    for (let i = 0; i < feed.length; i++) {
        const item = feed[i];
        const year = dayjs(item.created).format('YYYY');
        const month = dayjs(item.created).format('MMMM');
        if (!currentYear || currentYear !== year) {
            currentYear = year;
            render.push(
                <div key={year} className={styles.HistoryPage__year}>
                    {year}
                </div>
            );
        }
        if (!currentMonth || currentMonth !== month) {
            currentMonth = month;
            render.push(
                <div key={month} className={styles.HistoryPage__month}>
                    {month}
                </div>
            );
        }

        render.push(
            <Item
                key={item.id}
                item={item}
                onUpdate={(updated) => {
                    const newFeed = [...feed];
                    newFeed[i] = updated;
                    setFeed(newFeed);
                }}
            />
        );
    }

    return <div className={styles.HistoryPage}>{render}</div>;
};
export default HistoryPage;
