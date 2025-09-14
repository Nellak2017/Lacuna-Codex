import { CardGridLower } from './CardGridLower.js'
import { theme, lightTheme } from '../../../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const CardGridLowerStories = {
    title: 'Templates/Home/CardGrid/CardGridLower/CardGridLower',
    component: CardGridLower,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><CardGridLower {...args} /></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><CardGridLower {...args} /></MUIThemeProvider>
export const Light = LightTemplate.bind({})
Light.args = {  }
export const Dark = DarkTemplate.bind({})
Dark.args = {  }
export default CardGridLowerStories