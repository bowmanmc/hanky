import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { getGradient, getPattern } from './backgrounds';

const FEED_LIMIT = 50;

const DataUtils = {

    pk: (email) => {
        return `USER#${email}`;
    },

    sk: (email, sortableTimestamp) => {
        return `HANKY#${email}#${sortableTimestamp}`;
    },

    id: () => {
        // https://github.com/ai/nanoid
        return nanoid();
    },

    timestamp: () => {
        return dayjs().toISOString();
    },

    todayParams: (author) => {
        const day = dayjs().format('YYYY-MM-DD'); // localtime
        const filter = `HANKY#${author}#${day}`;
        return {
            KeyConditionExpression: '#pk = :pk and begins_with(#sk, :filter)',
            ExpressionAttributeNames: {
                '#pk': 'pk',
                '#sk': 'sk',
            },
            ExpressionAttributeValues: {
                ':pk': `USER#${author}`,
                ':filter': filter,
            },
            ScanIndexForward: false, // sort descending
            Limit: FEED_LIMIT,
        };
    },

    queryParams: (author) => {
        return {
            KeyConditionExpression: '#pk = :pk',
            ExpressionAttributeNames: {
                '#pk': 'pk',
            },
            ExpressionAttributeValues: {
                ':pk': `USER#${author}`,
            },
            ScanIndexForward: false, // sort descending
            Limit: FEED_LIMIT,
        };
    },

    entryParams: (author, entry, localtime) => {
        const servertime = dayjs().toISOString(); // executes on the server api

        return {
            Item: {
                pk: DataUtils.pk(author),
                sk: DataUtils.sk(author, localtime),
                id: DataUtils.id(),
                author: author,
                entry: entry,
                gradient: getGradient(),
                pattern: getPattern(),
                created: servertime,
                updated: servertime,
            },
        };
    },
};

export default DataUtils;
