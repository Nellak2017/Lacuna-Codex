import { Box, styled } from '@mui/material'
export const StyledCardGrid = styled(Box)(({ theme }) => ({
    margin: theme.spacing(4), marginTop: theme.spacing(2), padding: theme.spacing(2),
    display: 'flex', flexDirection: 'column', gap: theme.spacing(3),
}))
