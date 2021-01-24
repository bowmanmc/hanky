// From uigradients.com
const gradients = [
    // Dark Ocean
    '#373B44 linear-gradient(to right, #4286f4, #373B44)',
    // Witching Hour
    '#c31432 linear-gradient(to right, #240b36, #c31432)',
    // MegaTron
    '#C6FFDD linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)',
    // JShine
    '#12c2e9 linear-gradient(to right, #f64f59, #c471ed, #12c2e9)',
    // Harvey
    '#1f4037 linear-gradient(to right, #99f2c8, #1f4037)',
    // Flare
    '#f12711 linear-gradient(to right, #f5af19, #f12711)',
    // Burning Orange
    '#FF416C linear-gradient(to right, #FF4B2B, #FF416C)',
    // Wiretap
    '#8A2387 linear-gradient(to right, #F27121, #E94057, #8A2387)',
    // Sin City Red
    '#ED213A linear-gradient(to right, #93291E, #ED213A)',
    // Blue Raspberry
    '#00B4DB linear-gradient(to right, #0083B0, #00B4DB)',
    // Vanusa
    '#DA4453 linear-gradient(to right, #89216B, #DA4453)',
    // Expresso
    '#ad5389  linear-gradient(to right, #3c1053, #ad5389)',
    // Moon Purple
    '#4e54c8 linear-gradient(to right, #8f94fb, #4e54c8)',
    // Quepal
    '#11998e linear-gradient(to right, #38ef7d, #11998e)',
    // Sublime Vivid
    '#FC466B linear-gradient(to right, #3F5EFB, #FC466B)',
    // Taran Tado
    '#23074d linear-gradient(to right, #cc5333, #23074d)',
    // Lawrencium
    '#0f0c29 linear-gradient(to right, #24243e, #302b63, #0f0c29)',
    // Ohhappiness
    '#00b09b linear-gradient(to right, #96c93d, #00b09b)',
    // Rainbow Blue
    '#00F260 linear-gradient(to right, #0575E6, #00F260)',
    // King Yna
    '#1a2a6c linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c)',
    // Orange Coral
    '#ff9966 linear-gradient(to right, #ff5e62, #ff9966)',
    // Crimson Tide
    '#642B73 linear-gradient(to right, #C6426E, #642B73)',
    // Alive
    '#CB356B linear-gradient(to right, #BD3F32, #CB356B)',
    // Meridian
    '#283c86 linear-gradient(to right, #45a247, #283c86)',
    // Learning and Leading
    '#F7971E linear-gradient(to right, #FFD200, #F7971E)',
    // Love and Liberty
    '#200122 linear-gradient(to right, #6f0000, #200122)',
    // 80's Purple
    '#41295a linear-gradient(to right, #2F0743, #41295a)',
    // Cosmic Fusion
    '#ff00cc linear-gradient(to right, #333399, #ff00cc)',
    // Firewatch
    '#cb2d3e linear-gradient(to right, #ef473a, #cb2d3e)',
    // Lush
    '#56ab2f linear-gradient(to right, #a8e063, #56ab2f)',
    // Frost
    '#000428 linear-gradient(to right, #004e92, #000428)',
    // Sweet Morning
    '#FF5F6D linear-gradient(to right, #FFC371, #FF5F6D)',
    // Little Leaf
    '#76b852 linear-gradient(to right, #8DC26F, #76b852)',
    // Back to Earth
    '#00C9FF linear-gradient(to right, #92FE9D, #00C9FF)',
    // Turquoise Flow
    '#136a8a linear-gradient(to right, #267871, #136a8a)',
    // Purple Bliss
    '#360033 linear-gradient(to right, #0b8793, #360033)',
    // Between the Clouds
    '#73C8A9 linear-gradient(to right, #373B44, #73C8A9)',
    // Behongo
    '#52c234 linear-gradient(to right, #061700, #52c234)',
    // FB Messenger
    '#00c6ff linear-gradient(to right, #0072ff, #00c6ff)',
    // Parklife
    '#ADD100 linear-gradient(to right, #7B920A, #ADD100)',
    // Shrimpy
    '#e43a15 linear-gradient(to right, #e65245, #e43a15)',
    // Moss
    '#134E5E linear-gradient(to right, #71B280, #134E5E)',
    // Electric Violet
    '#4776E6 linear-gradient(to right, #8E54E9, #4776E6)',
    // Sunrise
    '#FF512F linear-gradient(to right, #F09819, #FF512F)',
    // Stripe
    '#1FA2FF linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF)',
    // Mango Pulp
    '#F09819 linear-gradient(to right, #EDDE5D, #F09819)',
    // Lemon Twist
    '#3CA55C linear-gradient(to right, #B5AC49, #3CA55C)',
    // Mango
    '#ffe259 linear-gradient(to right, #ffa751, #ffe259)',
    // Rea
    '#FFE000 linear-gradient(to right, #799F0C, #FFE000)',
];

const patterns = [
    'circles-01.png',
    'circles-02.png',
    'circles-03.png',
    'circles-04.png',
];

export const getGradient = () => {
    return gradients[Math.floor(Math.random() * gradients.length)];
};

export const getPattern = () => {
    return patterns[Math.floor(Math.random() * patterns.length)];
};
