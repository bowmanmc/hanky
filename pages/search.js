import { useEffect, useState } from 'react';

import Head from 'next/head';
import { signIn, useSession } from 'next-auth/client';


const SearchPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const name = session?.user?.name;
    return (
        <div>
            <Head>
                <title>Hanky - Gratitude</title>
            </Head>

            <h1>search page</h1>

        </div>
    );
};
export default SearchPage;
