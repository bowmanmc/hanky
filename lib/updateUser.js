import prisma from './prisma';

/*
 * This gets called every time a user logs in. Since
 * their name and avatar are stored elsewhere, this
 * keeps our data up to date with whatever service
 * they are using.
 */
export default async function updateUser(user) {
    const record = {
        name: user.name,
        email: user.email,
        pic: user.image,
    };
    const result = await prisma.user.upsert({
        where: { email: user.email },
        update: record,
        create: record,
    });
    if (result) {
        Promise.resolve(true);
    }
    else {
        Promise.resolve(false);
    }
};
