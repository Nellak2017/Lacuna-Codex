import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { imgTitle, imgSource, imgAlt, sampleNav, drawerWidth, collapsedWidth } from '../../../../Core/components/organisms/SideNav/SideNav.constants'
import { SIDE_NAV_DEFAULT_TOGGLE_STATE } from '../../../../Core/components/organisms/SideNav/SideNav.constants'
import { VALID_TOGGLE_IDS } from '../../../shared/validIDs'
import { isSideNavOpen } from '../../../shared/selectors.js'
import { useControllableState } from '../../shared/useControllableState.js'
import { toggleState } from '../../../entities/toggle/toggle.js'

// Hooks act as focus points, not source of truth generally. This is why you have constants elsewhere
export const useSideNav = (options = { useRedux: true }) => {
    const dispatch = useDispatch()
    const globalOpen = isSideNavOpen()
    const [openDropdowns, setOpenDropdowns] = useState({})
    const [open, setOpen] = useControllableState({ value: options.useRedux ? globalOpen : undefined, defaultValue: SIDE_NAV_DEFAULT_TOGGLE_STATE, onChange: () => dispatch(toggleState({ id: VALID_TOGGLE_IDS.SIDE_NAV_ID })) })
    const handleDropdown = text => { if (open) setOpenDropdowns(prev => ({ ...prev, [text]: !prev[text] })) } // open drop down if it is open only
    const handleOpen = () => {
        if (open) setOpenDropdowns({})
        setOpen(prev => !prev)
    }
    return {
        state: { drawerWidth, collapsedWidth, imgTitle, imgSource, imgAlt, sampleNav, open, openDropdowns, },
        services: { handleOpen, handleDropdown, }
    }
}