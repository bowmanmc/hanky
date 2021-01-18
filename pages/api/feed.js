import { getSession } from 'next-auth/client'

import prisma from 'lib/prisma';


// GET /api/hankies
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const author = session.user.email;
        const results = await prisma.hanky.findMany({
            where: { author: author },
            orderBy: [{ created: 'desc' }, { id: 'desc' }],
        });
        response.json(results);
    }
    else {
        response.json({
            error: 'Not authorized.'
        });
    }
};
