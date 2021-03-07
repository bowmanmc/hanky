import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Api from 'lib/api';
import Item from 'components/item';
import Form from 'components/forms/add';
import PromptBox from 'components/promptbox';


import styles from './index.module.scss';

dayjs.extend(advancedFormat);

const HomePage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const [feed, setFeed] = useState([]);
    useEffect(() => {
        Api.todayFeed().then(items => {
            setFeed(items);
        });
    }, []);

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

                <div className={styles.HomePage__feed}>
                {
                    feed.map((item, index) => {
                        return (
                            <div className={styles.HomePage__feeditem} key={item.id}>
                                <Item item={item} onUpdate={updated => {
                                    const newFeed = [...feed];
                                    newFeed[index] = updated;
                                    setFeed(newFeed);
                                }}/>
                            </div>
                        );
                    })
                }
                </div>
            </main>
        </div>
    );
};
export default HomePage;
