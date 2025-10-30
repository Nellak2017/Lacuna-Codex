import { Grid } from '@mui/material'
import { cols as myCols, infoCardSize as myInfoCardSize, spacing as mySpacing, } from '../../../../../Core/components/molecules/CardGrid/CardGrid.constants'
import { ThumbnailCard } from '../../../../molecules/ThumbnailCard/ThumbnailCard'
import { LeftThumbnailCardSlot, RightThumbnailCardSlot } from '../../../../molecules/ThumbnailCard/ThumbnailCard.slots'
export const NewsSlot = ({ cards, cols = myCols, infoCardSize = myInfoCardSize, spacing = mySpacing }) => (
    <Grid container spacing={spacing} columns={cols}>
        {cards?.map(({ thumbnail, thumbnailAlt, avatar, avatarAlt, category, title, subtitle, info }) => (
            <Grid key={title} size={infoCardSize}>
                <ThumbnailCard>
                    <LeftThumbnailCardSlot state={{ thumbnail, thumbnailAlt }} />
                    <RightThumbnailCardSlot state={{ avatar, avatarAlt, category, title, subtitle, info }} />
                </ThumbnailCard>
            </Grid>))}
    </Grid>)