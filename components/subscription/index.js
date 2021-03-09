import { FaStripe } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Api from 'lib/api';

import Details from './details';
import Subscribe from './subscribe';

import styles from './index.module.scss';



const Subscription = () => {

    const [subscriptionInfo, setSubscriptionInfo] = useState({});

    useEffect(() => {
        Api.subscriptionInfo().then(info => {
            setSubscriptionInfo(info);
        });
    }, []);

    let details = (
        <p>loading...</p>
    );

    if (subscriptionInfo && subscriptionInfo.end) {
        details = <Details info={subscriptionInfo} />;
    }
    else {
        details = <Subscribe />;
    }

    return (
        <div className={styles.Subscription}>
            <div className={styles.Subscription__icon}>
                <FaStripe />
            </div>
            <div className={styles.Subscription__details}>
                {details}
            </div>
        </div>
    );
};
export default Subscription;
