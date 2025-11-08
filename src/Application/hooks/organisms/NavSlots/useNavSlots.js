import { useSideNav } from '../SideNav/useSideNav'

export const useNavSlots = () => {
    const { state } = useSideNav() // will fail if local state version (obviously)
    const { open } = state 
    return {
        state: { open, bellNotification: false },
        services: {},
    }    
}