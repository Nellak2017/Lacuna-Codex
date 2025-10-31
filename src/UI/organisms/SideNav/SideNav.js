import Link from 'next/link'
import Image from 'next/image'
import { List, Typography, Divider, IconButton, Box, Tooltip } from '@mui/material'
import { Menu as MenuIcon, } from '@mui/icons-material'
import { useSideNav } from '../../../Application/hooks/organisms/SideNav/useSideNav'
import { StyledDrawer, } from './SideNav.elements'
import { SideNavContent, SideNavSubContent } from './SideNav.slots'
import { MusicPlayer } from '../../organisms/MusicPlayer/MusicPlayer'
// NOTE: SideNav does not use hole/slot architecture. It hard codes the slots due to the slots being terminal. I chose to leave it be for now since there isn't much advantage to making it fit that form yet.
export const SideNav = ({ customHook = useSideNav }) => {
    const { state, services } = customHook?.() || {}
    const { sampleNav, open, openDropdowns, imgTitle, imgSource, imgAlt, } = state || {}
    const { handleOpen, handleDropdown } = services || {}
    return (
        <StyledDrawer variant='permanent' open={open} component='nav' aria-label='Main navigation sidebar'>
            <Box component='header' open={open} display='flex' alignItems='center' justifyContent={open ? 'space-between' : 'center'} sx={{ p: 1, px: 2 }}>
                <Tooltip title='Collapse or Open Sidebar'><IconButton onClick={handleOpen} aria-label='Toggle sidebar'><MenuIcon /></IconButton></Tooltip>
                {open && <Tooltip title={imgTitle}><Link href={'/'} tabIndex={0}><Image width={64} height={64} src={imgSource} alt={imgAlt} aria-label={imgTitle} /></Link></Tooltip>}
            </Box>
            <Divider />
            <List>
                {sampleNav.map(header => (
                    <Box key={header.title} component='li' sx={{ mb: 1 }}>
                        {open && (<Typography variant='subtitle2' component='h2' sx={{ p: 2, color: 'text.secondary' }}>{header.title}</Typography>)}
                        <List disablePadding>
                            {header.items.map(item => (
                                <Box key={item.text} component='li'>
                                    <SideNavContent state={{ item, open, openDropdowns }} services={{ handleClick: handleDropdown }} />
                                    <SideNavSubContent state={{ item, open, openDropdowns }} /*TODO: Add services here */ />
                                </Box>
                            ))}
                        </List>
                    </Box>
                ))}
            </List>
            {open && (<Typography variant='subtitle2' component='h2' sx={{ p: 2, color: 'text.secondary' }}>{'Music Player'}</Typography>)}{/* Warning: Slight DRY violation here */}
            {<Box component='aside' sx={{ display: open ? 'inherit' : 'none' }} aria-label='Music player section'><MusicPlayer /></Box>}
        </StyledDrawer>
    )
}