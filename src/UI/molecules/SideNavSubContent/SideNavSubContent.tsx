import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { NavItemUI } from '../../../Core/components/organisms/SideNav/SideNav.types'
type SideNavSubContentProps = { state?: { item?: NavItemUI, open?: boolean, openDropdowns?: Record<string, boolean>, } }
export const SideNavSubContent = ({ state: { item, open, openDropdowns } = {} }: SideNavSubContentProps) => (
    <Collapse in={openDropdowns?.[item?.text]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {item?.subItems?.map(sub => (
                <ListItemButton key={sub?.text} sx={{ pl: 4 }}>
                    {open && (<ListItemText primary={sub?.text} secondary={sub?.description} />)}
                </ListItemButton>
            ))}
        </List>
    </Collapse>
)