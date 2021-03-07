import Stripe from 'stripe';
import { getSession } from 'next-auth/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-03-02',
});


// POST /api/stripe/portal
export default async function handle(request, response) {
    // Only accept POST requests
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method Not Allowed');
        return;
    }

    // Get the logged in user
    console.log('getting logged in user...');
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
        const email = session.user.email;
        const customers = await stripe.customers.list({
            email: email,
        });
        const customer = customers.data[0];
        const origin = request.headers.origin;
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: `${customer.id}`,
            return_url: `${origin}/account`,
        });
        response.status(200).json(portalSession);
    }
    catch (err) {
        response.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};
