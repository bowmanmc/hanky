import { getSession } from 'next-auth/client';

import DataUtils from 'lib/datautils';
import db from 'lib/db';


// GET /api/entries/pinned
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const author = session.user.email;
        const params = DataUtils.pinnedParams(author);
        await db.query(params).then(results => {
            response.json(results.Items || []);
        }).catch(error => {
            console.log('ERROR: listing pinned items with params: ' + JSON.stringify(params));
            console.error(error);
            response.json(error);
        });
    }
    else {
        response.json({
            error: 'Not authorized.'
        });
    }
};
