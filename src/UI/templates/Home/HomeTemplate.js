import Nav from '../../molecules/Nav/Nav.js'
import { SideNav } from '../../organisms/SideNav/SideNav.js'
import { Root, MainContent } from './HomeTemplate.elements.js'
import dynamic from 'next/dynamic.js'
import { CardGridUpper } from './CardGrid/CardGridUpper/CardGridUpper.js'
const CardGridLower = dynamic(() => import('./CardGrid/CardGridLower/CardGridLower.js'), { ssr: false })
export const HomeTemplate = () => (
  <Root>
    <SideNav />
    <MainContent><Nav /><CardGridUpper /><CardGridLower /></MainContent>
  </Root>)
export default HomeTemplate