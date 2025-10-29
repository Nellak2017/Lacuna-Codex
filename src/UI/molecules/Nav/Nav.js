import { StyledNav, ContentContainer } from './Nav.elements'
import { LeftNavContent, RightNavContent } from './Nav.slots'

export const Nav = ({ children = <><LeftNavContent /><RightNavContent /></> }) => (<StyledNav aria-label='Main navigation'><ContentContainer>{children}</ContentContainer></StyledNav>)
export default Nav