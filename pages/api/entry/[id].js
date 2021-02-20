import { getSession } from 'next-auth/client'

import db from 'lib/db';
import DataUtils from 'lib/datautils';
import { checkEntry } from 'lib/abuse';


// GET /api/entry/:id
const handleGet = async (request, response, sessionUser) => {
    const { query: { id } } = request;
    const params = DataUtils.findByIdParams(sessionUser, id);
    const results = await db.query(params);

    if (!results || results.Count === 0) {
        response.status(404).json({error: `Entry ${id} not found.`});
    }
    else {
        // let's log some debug info... we'll have to watch ScannedCount
        console.log(`/api/entry/:id - ScannedCount: ${results.ScannedCount}`);
        const result = results.Items[0];
        response.json(result);
    }
};

const handleUpdate = async (request, response, sessionUser) => {
    const { body: { sk, id, entry, splash, isPinned, isPublic }} = request;
    // Generate pk from session user to prevent any funny business
    const pk = DataUtils.pk(sessionUser);

    const checkResults = checkEntry(entry);
    if (checkResults.banned) {
        response.status(400).json({
            error: 'Invalid entry parameter',
        });
    }
    else {
        const params = DataUtils.updateEntryParams({pk, sk, id}, {entry, splash, isPinned, isPublic});
        const results = await db.update(params);
        response.json(results);
    }
};

// GET, UPDATE, & DELETE methods require a
// valid session. All of these look up the
// entry by assuming sessionUser === author
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });

    if (session) {
        const sessionUser = session.user.email;

        if (request.method === 'GET') {
            await handleGet(request, response, sessionUser);
        }
        else if (request.method === 'PUT') {
            // handleUpdate
            await handleUpdate(request, response, sessionUser);
        }
        else if (request.method === 'DELETE') {
            // handleDelete
        }
    }
    else {
        response.status(401).json({
            error: 'Not authorized.'
        });
    }
};

