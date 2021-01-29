import Head from 'next/head';
import { signIn, useSession } from 'next-auth/client';

import Form from 'components/forms/add';

import styles from './index.module.scss';

const HomePage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const name = session?.user?.name;
    return (
        <div className={styles.HomePage}>
            <Head>
                <title>Hanky - Gratitude</title>
            </Head>
            <Form />
        </div>
    );
};
export default HomePage;
