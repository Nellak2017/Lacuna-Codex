import { Grid, CardContent, Typography } from '@mui/material'
import { cols as myCols, infoCardSize as myInfoCardSize, spacing as mySpacing, } from '../../../../../Core/components/organisms/CardGrid/CardGrid.constants'
import { StyledNewsCard } from './CardGridUpper.elements'
export const NewsSlot = ({ cards, cols = myCols, infoCardSize = myInfoCardSize, spacing = mySpacing }) => (
    <Grid container spacing={spacing} columns={cols}>
        {cards?.map(card => (
            <Grid key={card} size={infoCardSize}>
                <StyledNewsCard>
                    <CardContent><Typography>{card}</Typography></CardContent>
                </StyledNewsCard>
            </Grid>
        ))}
    </Grid>)