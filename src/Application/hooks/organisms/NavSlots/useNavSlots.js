import { useDispatch } from 'react-redux'
import { useSideNav } from '../SideNav/useSideNav'
import { isNavSearchOpen } from '../../../shared/selectors'
import { toggleState } from '../../../entities/toggle/toggle'
import { VALID_TOGGLE_IDS } from '../../../shared/validIDs'

export const useNavSlots = () => {
    const dispatch = useDispatch()
    const searchOpen = isNavSearchOpen()
    const { state } = useSideNav() // will fail if local state version (obviously)
    const { open } = state
    const toggleSearchOpen = () => dispatch(toggleState({ id: VALID_TOGGLE_IDS.NAV_SEARCH_ID }))
    return {
        state: { open, bellNotification: false, searchOpen },
        services: { toggleSearchOpen },
    }
}