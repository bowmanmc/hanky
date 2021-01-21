import { getSession } from 'next-auth/client'

import prisma from 'lib/prisma';
import processEntry from 'lib/processEntry';


// POST /api/hanky
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const author = session.user.email;
        const { content } = request.body;
        const data = processEntry(content);
        const result = await prisma.hanky.create({
            data: {
                author: author,
                content: data.entry,
            },
        });
        response.json(result);
    }
    else {
        response.json({
            error: 'Not authorized.'
        });
    }
};
