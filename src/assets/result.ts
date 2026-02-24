
export interface ResultItem {
    dates: string;
    city: string;
    photos: { label: string, img: string }[];
}

export const results: ResultItem[] = [
    {
        dates: '6-7',
        city: 'Francfort, Allemagne',
        photos: [
            {
                label: 'Hotel',
                img: '/images/f/1.jpg',
            },
            {
                label: 'Ville',
                img: '/images/f/2.jpg',
            },
        ],
    },
    {
        dates: '7-10',
        city: 'Rovaniemi, Finlande',
        photos: [
            {
                label: 'Hotel',
                img: '/images/r/1.jpg',
            },
            {
                label: 'Santa Claus Village',
                img: '/images/r/2.jpg',
            },
            {
                label: 'Spectacle d\'elfs',
                img: '/images/r/3.jpg',
            },
            {
                label: 'Safari Husky',
                img: '/images/r/4.jpg',
            },
        ],
    },
    {
        dates: '10-14',
        city: 'Helsinki, Finlande',
        photos: [
            {
                label: 'Hotel',
                img: '/images/h/1.jpg',
            },
            {
                label: 'Ville',
                img: '/images/h/2.jpg',
            },
            {
                label: 'Marché',
                img: '/images/h/5.jpg',
            },
            {
                label: 'Ile de Suomenlinna',
                img: '/images/h/4.jpg',
            },
        ],
    },
    {
        dates: '14-20',
        city: 'Copenhague, Danemark',
        photos: [
            {
                label: 'Hotel',
                img: '/images/c/1.jpg',
            },
            {
                label: 'Ville',
                img: '/images/c/2.jpg',
            },
            {
                label: 'Mini-croisière',
                img: '/images/c/3.jpg',
            },
            {
                label: 'Château de Frederiksborg',
                img: '/images/c/4.jpg',
            },
        ],
    }
];
