
import { signIn, useSession } from 'next-auth/client';

import Subscription from 'components/subscription';

import styles from './account.module.scss';


const AccountPage = () => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    return (
        <div className={styles.AccountPage}>
            <main>
                <h2>Account Information</h2>

                <Subscription />

            </main>
        </div>
    );
};
export default AccountPage;
