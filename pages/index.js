import Head from 'next/head';
import { signIn, useSession } from 'next-auth/client';

import Navbar from 'components/navbar';

export default function Index() {
    const [session, loading] = useSession();
    if (!session && !loading) {
        console.log('Signing in...');
        signIn();
    }
    console.log('User: ' + JSON.stringify(session?.user));
    const name = session?.user?.name;
    return (
        <div>
            <Head>
                <title>Hanky - Gratitude</title>
            </Head>
            <Navbar />
            <h1>Hanky</h1>
            <p>Welcome {name}</p>
        </div>
    );
}
