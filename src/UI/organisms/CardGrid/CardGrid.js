import { Typography } from '@mui/material'
import { StyledCardGrid } from './CardGrid.elements.js'
export const CardGrid = ({ state: { header = 'Corporate Banner' } = {}, children, ...rest }) => (
    <StyledCardGrid {...rest}>
        <Typography variant='h1' component='h1' sx={{ fontSize: theme => theme.typography.h3.fontSize }}>{header}</Typography>
        {children}
    </StyledCardGrid>
)
export default CardGrid