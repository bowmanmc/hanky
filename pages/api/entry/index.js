import { getSession } from 'next-auth/client'

import db from 'lib/db';
import DataUtils from 'lib/datautils';
import processEntry from 'lib/processEntry';

// POST /api/entry
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const author = session.user.email;
        const { content, localtime } = request.body;
        const entry = processEntry(content);
        console.log(`Entry "${entry}`);
        if (!entry || entry === '' || typeof localtime === 'undefined') {
            response.status(400).json({
                error: 'Invalid entry parameter',
            });
        }
        else {
            const params = DataUtils.addEntryParams(author, entry, localtime);
            await db.put(params).then(result => {
                response.json(params);
            }).catch(error => {
                console.log('ERROR: saving entry ' + JSON.stringify(params));
                console.error(error);
                response.json(error);
            });
        }
    }
    else {
        response.status(401).json({
            error: 'Not authorized.',
        });
    }
};

