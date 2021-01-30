import { useEffect, useState } from 'react';

import { signIn, useSession } from 'next-auth/client';


const GiftPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const name = session?.user?.name;
    return (
        <div>

            <h1>gift page</h1>

        </div>
    );
};
export default GiftPage;
