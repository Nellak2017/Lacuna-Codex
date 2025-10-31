import { StyledNav, ContentContainer } from './Nav.elements'
import { TopNavContent, LeftNavContent, RightNavContent } from './Nav.slots'

const DefaultChildren = (<>
    <TopNavContent />
    <ContentContainer sx={{ flexDirection: 'row' }}>
        <LeftNavContent /><RightNavContent />
    </ContentContainer>
</>)
export const Nav = ({ children = DefaultChildren }) => (<StyledNav aria-label='Main navigation'><ContentContainer>{children}</ContentContainer></StyledNav>)
export default Nav