
export interface Question {
    title: string;
    answers: {
        title: string;
        points: number;
    }[];
}

export const questions: Question[] = [
    {
        title: 'Quelle température te semble idéale pour une escapade romantique ?',
        answers: [
            {
                title: '❄️ 5ºC - J\'aime sentir mes joues vivre dangeureusement',
                points: 1,
            },
            {
                title: '⛅ 19ºC - Petite veste, petite brise',
                points: 5,
            },
            {
                title: '🌤️ 26ºC - La vie commence ici !',
                points: 10,
            },
            {
                title: '🔥 32ºC - Je suis un lézard prémium',
                points: 15,
            },
        ],
    },
    {
        title: 'Le sable dans les chaussures, c\'est...',
        answers: [
            {
                title: '😡 Une trahison sensorielle',
                points: 1,
            },
            {
                title: '🍸 Supportable si cocktail inclus',
                points: 5,
            },
            {
                title: '😇 Un petit prix pour le paradis',
                points: 10,
            },
            {
                title: '😄 Une extension naturelle de mon être',
                points: 15,
            },
        ],
    },
    {
        title: 'Ta boisson idéale au coucher de soleil ?',
        answers: [
            {
                title: '☕ Chocolat chaud',
                points: 1,
            },
            {
                title: '🫖 Thé fumant avec écharpe',
                points: 5,
            },
            {
                title: '🍸 Spritz ou mojito face à la mer',
                points: 10,
            },
            {
                title: '🍹 Cocktail tropical avec mini-parasol',
                points: 15,
            },
        ],
    },
    {
        title: 'Tu préfères ?',
        answers: [
            {
                title: '🪄 Les aurores boréales mystérieuses',
                points: 1,
            },
            {
                title: '🌅 Les couchers de soleil dorées',
                points: 8,
            },
            {
                title: '🌞 La lumière écrasante de midi en plein été',
                points: 15,
            },
        ],
    },
    {
        title: 'Ta valise idéale contient ?',
        answers: [
            {
                title: '🧥 Doudoune technique et gants thermiques',
                points: 1,
            },
            {
                title: '🥼 Jean et veste légère',
                points: 5,
            },
            {
                title: '👗 Robes légères',
                points: 10,
            },
            {
                title: '👙 Maillots et sandales only!',
                points: 15,
            },
        ],
    },
    {
        title: 'Ton moment parfait à deux:',
        answers: [
            {
                title: '🔥 Feu de cheminée sous la neige',
                points: 1,
            },
            {
                title: '🌅 Balade au crépuscule tempéré',
                points: 10,
            },
            {
                title: '🌊 Diner face à la mer',
                points: 20,
            },
            {
                title: '💤 Sieste au soleil, sur plage isolée',
                points: 30,
            },
        ],
    },
];
