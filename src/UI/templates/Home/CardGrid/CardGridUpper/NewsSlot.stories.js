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
const cards = [ // thumbnail, thumbnailAlt, avatar, avatarAlt, category, title, subtitle, info
    { category: 'First Category', title: 'First Card', subtitle: lorem, info: 'User | Apr 3, 2025' },
    { category: 'Second Category', title: 'Second Card', subtitle: lorem, info: 'User | Apr 4, 2025' },
    { category: 'Third Category', title: 'Third Card', subtitle: lorem, info: 'User | Apr 5, 2025' },
    { category: 'Fourth Category', title: 'Fourth Card', subtitle: lorem, info: 'User | Apr 6, 2025' },
    { category: 'Fifth Category', title: 'Fifth Card', subtitle: lorem, info: 'User | Apr 7, 2025' },
]
export const Light = LightTemplate.bind({})
Light.args = { cards }
export const Dark = DarkTemplate.bind({})
Dark.args = { cards }
export default NewsSlotStories