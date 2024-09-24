export interface IPage {
    title?: string;
    href: string;
    children?: IPage[];
}

export const allPages: IPage[] = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Coda",
        href: "/coda",
        children: [
            {
                title: "Dime Dive",
                href: "/coda/dime-dive"
            }
        ]
    },
    {
        title: "Lending",
        href: "/lending"
    },
    {
        title: "AA Connect",
        href: "/aa-connect",
        children: [
            {
                title: "Finsense",
                href: "/aa-connect/finsense"
            },
            {
                title: "ConnectHub",
                href: "/aa-connect/connect-hub"
            }
        ]
    }
];