import { getSession } from 'next-auth/client'

import prisma from 'lib/prisma';


// POST /api/hanky
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const author = session.user.email;
        const { content } = request.body;
        const result = await prisma.hanky.create({
            data: {
                author, content
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
