// Prompts
//
// Use these to help jog the user into entering a
// gratitude statement.
//
const prompts = [
    'Write down three things you are grateful for.',
    'List three things you are thankful for.',
    'What are three things that you appreciate about yourself?',
    'List three people that have had a positive impact on your life.',
    'What are three things that you take for granted, but you are actually very thankful for?',
    'What was the best thing that happened to you today?',
    'Who is someone who made you smile lately and why?',
    'Where is your favorite place to go to relax?',
    'Where is your favorite place to go for fun?',
    'List something that you learned about recently',
    'Name someone that inspires you and why?',
    'What is a song that you always sing along to?',
    'Write down a memory that makes you laugh.',
    'Write about a personal accomplishment from the last week.',
];

export const getPrompt = () => {
    return prompts[Math.floor(Math.random() * prompts.length)];
};
