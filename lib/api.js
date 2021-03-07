import DataUtils from './datautils';

export default {

    updateItem: async (updates) => {
        await fetch(`/api/entry/${updates.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        return updates;
    },

    fetchThanks: async (author, itemId) => {
        if (!author || !itemId) {
            return null;
        }
        console.log('ABSOLUTE URL in api.js');
        const response = await fetch(`http://localhost:3000/api/thanks?id=${itemId}&author=${author}`);
        const item = await response.json();
        return item;
    },

    fetchAuthor: async (author) => {
        console.log('ABSOLUTE URL in api.js');
        const response = await fetch(`http://localhost:3000/api/user/${author}`);
        const item = await response.json();
        return item;
    },

    fetchItem: async (itemId) => {
        if (!itemId) {
            return null;
        }
        const response = await fetch(`/api/entry/${itemId}`);
        const item = await response.json();
        return item;
    },

    allFeed: async () => {
        const response = await fetch('/api/entries/feed');
        const items = await response.json();
        return items;
    },

    todayFeed: async () => {
        const response = await fetch('/api/entries/today');
        const items = await response.json();
        return items;
    },

    randomizedFeed: async () => {
        const response = await fetch('/api/entries/feed');
        const items = await response.json();
        DataUtils.shuffleArray(items);
        return items;
    },

    pinnedFeed: async () => {
        const response = await fetch('/api/entries/pinned');
        const items = await response.json();
        return items;
    },

    startCheckout: async () => {
        const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: '',
        });
        const result = await response.json();
        return result;
    },

    subscriptionInfo: async () => {
        const response = await fetch('/api/stripe/subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: '',
        });
        const result = await response.json();
        return result;
    },

    stripePortal: async (customer) => {
        const response = await fetch('/api/stripe/portal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: '',
        });
        const result = await response.json();
        return result;
    },
};
