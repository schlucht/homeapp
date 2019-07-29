export interface TopMenu {
    name: string;
    visibility: boolean;
    sub: SubMenu[];
}

export interface SubMenu {
    name: string;
    link: string;
    activ: boolean;
}
