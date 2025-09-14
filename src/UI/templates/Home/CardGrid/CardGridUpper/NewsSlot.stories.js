import { NewsSlot } from './CardGridUpper.slots.js'
import { theme, lightTheme } from '../../../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const NewsSlotStories = {
    title: 'Templates/Home/CardGrid/CardGridUpper/NewsSlot',
    component: NewsSlot,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><NewsSlot {...args} /></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><NewsSlot {...args} /></MUIThemeProvider>
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const cards = [{ title: 'First Card', description: lorem }, { title: 'Second Card', description: lorem }, { title: 'Third Card', description: lorem }, { title: 'Fourth Card', description: lorem }, { title: 'Fifth Card', description: lorem }]
export const Light = LightTemplate.bind({})
Light.args = { cards }
export const Dark = DarkTemplate.bind({})
Dark.args = { cards }
export default NewsSlotStories