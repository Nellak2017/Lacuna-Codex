import { SideNavSubContent } from './SideNavSubContent'
import { ExpandMore } from '@mui/icons-material'
const SideNavSubContentStories = {
    title: 'Molecules/SideNavSubContent',
    component: SideNavSubContent,
    argTypes: {},
}
const Template = args => <SideNavSubContent {...args} />
const item = { text: 'Header', description: 'Description', icon: <ExpandMore /> }
const openDropdowns = {}
export const Light = Template.bind({})
Light.args = { state: { item, open: false, openDropdowns, } }
export const Dark = Template.bind({})
Dark.args = { state: { item, open: true, openDropdowns, } }
export default SideNavSubContentStories