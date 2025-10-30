import { CardGrid } from './CardGrid.js'
import { theme, lightTheme } from '../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const CardGridStories = {
    title: 'Molecules/CardGrid',
    component: CardGrid,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><CardGrid {...args}><div style={{ border: '1px solid red' }}>Example Child 1</div><div style={{ border: '1px solid red' }}>Example Child 2</div></CardGrid></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><CardGrid {...args}><div style={{ border: '1px solid red' }}>Example Child 1</div><div style={{ border: '1px solid red' }}>Example Child 2</div></CardGrid></MUIThemeProvider>
export const Light = LightTemplate.bind({})
Light.args = {}
export const Dark = DarkTemplate.bind({})
Dark.args = { state: { header: 'Dark Mode' } }
export default CardGridStories