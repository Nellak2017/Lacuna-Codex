import { StyledNav, ContentContainer } from './Nav.elements'
import { TopNavContent, LeftNavContent, MiddleNavContent, RightNavContent } from './Nav.slots'

const DefaultChildren = (<>
    <TopNavContent />
    <ContentContainer sx={{ flexDirection: 'row', flexWrap:'nowrap', }}>
        <LeftNavContent /><MiddleNavContent /><RightNavContent />
    </ContentContainer>
</>)
export const Nav = ({ children = DefaultChildren }) => (<StyledNav aria-label='Main navigation'><ContentContainer>{children}</ContentContainer></StyledNav>)
export default Nav