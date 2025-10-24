import { ThumbnailCard } from './ThumbnailCard'
import { ExpandMore } from '@mui/icons-material'
const ThumbnailCardStories = {
    title: 'Molecules/ThumbnailCard',
    component: ThumbnailCard,
    argTypes: {},
}
const Template = args => <ThumbnailCard {...args} />
const item = { text: 'Header', description: 'Description', icon: <ExpandMore /> }
const openDropdowns = {}
export const Light = Template.bind({})
Light.args = { state: { item, open: false, openDropdowns, } }
export const Dark = Template.bind({})
Dark.args = { state: { item, open: true, openDropdowns, } }
export default ThumbnailCardStories