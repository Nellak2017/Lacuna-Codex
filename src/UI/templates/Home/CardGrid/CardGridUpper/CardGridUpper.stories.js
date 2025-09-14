import { CardGridUpper } from './CardGridUpper.js'
import { theme, lightTheme } from '../../../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const CardGridUpperStories = {
    title: 'Templates/Home/CardGrid/CardGridUpper/CardGridUpper',
    component: CardGridUpper,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><CardGridUpper {...args} /></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><CardGridUpper {...args} /></MUIThemeProvider>
export const Light = LightTemplate.bind({})
Light.args = {}
export const Dark = DarkTemplate.bind({})
Dark.args = {}
export default CardGridUpperStories