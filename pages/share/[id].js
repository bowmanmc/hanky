import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { signIn, useSession } from 'next-auth/client';


const SharePage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>

            <h1>share page</h1>
            {id}
        </div>
    );
};
export default SharePage;

/*
const refreshData = async () => {
    const response = await fetch('/api/feed');
    const items = await response.json();
    return items;
};

    const [feed, setFeed] = useState([]);

    useEffect(() => {
        refreshData().then(items => {
            setFeed(items)
        });
    }, []);
*/
