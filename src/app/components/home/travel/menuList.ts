import { TopMenu } from '../top-menu/topmenu';

export const menuList: TopMenu[] = [{
    name: 'Packlisten',
    visibility: false,
    sub: [
        {
            name: 'Busreisen',
            link: 'bus',
            activ: true
        },
        {
            name: 'Flugreisen',
            link: 'flug',
            activ: true
        },
        {
            name: 'Tandem',
            link: 'tandem',
            activ: true
        }]
    }, {
    name: 'Touren',
    visibility: false,
    sub: [
        {
            name: ' T-Busreisen',
            link: 'bus',
            activ: true
        },
        {
            name: 'T-Flugreisen',
            link: 'flug',
            activ: true
        },
        {
            name: 'T-Tandem',
            link: 'tandem',
            activ: true
        }
    ]
}];
