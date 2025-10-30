import { ListItemButton, ListItemIcon, ListItemText, Collapse, List, } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { NavItemUI } from '../../../Core/components/organisms/SideNav/SideNav.types'

type GeneralSideNavItemProps = { state: { item: NavItemUI, open: boolean, openDropdowns: Record<string, boolean> }, services?: { handleClick?: (id: string) => void }}
export const SideNavContent = ({ state: { item, open, openDropdowns, }, services: { handleClick } = {} }: GeneralSideNavItemProps) => (
    <ListItemButton onClick={() => item.subItems && handleClick?.(item.text)} sx={{ pl: 2 }}>
        <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>{item.icon}</ListItemIcon>
        {open && (<ListItemText primary={item.text} secondary={item.description} slotProps={{ primary: { variant: 'h3' }, }} sx={{ ml: 2 }} />)}
        {item.subItems && open && (openDropdowns[item?.text] ? <ExpandLess /> : <ExpandMore />)}
    </ListItemButton>
)
export const SideNavSubContent = ({ state: { item, open, openDropdowns, }, services: { handleClick } = {} }: GeneralSideNavItemProps) => (
    <Collapse in={openDropdowns?.[item?.text]} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
            {item?.subItems?.map(sub => (
                <ListItemButton key={sub?.text} sx={{ pl: 4 }} onClick={() => handleClick?.(item.text)}>
                    {open && (<ListItemText primary={sub?.text} secondary={sub?.description} slotProps={{ primary: { variant: 'h4' }, }} />)}
                </ListItemButton>
            ))}
        </List>
    </Collapse>
)