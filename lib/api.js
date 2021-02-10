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

    fetchItem: async (itemId) => {
        if (!itemId) {
            return;
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
}
