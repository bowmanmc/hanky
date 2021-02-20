// Unsplash pictures
export const pictures = [
    {
        image: 'kelly-sikkema-fvpgfw3IF1w-unsplash.jpg',
        name: 'Kelly Sikkema',
        bio: 'https://unsplash.com/@kellysikkema',
        link: 'https://unsplash.com/photos/fvpgfw3IF1w',
    }, {
        image: 'brigitte-tohm-EAay7Aj4jbc-unsplash.jpg',
        name: 'Brigitte Tohm',
        bio: 'https://unsplash.com/@brigittetohm',
        link: 'https://unsplash.com/photos/EAay7Aj4jbc',
    } , {
        image: 'rosie-kerr-DoUUDaNwHJM-unsplash.jpg',
        name: 'Rosie Kerr',
        bio: 'https://unsplash.com/@rosiekerr',
        link: 'https://unsplash.com/photos/DoUUDaNwHJM',
    }, {
        image: 'hanny-naibaho-0YbeoQOX89k-unsplash.jpg',
        name: 'Hanny Naibaho',
        bio: 'https://unsplash.com/@hannynaibaho',
        link: 'https://unsplash.com/photos/0YbeoQOX89k'
    }, {
        image: 'aaron-burden-zunGugEsJCE-unsplash.jpg',
        name: 'Aaron Burden',
        bio: 'https://unsplash.com/@aaronburden',
        link: 'https://unsplash.com/photos/zunGugEsJCE',
    }, {
        image: 'priscilla-du-preez-k7KnkYqh5Zo-unsplash.jpg',
        name: 'Priscilla Du Preez',
        bio: 'https://unsplash.com/@priscilladupreez',
        link: 'https://unsplash.com/photos/k7KnkYqh5Zo',
    }, {
        image: 'jason-leung-Xaanw0s0pMk-unsplash.jpg',
        name: 'Jason Leung',
        bio: 'https://unsplash.com/@ninjason',
        link: 'https://unsplash.com/photos/Xaanw0s0pMk'
    }, {
        image: 'jamie-street-hBzrr6m6-pc-unsplash.jpg',
        name: 'Jamie Street',
        bio: 'https://unsplash.com/@jamie452',
        link: 'https://unsplash.com/photos/hBzrr6m6-pc'
    }, {
        image: 'weston-mackinnon-gWG3hqE07ls-unsplash.jpg',
        name: 'Weston MacKinnon',
        bio: 'https://unsplash.com/@betteratf8',
        link: 'https://unsplash.com/photos/gWG3hqE07ls',
    }, {
        image: 'yoksel-zok-H9Un6az4rno-unsplash.jpg',
        name: 'Yoksel 🌿 Zok',
        bio: 'https://unsplash.com/@yoksel',
        link: 'https://unsplash.com/photos/H9Un6az4rno',
    }, {
        image: 'gabrielle-henderson-M4lve6jR26E-unsplash.jpg',
        name: 'Gabrielle Henderson',
        bio: 'https://unsplash.com/@gabriellefaithhenderson',
        link: 'https://unsplash.com/photos/M4lve6jR26E',
    }, {
        image: 'patrick-fore-74TufExdP3Y-unsplash.jpg',
        name: 'Patrick Fore',
        bio: 'https://unsplash.com/@patrickian4',
        link: 'https://unsplash.com/photos/74TufExdP3Y'
    },
];

export const getPictureIndex = (img) => {
    for (let i = 0; i < pictures.length; i++) {
        if (pictures[i].image === img) {
            return i;
        }
    }
    return -1;
};
