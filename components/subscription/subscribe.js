import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { GrStripe } from 'react-icons/gr';

import Api from 'lib/api';
import { getStripe } from 'lib/stripe';

dayjs.extend(advancedFormat);


const Subscribe = () => {

    const go2subscribe = async (e) => {
        e.preventDefault();

        const checkoutSession = await Api.startCheckout();

        if (checkoutSession.statusCode === 500) {
            console.error(checkoutSession.message);
            return;
        }

        // Redirect to Checkout.
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            sessionId: checkoutSession.id,
        });
        if (error) {
            console.warn(error.message);
        }
    };

    return (
        <>
            <p>
                To continue, please purchase a subscription.
                It's guaranteed to make you a happier person! 😁
            </p>
            <button onClick={go2subscribe}>
                <GrStripe /> Subscribe Now
            </button>
        </>
    );
};
export default Subscribe;
