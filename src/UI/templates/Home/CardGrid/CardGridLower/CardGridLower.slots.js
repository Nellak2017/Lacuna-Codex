import { Grid, CardContent } from '@mui/material'
import { cols as myCols, spacing as mySpacing, } from '../../../../../Core/components/molecules/CardGrid/CardGrid.constants'
import { StyledMediaCard } from './CardGridLower.elements'
import CustomPlayer from '../../../../molecules/CustomPlayer/CustomPlayer'
export const CustomMediaSlot = ({ src, cols = myCols, spacing = mySpacing }) => (
    <Grid container spacing={spacing} columns={cols} sx={{ height: '100%' }}>
        <Grid size={cols} sx={{ mb: 4 }}>
            <StyledMediaCard>
                <CardContent sx={{ padding: '0!important', height: '100%', width: '100%', }}><CustomPlayer src={src} /></CardContent>
            </StyledMediaCard>
        </Grid>
    </Grid>)