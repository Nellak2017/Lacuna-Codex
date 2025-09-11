import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { NavItemUI } from '../../../Core/components/organisms/sideNav.types'
type SideNavContentProps = {state?: { item?: NavItemUI, open?: boolean, openDropdowns?: Record<string, boolean> }, services?: { handleDropdown?: (id: string) => void }}
export const SideNavContent = ({ state: { item, open, openDropdowns, } = {}, services: { handleDropdown } = {} }: SideNavContentProps) => (
    <ListItemButton onClick={() => item?.subItems && handleDropdown?.(item?.text)} sx={{ pl: 2 }}>
        <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>{item?.icon}</ListItemIcon>
        {open && (<ListItemText primary={item?.text} secondary={item?.description} sx={{ ml: 2 }} />)}
        {item?.subItems && open && (openDropdowns?.[item?.text] ? <ExpandLess /> : <ExpandMore />)}
    </ListItemButton>
)