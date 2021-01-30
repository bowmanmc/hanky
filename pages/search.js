import { useEffect, useState } from 'react';

import { signIn, useSession } from 'next-auth/client';


const SearchPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const name = session?.user?.name;
    return (
        <div>

            <h1>search page</h1>

        </div>
    );
};
export default SearchPage;

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
