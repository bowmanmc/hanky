import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-03-02',
});

// POST /api/stripe/checkout
export default async function handle(request, response) {
    // Only accept POST requests
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method Not Allowed');
        return;
    }

    try {
        const origin = request.headers.origin;
        // Create Checkout Sessions from body params.
        const params = {
            mode: 'subscription',
            allow_promotion_codes: true,
            payment_method_types: ['card'],
            line_items: [
                {
                    price: 'price_1IN4djF9e3DEIax7DdEzuWcs',
                    quantity: 1,
                },
            ],
            success_url: `${origin}/account?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/account`,
        };
        const checkoutSession = await stripe.checkout.sessions.create(params);
        response.status(200).json(checkoutSession);
    }
    catch (err) {
        response.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};
