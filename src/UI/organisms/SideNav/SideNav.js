import Link from 'next/link'
import Image from 'next/image'
import { List, Typography, Divider, IconButton, Box } from '@mui/material'
import { Menu as MenuIcon, } from '@mui/icons-material'
import { useSideNav } from '../../../Application/hooks/molecules/SideNav/useSideNav'
import { StyledDrawer, } from './SideNav.elements'
import { SideNavContent, SideNavSubContent } from './SideNav.slots'
import { MusicPlayer } from '../../molecules/MusicPlayer/MusicPlayer'

export const SideNav = ({ customHook = useSideNav }) => {
    const { state, services } = customHook?.() || {}
    const { sampleNav, open, openDropdowns, imgTitle, imgSource, imgAlt, } = state || {}
    const { handleOpen, handleDropdown } = services || {}
    return (
        <StyledDrawer variant='permanent' open={open}>
            <Box aria-label='TopBox' open={open} display='flex' alignItems='center' justifyContent={open ? 'space-between' : 'center'} sx={{ p: 1, px: 2 }}>
                {open && <Link href={'/'} tabIndex={0}><Image width={64} height={64} src={imgSource} alt={imgAlt} title={imgTitle} aria-label={imgTitle} /></Link>}
                <IconButton onClick={handleOpen} title='Collapse or Open Sidebar'><MenuIcon /></IconButton>
            </Box>
            <Divider />
            <List>
                {sampleNav.map(header => (
                    <Box aria-label='SideNavItemContainer' key={header.title} component='li' sx={{ mb: 1 }}>
                        {open && (<Typography variant='subtitle2' sx={{ p: 2, color: 'text.secondary' }}>{header.title}</Typography>)}
                        {header.items.map(item => (
                            <Box aria-label='SideNavItem' key={item.text}>
                                <SideNavContent state={{ item, open, openDropdowns }} services={{ handleClick: handleDropdown }} />
                                <SideNavSubContent state={{ item, open, openDropdowns }} /*TODO: Add services here */ />
                            </Box>
                        ))}
                    </Box>
                ))}
            </List>
            {<Box sx={{ display: open ? 'inherit' : 'none' }}><MusicPlayer /></Box>}
        </StyledDrawer>
    )
}