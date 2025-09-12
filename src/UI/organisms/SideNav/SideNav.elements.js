import { styled, Drawer, Box } from '@mui/material'
import { drawerWidth, collapsedWidth } from '../../../Core/components/organisms/SideNav/SideNav.constants'

export const StyledDrawer = styled(Drawer, { shouldForwardProp: prop => prop !== 'open', })(({ theme, open, maxWidth = drawerWidth, minWidth = collapsedWidth }) => ({
    width: open ? maxWidth : minWidth, display: 'block', flexShrink: 0,
    [theme.breakpoints.down('md')]: { display: 'none', },
    '& .MuiDrawer-paper': { width: open ? maxWidth : minWidth, boxSizing: 'border-box', transition: 'width 0.3s', overflowY: 'auto', position: 'inherit', },
}))
export const TopBox = styled(Box)(({ theme, open }) => ({
    display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center',
    padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(2)}`,
}))
export const SideNavItemContainer = styled('li')(({ theme }) => ({ marginBottom: theme.spacing(1) }))
export const SideNavItem = styled(Box)(() => ({}))