import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { FaStripe } from 'react-icons/fa';
import { GrStripe } from 'react-icons/gr';
import { useRouter } from 'next/router'

import Api from 'lib/api';
import Constants from 'lib/constants';

import styles from './index.module.scss';


dayjs.extend(advancedFormat);

const Subscription = ({ subscription }) => {
    const router = useRouter();

    const date = dayjs(subscription.end).format(Constants.DATE_FORMAT_DAY);

    const go2stripe = async (e) => {
        e.preventDefault();

        const session = await Api.stripePortal();
        if (session.statusCode === 500) {
            console.error(session.message);
            return;
        }
        router.push(session.url);
    };

    return (
        <div className={styles.Subscription}>
            <div className={styles.Subscription__icon}>
                <FaStripe />
            </div>
            <div className={styles.Subscription__details}>
                <h2>Subscription Details</h2>
                <p>
                    Your subscription ends on <br />
                    {date}
                </p>
                <button onClick={go2stripe}>
                    <GrStripe /> Manage your subscription
                </button>
            </div>
        </div>
    );
};
export default Subscription;
