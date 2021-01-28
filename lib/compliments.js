
// https://www.verywellmind.com/positivity-boosting-compliments-1717559
// https://www.grammarly.com/blog/compliments-for-any-person/
const compliments = [
    "You look great today",
    "You are awesome",
    "I'm glad you're here",
    "I'm glad to see you",
    "I like your style",
    "You light up the room",
    "You're a gift to those around you",
    "You have a contagious smile",
    "I bet you make babies smile",
    "I bet you sweat glitter",
    "You're a candle in the darkness",
    "You could survive a zombie apocolypse",
    "You are the most perfect you there is",
    "You're one of a kind",
    "You are enough",
    "You're really something special",
    "You're amazing",
    "Your positivity is infectious",
    "Thanks for being you",
];

export const getCompliment = () => {
    return compliments[Math.floor(Math.random() * compliments.length)];
};
