import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { getGradient, getPattern } from './backgrounds';

const FEED_LIMIT = 50;

const DataUtils = {

    pk: (email) => {
        return `USER#${email}`;
    },

    sk: (email, sortableTimestamp) => {
        return `THANKY#${email}#${sortableTimestamp}`;
    },

    id: () => {
        // https://github.com/ai/nanoid
        return nanoid();
    },

    timestamp: () => {
        return dayjs().toISOString();
    },

    random: (items) => {
        if (!items || items.length < 1) {
            return null;
        }
        return items[Math.floor(Math.random() * items.length)];
    },

    feedParams: (author, limit) => {
        const pkVal = DataUtils.pk(author);
        return {
            KeyConditionExpression: 'pk = :pk',
            ExpressionAttributeValues: {
                ':pk': pkVal
            },
            ScanIndexForward: false, // sort descending
            Limit: limit || FEED_LIMIT,
        };
    },

    todayParams: (author) => {
        const day = dayjs().format('YYYY-MM-DD'); // localtime
        const filter = DataUtils.sk(author, day);
        const pkVal = DataUtils.pk(author);
        return {
            KeyConditionExpression: 'pk = :pk and begins_with(sk, :filter)',
            ExpressionAttributeValues: {
                ':pk': pkVal,
                ':filter': filter,
            },
            ScanIndexForward: false, // sort descending
            Limit: FEED_LIMIT,
        };
    },

    findByIdParams: (author, id) => {
        const pkVal = DataUtils.pk(author);
        return {
            KeyConditionExpression: 'pk = :pk',
            FilterExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':pk': pkVal,
                ':id': id,
            },
        };
    },

    addEntryParams: (author, entry, localtime) => {
        const servertime = dayjs().toISOString(); // executes on the server api

        return {
            Item: {
                pk: DataUtils.pk(author),
                sk: DataUtils.sk(author, localtime),
                id: DataUtils.id(),
                author: author,
                entry: entry,
                isPublic: false,
                gradient: getGradient(),
                pattern: getPattern(),
                created: servertime,
                updated: servertime,
            },
        };
    },

    updateEntryParams: (entry, updates) => {
        // Can only update the entry text and the isPublic flag.
        const servertime = dayjs().toISOString(); // executes on the server api
        return {
            Key: {
                'pk': entry.pk,
                'sk': entry.sk,
            },
            UpdateExpression: "set entry = :entry, isPublic = :isPublic, updated = :updated",
            ExpressionAttributeValues: {
                ':entry': updates.entry,
                ':isPublic': updates.isPublic,
                ':updated': servertime,
            },
            ReturnValues: 'UPDATED_NEW',
        };
    },
};

export default DataUtils;
