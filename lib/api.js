import DataUtils from './datautils';

export default {

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
}
