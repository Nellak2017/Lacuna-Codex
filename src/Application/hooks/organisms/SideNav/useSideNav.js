import { useState } from 'react'
import { imgTitle, imgSource, imgAlt, sampleNav, drawerWidth, collapsedWidth } from '../../../../Core/components/organisms/SideNav/SideNav.constants'

// Hooks act as focus points, not source of truth generally. This is why you have constants elsewhere
export const useSideNav = () => {
    const [open, setOpen] = useState(true)
    const [openDropdowns, setOpenDropdowns] = useState({})
    const handleDropdown = text => { if (open) setOpenDropdowns(prev => ({ ...prev, [text]: !prev[text] })) } // open drop down if it is open only
    const handleOpen = () => setOpen(prev => { // open and close and close all dropdowns if closing 
        if (prev) setOpenDropdowns({})
        return !prev
    })
    return {
        state: { drawerWidth, collapsedWidth, imgTitle, imgSource, imgAlt, sampleNav, open, openDropdowns, },
        services: { handleOpen, handleDropdown, }
    }
}