import { styled } from '@mui/material'

export const StyledNav = styled('nav')(({ theme }) => ({
    margin: '0', padding: `0 ${theme.spacing(2)}`, position: 'sticky', top: '0', zIndex: '999',
    display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: theme.shadows[1],
    backgroundColor: `${theme.palette.grey[300]}80`, backdropFilter: 'blur(48px)', // background and backdrop filter mimiced from youtube
}))
export const ContentContainer = styled('section')(({ theme }) => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly', columnGap: theme.spacing(2), maxWidth: '1290px', width: '100%',})) // This is to make the spacing proper even for large desktops