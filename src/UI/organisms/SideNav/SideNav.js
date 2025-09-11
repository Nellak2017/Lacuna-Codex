import Link from 'next/link'
import Image from 'next/image'
import { List, Typography, Divider, IconButton, } from '@mui/material'
import { Menu as MenuIcon, } from '@mui/icons-material'
import { useSideNav } from '../../../Application/hooks/Molecules/SideNav/useSideNav'
import { StyledDrawer, TopBox, SideNavItemContainer, SideNavItem } from './SideNav.elements'
import { SideNavContent } from '../../molecules/SideNavContent/SideNavContent'
import { SideNavSubContent} from '../../molecules/SideNavSubContent/SideNavSubContent'

// TODO: Extract the SideNavContent and SideNavDropdownContent into custom molecules for clarity
// TODO: Review the semantic naming conventions to ensure everything has proper nomenclature. see SideNavItemContainer and others
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
                                <SideNavContent state={{ item, open, openDropdowns }} services={{ handleDropdown }} />
                                <SideNavSubContent state={{ item, open, openDropdowns }}/>
                            </SideNavItem>
                        ))}
                    </SideNavItemContainer>
                ))}
            </List>
        </StyledDrawer>
    )
}