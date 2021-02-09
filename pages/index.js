import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Feed from 'components/item/feed';
import Form from 'components/forms/add';
import PromptBox from 'components/promptbox';


import styles from './index.module.scss';

dayjs.extend(advancedFormat);

const HomePage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const refreshData = async () => {
        const response = await fetch('/api/entries/today');
        const items = await response.json();
        return items;
    };

    const [feed, setFeed] = useState([]);
    useEffect(() => {
        refreshData().then(items => {
            setFeed(items);
        });
    }, [])

    const day = dayjs().format('dddd, MMMM Do, YYYY');

    const name = session?.user?.name;
    return (
        <div className={styles.HomePage}>
            <main>
                <span className={styles.HomePage__date}>{day}</span>

                <PromptBox />

                <Form onAdd={(item) => {
                    setFeed([item, ...feed]);
                }} />

                {/* Only today's items */}
                <Feed feed={feed} />
            </main>
        </div>
    );
};
export default HomePage;
