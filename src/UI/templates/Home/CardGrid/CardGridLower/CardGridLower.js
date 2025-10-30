import { useCardGridLower } from '../../../../../Application/hooks/templates/Home/useCardGridLower'
import CardGrid from '../../../../molecules/CardGrid/CardGrid'
import { CustomMediaSlot } from './CardGridLower.slots'
export const CardGridLower = ({ customHook = useCardGridLower }) => {
    const { state: { src } } = customHook?.() || {}
    return (<CardGrid state={{ header: 'Another Header' }}><CustomMediaSlot src={src} /></CardGrid>)
}
export default CardGridLower