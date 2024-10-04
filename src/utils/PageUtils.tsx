import { Link, matchPath } from 'react-router-dom';
import { allPages, IPage } from '../models/Page';

export function getSelectedPageIndex(currentPath: string) {
    let index = 0;
    allPages.forEach((page) => {
        const doesMatch = matchPath(page.href, currentPath);
        if (doesMatch) {
            index = allPages.indexOf(page);
        } else if (page.children) {
            page.children.forEach((childPage) => {
                const doesMatch = matchPath(childPage.href, currentPath);
                if (doesMatch) {
                    index = allPages.indexOf(page);
                }
            });
        }
    });

    return index;
}

function breadcrumbLinkForPage(page: IPage) {
    return (
        <Link key={page.title} to={page.href} style={{ textDecoration: 'none' }}>
            {page.title}
        </Link>
    );
}

export function breadcrumbsForPage(index: number, currentPath: string) {
    const selectedPage = allPages[index];
    const home = allPages[0];
    const breadcrumbs = [
        breadcrumbLinkForPage(home)
    ];

    if (selectedPage.href !== home.href) {
        breadcrumbs.push(breadcrumbLinkForPage(selectedPage));
    }

    if (selectedPage.href !== currentPath && selectedPage.children) {
        selectedPage.children.forEach((childPage) => {
            if (childPage.href === currentPath) {
                breadcrumbs.push(breadcrumbLinkForPage(childPage));
            }
        });
    }

    return breadcrumbs;
}
