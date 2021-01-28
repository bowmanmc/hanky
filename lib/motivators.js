// Motivation Statements
//
// Sprinkle these throughout the UI and notifications to
// keep folks interested and doing their gratitude statements
// every day.
//
const motivators = [{
    statement: 'People who keep a gratitude journal are 25% happier and more energetic.',
    source: 'Robert Emmons, Ph.D',
    // https://www.cnn.com/2009/LIVING/11/25/giving.gratitude/index.html
}, {
    statement: 'People who practice gratitude sleep 10% longer each night and wake up 15% more refreshed.',
    source: 'Robert Emmons, Ph.D',
    // https://www.cnn.com/2009/LIVING/11/25/giving.gratitude/index.html
}, {
    statement: 'Folks who keep a gratitude journal exercise 33% more and show a 10% drop in blood pressure.',
    source: 'Robert Emmons, Ph.D',
    // https://www.cnn.com/2009/LIVING/11/25/giving.gratitude/index.html
}, {
    statement: 'Practicing gratitude can increase your optimism by up to 15%',
    source: 'Amin - 2014',
    // https://positivepsychology.com/benefits-gratitude-research-questions/
}, {
    statement: 'Keeping a gratitude journal can improve your work-related mental health and reduce stress',
    source: 'Cheng, Tsui, & Lam - 2015',
    // https://positivepsychology.com/benefits-gratitude-research-questions/
}];

export const getMotivator = () => {
    return motivators[Math.floor(Math.random() * motivators.length)];
};
