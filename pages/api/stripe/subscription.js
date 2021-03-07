import dayjs from 'dayjs';
import { getSession } from 'next-auth/client';

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-03-02',
});

// POST /api/stripe/subscription
export default async function handle(request, response) {
    // Only accept POST requests
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method Not Allowed');
        return;
    }

    // Get the logged in user
    const session = await getSession({
        req: request,
    });
    if (!session) {
        response.status(401).json({
            error: 'Not authorized',
        });
        return;
    }

    try {
        const customers = await stripe.customers.list({
            email: session.user.email,
        });
        const customer = customers.data[0]; // get the first one
        const subscription = customer.subscriptions.data[0]; // first subscription?
        //console.log('Subscription: ' + JSON.stringify(subscription, null, 4));
        // Only send back what is needed for display
        const info = {
            status: subscription?.status,
            start: dayjs.unix(subscription['current_period_start']).format('YYYY-MM-DD'),
            end: dayjs.unix(subscription['current_period_end']).format('YYYY-MM-DD'),
        };

        response.status(200).json(info);
    }
    catch (err) {
        console.error(`Error getting subscription info for ${session.user.email}`, err);
        response.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};
