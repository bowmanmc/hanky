import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Api from 'lib/api';
import { getStripe } from 'lib/stripe';

import Subscription from 'components/subscription';

import styles from './account.module.scss';


const AccountPage = () => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const [subscriptionInfo, setSubscriptionInfo] = useState({});
    useEffect(() => {
        Api.subscriptionInfo().then(info => {
            setSubscriptionInfo(info);
        });
    }, [])

    const subscribe = async (e) => {
        e.preventDefault();

        const checkoutSession = await Api.startCheckout();

          if (checkoutSession.statusCode === 500) {
            console.error(checkoutSession.message);
            return;
          }

          // Redirect to Checkout.
          const stripe = await getStripe()
          const { error } = await stripe.redirectToCheckout({
            sessionId: checkoutSession.id
          });
          console.warn(error.message);
    };

    return (
        <div className={styles.AccountPage}>
            <main>
                <h2>Account Information</h2>

                <Subscription subscription={subscriptionInfo} />

                <button onClick={subscribe}>
                    Subscribe
                </button>
            </main>
        </div>
    );
};
export default AccountPage;
