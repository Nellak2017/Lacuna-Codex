import Nav from '../UI/molecules/Nav/Nav.js'
import { SideNav } from '../UI/molecules/SideNav/SideNav.js'
import { useHomePage } from '../Application/hooks/Pages/HomePage/useHomePage.js'

export const Home = () => {
  const { state, services } = useHomePage?.() || {} // TODO: implement useHomePage hook
  const left = "TODO: implement left component"
  const middle = "TODO: implement middle component"
  const right = "TODO: implement right component"
  return (
    <>
      <Nav />
      <SideNav />
      {/* Implement Footer */}
    </>
  )
}
export default Home