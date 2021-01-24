import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { getGradient, getPattern } from './backgrounds';

const FEED_LIMIT = 50;

const DataUtils = {

    pk: (email) => {
        return `USER#${email}`;
    },

    sk: (email, sortableTimestamp) => {
        //const sortableTimestamp = dayjs().toISOString();
        if (!sortableTimestamp) {
            sortableTimestamp = dayjs().toISOString();
        }
        return `HANKY#${email}#${sortableTimestamp}`;
    },

    id: () => {
        // https://github.com/ai/nanoid
        return nanoid();
    },

    timestamp: () => {
        return dayjs().toISOString();
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

    entryParams: (author, data) => {
        const {entry, words} = data;
        const timestamp = dayjs().toISOString();

        return {
            Item: {
                pk: DataUtils.pk(author),
                sk: DataUtils.sk(author, timestamp),
                id: DataUtils.id(),
                author: author,
                entry: data.entry,
                gradient: getGradient(),
                pattern: getPattern(),
                words: JSON.stringify(data.words),
                created: timestamp,
                updated: timestamp,
            },
        };
    },
};

export default DataUtils;
