import { createSlice } from '@reduxjs/toolkit'
import { VALID_TOGGLE_IDS } from '../../shared/validIDs'
import { SIDE_NAV_DEFAULT_TOGGLE_STATE } from '../../../Core/components/organisms/SideNav/SideNav.constants'
const toggle = createSlice({
    name: 'toggle',
    initialState: { [VALID_TOGGLE_IDS.SIDE_NAV_ID]: { toggleState: SIDE_NAV_DEFAULT_TOGGLE_STATE } },
    reducers: {
        toggleState: (state, action) => {
            const { id } = action.payload
            if (Object.values(VALID_TOGGLE_IDS).includes(id)) { state[id].toggleState = !state[id].toggleState }
        }
    }
})
export const { toggleState } = toggle.actions
export default toggle.reducer