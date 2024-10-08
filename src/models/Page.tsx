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
        title: "WealthScape",
        href: "/wealth-scape",
        children: [
            {
                title: "Authentication",
                href: "/wealth-scape#auth"
            },
            {
                title: "Subscription",
                href: "/wealth-scape#subscription"
            },
            {
                title: "AA Connect",
                href: "/wealth-scape#aa-connect"
            },
            {
                title: "MFC Connect",
                href: "/wealth-scape#mfc-connect"
            },
            {
                title: "Deposit Insights",
                href: "/wealth-scape#deposit-insights"
            },
            {
                title: "Mutual Fund Insights",
                href: "/wealth-scape#mutual-fund-insights"
            },
            {
                title: "Equity Insights",
                href: "/wealth-scape#equity-insights"
            },
            {
                title: "Recurring Deposit Insights",
                href: "/wealth-scape#recurring-deposit-insights"
            },
            {
                title: "Term Deposit Insights",
                href: "/wealth-scape#term-deposit-insights"
            },
            {
                title: "Others",
                href: "/wealth-scape#others"
            }
        ]
    }
];