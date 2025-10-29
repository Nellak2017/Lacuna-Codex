import { styled, Drawer, } from '@mui/material'
import { drawerWidth, collapsedWidth } from '../../../Core/components/organisms/SideNav/SideNav.constants'

export const StyledDrawer = styled(Drawer, { shouldForwardProp: prop => prop !== 'open', })(({ theme, open, maxWidth = drawerWidth, minWidth = collapsedWidth }) => ({
    width: open ? maxWidth : minWidth, display: 'block', flexShrink: 0,
    [theme.breakpoints.down('md')]: { display: 'none', },
    '& .MuiDrawer-paper': { width: open ? maxWidth : minWidth, boxSizing: 'border-box', transition: 'width 0.3s', overflowY: 'auto', position: 'inherit', },
}))