export interface IPage {
    title: string;
    href: string;
    children?: IPage[];
}

export const allPages: IPage[] = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "WealthTrack",
        href: "/wealth-track",
        children: [
            {
                title: "DimeDive",
                href: "/wealth-track/dime-dive"
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