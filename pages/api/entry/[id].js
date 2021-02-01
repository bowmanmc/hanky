import { getSession } from 'next-auth/client'

import db from 'lib/db';
import DataUtils from 'lib/datautils';
import processEntry from 'lib/processEntry';

// GET /api/entry/:id
const handleGet = async (request, response, author) => {
    const { query: { id } } = request;
    const params = DataUtils.findByIdParams(author, id);
    await db.query(params).then(results => {
        // console.log('Results: ' + JSON.stringify(results));
        if (!results || results.Count === 0) {
            response.status(404).json({error: `Entry ${id} not found.`});
        }
        else {
            // let's log some debug info... we'll have to watch ScannedCount
            console.log(`/api/entry/:id - ScannedCount: ${results.ScannedCount}`);
            const result = results.Items[0];
            response.json(result);
        }
    });
};

// UPDATE /api/entry/:id
const handleUpdate = async (request, response, author) => {

};

// We're handing GET, UPDATE, and DELETE methods here...
// all endpoints require authentication to get here
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const author = session.user.email;
        if (request.method === 'UPDATE') {
            // Process an UPDATE request
        }
        else {
            // Handle other (GET)
            handleGet(request, response, author);
        }
    }
    else {
        response.status(401).json({
            error: 'Not authorized.'
        });
    }
};

