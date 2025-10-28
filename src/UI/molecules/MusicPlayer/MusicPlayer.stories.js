import { MusicPlayer } from './MusicPlayer.js'
import { theme, lightTheme } from '../../styles/MUITheme.js'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
const MusicPlayerStories = {
    title: 'Molecules/MusicPlayer',
    component: MusicPlayer,
    argTypes: {},
}
const LightTemplate = args => <MUIThemeProvider theme={lightTheme}><MusicPlayer {...args} /></MUIThemeProvider>
const DarkTemplate = args => <MUIThemeProvider theme={theme}><MusicPlayer {...args} /></MUIThemeProvider>

export const Light = LightTemplate.bind({})
Light.args = {}
export const Dark = DarkTemplate.bind({})
Dark.args = {}
export default MusicPlayerStories