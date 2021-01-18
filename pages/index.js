import { useEffect, useState } from 'react';

import Head from 'next/head';
import { signIn, useSession } from 'next-auth/client';

import HankyForm from 'components/forms/hanky';
import Navbar from 'components/navbar';

const refreshData = async () => {
    const response = await fetch('/api/feed');
    const items = await response.json();
    return items;
};

const HomePage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const [feed, setFeed] = useState([]);

    useEffect(() => {
        refreshData().then(items => {
            setFeed(items)
        });
    }, []);

    const name = session?.user?.name;
    return (
        <div>
            <Head>
                <title>Hanky - Gratitude</title>
            </Head>

            <Navbar />
            <HankyForm onAdd={() => {
                refreshData().then(items => {
                    setFeed(items);
                });
            }}/>

            {
                feed.map(item => {
                    return (
                        <div key={item.id}>{item.content}</div>
                    );
                })
            }
        </div>
    );
};
export default HomePage;
