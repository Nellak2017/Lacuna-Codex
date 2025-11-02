import { useSelector } from 'react-redux'
import { tryCatchSyncFlat } from '../../Core/shared/global.domain'
export const isSideNavOpen = (selector = useSelector) => tryCatchSyncFlat(() => selector(state => state?.toggle?.sideNav?.toggleState), () => true)