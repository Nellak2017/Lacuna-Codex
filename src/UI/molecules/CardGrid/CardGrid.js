import { Typography } from '@mui/material'
import { StyledCardGrid } from './CardGrid.elements.js'
export const CardGrid = ({ state: { header = 'Corporate Banner' } = {}, children, ...rest }) => (
    <StyledCardGrid {...rest}>
        <Typography component='h1' variant='h3'>{header}</Typography>
        {children}
    </StyledCardGrid>
)
export default CardGrid