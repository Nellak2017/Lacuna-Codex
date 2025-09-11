import Nav from '../UI/molecules/Nav/Nav.js'
import { SideNav } from '../UI/organisms/SideNav/SideNav.js'
// import { useHomePage } from '../Application/hooks/Pages/HomePage/useHomePage.js'
import { Box } from '@mui/material'
import dynamic from 'next/dynamic.js'

const CardGrid = dynamic(() => import('../UI/organisms/CardGrid/CardGrid.js'), { ssr: false })
export const Home = () => {
  // const { state, services } = useHomePage?.() || {} // TODO: implement useHomePage hook
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', height: '100%' }}>
      <SideNav />
      <Box sx={{ width: '100%', height:'100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <CardGrid />
      </Box>
    </Box>
  )
}
export default Home