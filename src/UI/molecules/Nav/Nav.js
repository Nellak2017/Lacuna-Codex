import { LeftContent, RightContent, DefaultContainer } from './Nav.slots'

export const Nav = ({ slots: { left = <LeftContent />, right = <RightContent />, container: Container = DefaultContainer } = {} }) => (
	<Container left={left} right={right} />
)
export default Nav