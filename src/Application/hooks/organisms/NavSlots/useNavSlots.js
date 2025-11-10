import { useDispatch } from 'react-redux'
import { useSideNav } from '../SideNav/useSideNav'
import { isNavSearchOpen } from '../../../shared/selectors'
import { toggleState } from '../../../entities/toggle/toggle'
import { VALID_TOGGLE_IDS } from '../../../shared/validIDs'
import { useState } from 'react'

export const useNavSlots = () => {
    const dispatch = useDispatch()
    const searchOpen = isNavSearchOpen()
    const { state } = useSideNav() // will fail if local state version (obviously)
    const { open } = state
    const toggleSearchOpen = () => dispatch(toggleState({ id: VALID_TOGGLE_IDS.NAV_SEARCH_ID }))
    const [bellAnchor, setBellAnchor] = useState(null)
    const handleBellClick = e => setBellAnchor(e.currentTarget)
    const handleBellClose = () => setBellAnchor(null)
    const notificationData = [{ key: 'one', to: '', name: 'Notification 1' }, { key: 'two', to: '', name: 'Notification 2' }, { key: 'three', to: '', name: 'Notification 3' },]
    return {
        state: { open, bellNotification: false, searchOpen, bellAnchor, notificationData },
        services: { toggleSearchOpen, handleBellClick, handleBellClose },
    }
}