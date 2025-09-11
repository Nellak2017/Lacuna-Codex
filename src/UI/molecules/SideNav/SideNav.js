import Link from 'next/link'
import Image from 'next/image'
import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Collapse, Divider, IconButton, } from '@mui/material'
import { ExpandLess, ExpandMore, Menu as MenuIcon, } from '@mui/icons-material'
import { useSideNav } from '../../../Application/hooks/Molecules/useSideNav'
import { StyledDrawer, TopBox, SideNavItemContainer, SideNavItem } from './SideNav.elements'

// TODO: Extract the SideNavContent and SideNavDropdownContent into custom molecules for clarity
export const SideNav = ({ customHook = useSideNav }) => {
    const { state, services } = customHook?.() || {}
    const { sampleNav, open, openDropdowns, imgTitle, imgSource, imgAlt, } = state || {}
    const { handleOpen, handleDropdown } = services || {}
    return (
        <StyledDrawer variant='permanent' open={open}>
            <TopBox open={open}>
                {open && <Link href={'/'} tabIndex={0}><Image width={64} height={61} src={imgSource} alt={imgAlt} title={imgTitle} aria-label={imgTitle} /></Link>}
                <IconButton onClick={handleOpen}><MenuIcon /></IconButton>
            </TopBox>
            <Divider />
            <List>
                {sampleNav.map(header => (
                    <SideNavItemContainer key={header.title}>
                        {open && (<Typography variant='subtitle2' sx={{ p: 2, color: 'text.secondary' }}>{header.title}</Typography>)}
                        {header.items.map(item => (
                            <SideNavItem key={item.text}>
                                <ListItemButton onClick={() => item.subItems && handleDropdown(item.text)} sx={{ pl: 2 }}>
                                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>{item.icon}</ListItemIcon>
                                    {open && (<ListItemText primary={item.text} secondary={item.description} sx={{ ml: 2 }} />)}
                                    {item.subItems && open && (openDropdowns[item.text] ? <ExpandLess /> : <ExpandMore />)}
                                </ListItemButton>
                                {<Collapse in={openDropdowns[item.text]} timeout='auto' unmountOnExit>
                                    <List component='div' disablePadding>
                                        {item?.subItems?.map(sub => (
                                            <ListItemButton key={sub.text} sx={{ pl: 4 }}>
                                                {open && (<ListItemText primary={sub.text} secondary={sub.description} />)}
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>}
                            </SideNavItem>
                        ))}
                    </SideNavItemContainer>
                ))}
            </List>
        </StyledDrawer>
    )
}