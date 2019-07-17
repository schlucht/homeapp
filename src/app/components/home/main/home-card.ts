export interface IHomeCard {
    title: string;
    description: string;
    link: string;
    imgLink: string;
}

export const homeCard: IHomeCard[] = [
    {
        title: 'Bank',
        description: 'Rechnungen und Zahlungsübersicht',
        link: '/bank',
        imgLink: 'bank.png'
    },
    {
        title: 'Einkauf',
        description: 'Einkäufe und Preise.',
        link: '/buy',
        imgLink: 'buy.svg'
    },
    {
        title: 'Reisen',
        description: 'Reisechecklisten und Reise Ideen',
        link: '/travel',
        imgLink: 'travel.png'
    },
    {
        title: 'Sport',
        description: 'Sportanlässe Ideen, Training',
        link: '/sport',
        imgLink: 'sport.png'
    }
];
