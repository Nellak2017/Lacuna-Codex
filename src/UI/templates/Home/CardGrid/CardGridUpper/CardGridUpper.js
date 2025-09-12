import { useCardGridUpper } from '../../../../../Application/hooks/templates/Home/useCardGridUpper'
import CardGrid from '../../../../organisms/CardGrid/CardGrid'
import { NewsSlot } from './CardGridUpper.slots'
export const CardGridUpper = ({ customHook = useCardGridUpper }) => {
    const { state: { cards } } = customHook?.() || {}
    return (<CardGrid sx={{ mb: 0 }}><NewsSlot cards={cards} /></CardGrid>)
}