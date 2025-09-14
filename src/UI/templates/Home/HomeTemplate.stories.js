import { HomeTemplate } from './HomeTemplate'
import { theme, lightTheme } from '../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const HomeTemplateStories = {
    title: 'Templates/Home/HomeTemplate',
    component: HomeTemplate,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><HomeTemplate {...args} /></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><HomeTemplate {...args} /></MUIThemeProvider>
export const Light = LightTemplate.bind({})
Light.args = {}
export const Dark = DarkTemplate.bind({})
Dark.args = {}
export default HomeTemplateStories