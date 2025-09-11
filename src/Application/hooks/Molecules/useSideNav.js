import { useState } from 'react'
import { imgTitle, imgSource, imgAlt, sampleNav, drawerWidth, collapsedWidth } from '../../../Core/constants/molecules/sideNav.constants'

// Hooks act as focus points, not source of truth generally. This is why you have constants elsewhere
export const useSideNav = () => {
    const [open, setOpen] = useState(true)
    const [openDropdowns, setOpenDropdowns] = useState({})
    const handleDropdown = text => setOpenDropdowns(prev => ({ ...prev, [text]: !prev[text] }))
    const handleOpen = () => setOpen(!open)
    return {
        state: {
            drawerWidth, collapsedWidth, imgTitle, imgSource, imgAlt, sampleNav,
            open, openDropdowns,
        },
        services: { handleOpen, handleDropdown, }
    }
}