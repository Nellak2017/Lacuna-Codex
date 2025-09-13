import CustomPlayer from './CustomPlayer.js'

const CustomPlayerStories = {
    title: 'Molecules/CustomPlayer',
    component: CustomPlayer,
    argTypes: {},
}
const Template = args => <CustomPlayer {...args} />
export const Light = Template.bind({})
Light.args = { src: 'https://www.youtube-nocookie.com/watch?v=mPaCnwpFvZY' }
export const Dark = Template.bind({})
Dark.args = { src: 'https://www.youtube-nocookie.com/watch?v=mPaCnwpFvZY' }
export default CustomPlayerStories