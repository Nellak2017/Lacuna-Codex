import { SideNav } from './SideNav'
import { theme, lightTheme } from '../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const SideNavStories = {
    title: 'Organisms/SideNav',
    component: SideNav,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><SideNav {...args}/></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><SideNav {...args} /></MUIThemeProvider>
export const Light = LightTemplate.bind({})
Light.args = {}
export const Dark = DarkTemplate.bind({})
Dark.args = {}
export default SideNavStories