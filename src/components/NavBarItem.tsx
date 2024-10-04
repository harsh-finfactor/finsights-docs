import React, { useEffect, useState } from 'react';
import { Collapse, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { IPage } from '../models/Page';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface IProps {
    selectedPageIndex: number;
    currentPageIndex: number;
    setSelectedIndex: (_: number) => void;
    page: IPage;
}

interface IMenuItemRootProps {
    open: boolean;
    setOpen: (_: boolean) => void;
    isChildSelected: boolean;
    setSelectedChildIndex: (_: number) => void;
    isExpandable: boolean;
}

interface IMenuItemChildProps {
    open: boolean;
    selectedChildIndex: number;
    setSelectedChildIndex: (_: number) => void;
}

interface IMenuItemProps {
    item: IPage;
    bold: boolean;
    isChild: boolean;
    isSelected: boolean;
    currentPageIndex: number;
    handleClick: (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
    enableExpandable: boolean;
    isExpandable?: boolean;
    open?: boolean;
}

function MenuItem(props: IMenuItemProps) {
    const {
        item,
        bold,
        isChild,
        isSelected,
        currentPageIndex,
        handleClick,
        enableExpandable,
        isExpandable = false,
        open = false
    } = props;
    const navigate = useNavigate();
    return (
        <ListItemButton
            selected={isSelected}
            onClick={(event) => {
                navigate(item.href);
                handleClick(event, currentPageIndex);
            }}
            sx={{
                "&.Mui-selected": {
                    backgroundColor: "#4D2FA333",
                    ":hover": {
                        backgroundColor: "#4D2FA333"
                    }
                }
            }}
        >
            <ListItemText sx={{
                marginLeft: isChild ? 3 : 0
            }}>
                <Typography fontWeight={bold ? "bold" : undefined}>
                    {item.title}
                </Typography>
            </ListItemText>
            {enableExpandable && (
                <>
                    {isExpandable && !open && <ChevronRightIcon />}
                    {isExpandable && open && <ExpandMoreIcon />}
                </>
            )}
        </ListItemButton>
    );
}

function MenuItemRoot(props: IProps & IMenuItemRootProps) {
    const {
        page,
        selectedPageIndex,
        currentPageIndex,
        setSelectedIndex,
        setOpen,
        open,
        isChildSelected,
        setSelectedChildIndex,
        isExpandable
    } = props;

    const handleListItemClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
        setSelectedChildIndex(-1);
    };

    useEffect(() => {
        if (selectedPageIndex !== currentPageIndex) {
            setSelectedChildIndex(-1);
            setOpen(false);
        }
    }, [selectedPageIndex, currentPageIndex, setSelectedChildIndex, setOpen]);

    const isCurrentPageSelected = (selectedPageIndex === currentPageIndex);

    return (
        <ListItem
            key={page.title}
            disablePadding
            onClick={() => {
                setOpen(!open);
                setSelectedChildIndex(-1);
            }}
        >
            <MenuItem
                item={page}
                bold={isCurrentPageSelected}
                isChild={false}
                isSelected={isChildSelected ? false : isCurrentPageSelected}
                currentPageIndex={currentPageIndex}
                handleClick={handleListItemClick}
                enableExpandable={true}
                isExpandable={isExpandable}
                open={open}
            />
        </ListItem>
    );
}

function MenuItemChildren(props: IProps & IMenuItemChildProps) {
    const {
        open,
        page,
        selectedChildIndex,
        setSelectedChildIndex
    } = props;
    const handleListItemClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedChildIndex(index);
    };
    return (
        <Collapse in={open} unmountOnExit>
            <List disablePadding>
                {page.children?.map((childPage, index) => (
                    <ListItem disablePadding key={childPage.title}>
                        <MenuItem
                            bold={selectedChildIndex === index}
                            isChild={true}
                            item={childPage}
                            isSelected={selectedChildIndex === index}
                            currentPageIndex={index}
                            handleClick={handleListItemClick}
                            enableExpandable={false}
                        />
                    </ListItem>
                ))}
            </List>
        </Collapse>
    );
}

function getDefaultChildSelectedIndex(page: IPage, isCurrentPageSelected: boolean, currentPath: string) {
    let defaultChildSelectedIndex = -1;
    if (isCurrentPageSelected) {
        if (page.href !== currentPath && page.children) {
            page.children.forEach((childPage, index) => {
                if (childPage.href === currentPath) {
                    defaultChildSelectedIndex = index;
                }
            });
        }
    }
    return defaultChildSelectedIndex;
}

export default function NavBarItem(props: IProps) {
    const { page, selectedPageIndex, currentPageIndex } = props;

    let location = useLocation();

    const isCurrentPageSelected = selectedPageIndex === currentPageIndex;
    const [open, setOpen] = useState(isCurrentPageSelected);

    let defaultChildSelectedIndex = getDefaultChildSelectedIndex(page, isCurrentPageSelected, location.pathname);
    const [selectedChildIndex, setSelectedChildIndex] = useState(defaultChildSelectedIndex);

    const isExpandable = (page.children && page.children?.length > 0) || false;

    return (
        <>
            <MenuItemRoot
                {...props}
                open={open}
                setOpen={setOpen}
                isChildSelected={selectedChildIndex !== -1}
                setSelectedChildIndex={setSelectedChildIndex}
                isExpandable={isExpandable}
            />
            {isExpandable ?
                <MenuItemChildren
                    {...props}
                    open={open}
                    selectedChildIndex={selectedChildIndex}
                    setSelectedChildIndex={setSelectedChildIndex}
                /> : null}
        </>
    );
}