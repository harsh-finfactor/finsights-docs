import React, { useEffect, useState } from 'react';
import { Collapse, Divider, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { IPage } from '../models/Page';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IProps {
    page: IPage;
    selectedIndex: number;
    currentIndex: number;
    setSelectedIndex: (_: number) => void;
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
    selectedIndex: number;
    currentIndex: number;
    handleClick: (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
    enableExpandable: boolean;
    isExpandable?: boolean;
    open?: boolean;
}

function MenuItem(props: IMenuItemProps) {
    const {
        item,
        selectedIndex,
        currentIndex,
        handleClick,
        enableExpandable,
        isExpandable = false,
        open = false
    } = props;
    const navigate = useNavigate();
    return (
        <ListItem
            key={item.title}
            disablePadding
        >
            <ListItemButton
                selected={selectedIndex === currentIndex}
                onClick={(event) => {
                    navigate(item.href);
                    handleClick(event, currentIndex);
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
                <ListItemText>
                    <Typography fontWeight="bold">
                        {item.title}
                    </Typography>
                </ListItemText>
                {enableExpandable && (
                    <>
                        {isExpandable && !open && <ExpandMoreIcon />}
                        {isExpandable && open && <ExpandLessIcon />}
                    </>
                )}
            </ListItemButton>
        </ListItem>
    );
}

function MenuItemRoot(props: IProps & IMenuItemRootProps) {
    const {
        page,
        selectedIndex,
        currentIndex,
        setSelectedIndex,
        setOpen,
        open,
        isChildSelected,
        setSelectedChildIndex,
        isExpandable
    } = props;

    const handleListItemClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        if (isChildSelected) {
            setSelectedIndex(-1);
        }
    }, [isChildSelected, setSelectedIndex]);

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
                selectedIndex={isChildSelected ? -1 : selectedIndex}
                currentIndex={currentIndex}
                handleClick={handleListItemClick}
                enableExpandable={true}
                isExpandable={isExpandable}
                open={open}
            />
        </ListItem>
    );
}

function MenuItemChildren(props: IProps & IMenuItemChildProps) {
    const { open, page, selectedChildIndex, setSelectedChildIndex } = props;
    const handleListItemClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedChildIndex(index);
    };
    return (
        <Collapse in={open} unmountOnExit>
            <Divider />
            <ListItem disablePadding key={page.title}>
                {page.children?.map((item, index) => (
                    <MenuItem
                        item={item}
                        selectedIndex={selectedChildIndex}
                        currentIndex={index}
                        handleClick={handleListItemClick}
                        enableExpandable={false}
                    />
                ))}
            </ListItem>
        </Collapse>
    );
}

export default function NavBarItem(props: IProps) {
    const { page } = props;

    const [open, setOpen] = useState(false);
    const isExpandable = (page.children && page.children?.length > 0) || false;
    const [selectedChildIndex, setSelectedChildIndex] = useState(-1);

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