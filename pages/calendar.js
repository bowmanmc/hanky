import { useEffect, useState } from 'react';

import { signIn, useSession } from 'next-auth/client';


const CalendarPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const name = session?.user?.name;
    return (
        <div>

            <h1>calendar page</h1>

        </div>
    );
};
export default CalendarPage;
