import { getSession } from 'next-auth/client'

import db from 'lib/db';
import DataUtils from 'lib/datautils';


// GET /api/user/:id
// This is a public route (to support the /thanks page)
// Only send name and avatar info down
const handleGet = async (request, response) => {
    const { query: { email } } = request;
    const params = DataUtils.getUserParams(email);
    const result = await db.get(params);

    if (!result || !result.Item) {
        response.status(404).json({error: `User ${email} not found.`});
    }
    else {
        // const result = results.Items[0];
        // response.json(result);
        const user = result.Item;
        response.json({
            name: user.name,
            email: user.email,
            image: user.image,
        });
    }
};

const handleUpdate = async (request, response, sessionUser) => {
    const { body: { name }} = request;
    // Generate pk from session user to prevent any funny business
    const pk = DataUtils.pk(sessionUser.email);
    const sk = DataUtils.userSk(sessionUser.email);
    const updates = Object.assign({}, sessionUser, { name });
    const params = DataUtils.updateUserParams(updates);
    const results = await db.update(params);
    response.json(results);
};

export default async function handle(request, response) {
    // GET is public
    if (request.method === 'GET') {
        await handleGet(request, response);
    }
    // PUT needs an authenticated user
    else {
        const session = await getSession({
            req: request
        });

        if (session && session.user) {
            if (request.method === 'PUT') {
                // handleUpdate
                await handleUpdate(request, response, session.user);
            }
            else {
                response.status(500).json({
                    error: 'Unknown operation.'
                });
            }
        }
        else {
            response.status(401).json({
                error: 'Not authorized.'
            });
        }
    }
};

