
const anytime = [
    "Hi",
    "Hello",
    "Hello There",
    "Hola",
    "Howdy",
    "Welcome",
    "Welcome Back",
    "Ahoy",
    "Hiya",
    "Heyo",
    "Hey",
    "Hey There",
    "What's Up",
    "Greetings & Salutations",
    "Why Hello There",
    "Aloha",
    "Que Pasa",
    "Bonjour",
    "Hallo",
    "Greetings",
    "Good to See You",
    "Great to See You",
    "Nice to See You",
    "Long Time No See",
    "Well Look Who It Is",
    "What's New"
];

export const getGreeting = () => {
    return anytime[Math.floor(Math.random() * anytime.length)];
};
