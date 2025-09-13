import { SideNavContent } from './SideNavContent'
import { ExpandMore } from '@mui/icons-material'
import { theme, lightTheme } from '../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const SideNavContentStories = {
    title: 'Molecules/SideNavContent',
    component: SideNavContent,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><SideNavContent {...args} /></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><SideNavContent {...args} /></MUIThemeProvider>
const item = { text: 'Header', description: 'Description', icon: <ExpandMore /> }
const openDropdowns = {}
export const Light = LightTemplate.bind({})
Light.args = { state: { item, open: false, openDropdowns, } }
export const Dark = DarkTemplate.bind({})
Dark.args = { state: { item, open: true, openDropdowns, } }
export default SideNavContentStories