import { TopMenu } from '../top-menu/topmenu';

export const menuList: TopMenu[] = [{
    name: 'Konto',
    visibility: false,
    sub: [
        {
            name: 'Haushalt',
            link: 'bus',
            activ: true
        },
        {
            name: 'Privat',
            link: 'flug',
            activ: true
        },
        {
            name: 'Sparen',
            link: 'tandem',
            activ: true
        }]
    }, {
    name: 'Ausgaben',
    visibility: false,
    sub: [
        {
            name: 'Essen',
            link: 'bus',
            activ: true
        },
        {
            name: 'Reisen',
            link: 'flug',
            activ: true
        },
        {
            name: 'Auto',
            link: 'tandem',
            activ: true
        }
    ]
}];