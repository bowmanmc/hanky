import db from 'lib/db';
import DataUtils from 'lib/datautils';


// /api/thanks?author=...&id=...
// This is for the public thanks page. This one is a public
// endpoint and does not require authentication.
// Return the entry only if the user has marked it as public
export default async function handle(request, response) {
    const { query: { id, author } } = request;
    const params = DataUtils.findByIdParams(author, id);
    const results = await db.query(params);

    if (!results || results.Count === 0) {
        response.status(404).json({error: `Entry ${id} not found.`});
    }
    else {
        // let's log some debug info... we'll have to watch ScannedCount
        console.log(`/api/thanks - ScannedCount: ${results.ScannedCount}`);
        const result = results.Items[0];

        // result needs to be marked as public before we return it
        if (result.isPublic) {
            response.json(result);
        }
        else {
            response.status(404).json({error: `Entry ${id} not found.`});
        }
    }
};
