import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Collapse,
    Divider,
    IconButton,
} from "@mui/material"
import {
    ExpandLess,
    ExpandMore,
    Inbox as InboxIcon,
    Mail as MailIcon,
    Menu as MenuIcon,
} from "@mui/icons-material"

const drawerWidth = 240
const collapsedWidth = 60

const sampleNav = [
    {
        title: "New News",
        items: [
            {
                //icon: <InboxIcon />,
                text: "News article one title But overflowing here",
                description: "sub title",
                subItems: [
                    { text: "Project A", description: "Details A" },
                    { text: "Project B", description: "Details B" },
                ],
            },
            {
                //icon: <MailIcon />,
                text: "News article two title",
                description: "sub title",
                subItems: [
                    { text: "Project A", description: "Details A" },
                    { text: "Project B", description: "Details B" },
                ],
            },
            {
                //icon: <MailIcon />,
                text: "News article three title",
                description: "sub title",
                subItems: [
                    { text: "Project A", description: "Details A" },
                    { text: "Project B", description: "Details B" },
                ],
            },
        ],
    },
    {
        title: "Corporate Morale Broadcast",
        items: [
            { icon: <InboxIcon />, text: "Settings", description: "Configure app" },
        ],
    },
]

export const SideNav = () => {
    const [open, setOpen] = useState(true)
    const [openDropdowns, setOpenDropdowns] = useState({})

    const handleDropdown = text => {
        setOpenDropdowns(prev => ({ ...prev, [text]: !prev[text] }))
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: open ? drawerWidth : collapsedWidth,
                height: '100%',
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: open ? drawerWidth : collapsedWidth,
                    boxSizing: "border-box",
                    transition: "width 0.3s",
                    overflowY: "auto",
                    position: 'inherit'
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: open ? "space-between" : "center",
                    px: 2,
                    py: 1,
                }}
            >
                <Typography variant="h6" noWrap>
                    {open &&
                        <Link
                            href={'/'}
                            tabIndex={0}
                        >
                            <Image
                                src={'/Lacuna-Codex-Logo.png'}
                                alt={'Lacuna Codex Logo'}
                                width={64}
                                height={61}
                                title={'TODO: Update title for Lacuna Codex app in the nav'}
                                aria-label={'TODO: Update title for Lacuna Codex app in the nav'}
                            />
                        </Link>
                    }
                </Typography>
                <IconButton onClick={() => setOpen(!open)}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {sampleNav.map((header) => (
                    <Box key={header.title} sx={{ mb: 2 }}>
                        {open && (
                            <Typography
                                variant="subtitle2"
                                sx={{ pl: 2, pt: 1, pb: 1, color: "text.secondary" }}
                            >
                                {header.title}
                            </Typography>
                        )}
                        {header.items.map((item) => (
                            <Box key={item.text}>
                                <ListItemButton
                                    onClick={() => item.subItems && handleDropdown(item.text)}
                                    sx={{ pl: 2 }}
                                >
                                    <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    {open && (
                                        <ListItemText
                                            primary={item.text}
                                            secondary={item.description}
                                            sx={{ ml: 2 }}
                                        />
                                    )}
                                    {item.subItems && open && (
                                        openDropdowns[item.text] ? <ExpandLess /> : <ExpandMore />
                                    )}
                                </ListItemButton>
                                {item.subItems && (
                                    <Collapse in={openDropdowns[item.text]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {item.subItems.map((sub) => (
                                                <ListItemButton key={sub.text} sx={{ pl: 4 }}>
                                                    {open && (
                                                        <ListItemText
                                                            primary={sub.text}
                                                            secondary={sub.description}
                                                        />
                                                    )}
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </Box>
                        ))}
                    </Box>
                ))}
            </List>
        </Drawer>
    )
}