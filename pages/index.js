import Head from 'next/head';
import { signIn, useSession } from 'next-auth/client';

import HankyForm from 'components/forms/hanky';
import Navbar from 'components/navbar';

export default function Index() {
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

            <Navbar />
            <HankyForm />

        </div>
    );
}
