import { getSession } from 'next-auth/client';

import DataUtils from 'lib/datautils';
import db from 'lib/db';


// GET /api/hankies
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const author = session.user.email;
        const params = DataUtils.feedParams(author);
        await db.query(params).then(results => {
            response.json(results.Items || []);
        }).catch(error => {
            console.log('ERROR: listing feed with params: ' + JSON.stringify(params));
            console.error(error);
            response.status(500).json({error: 'An error occurred while loading feed from the database.'});
        });
    }
    else {
        response.status(401).json({
            error: 'Not authorized.'
        });
    }
};
