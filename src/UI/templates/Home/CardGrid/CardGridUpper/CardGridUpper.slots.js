import { Grid } from '@mui/material'
import { cols as myCols, infoCardSize as myInfoCardSize, spacing as mySpacing, } from '../../../../../Core/components/organisms/CardGrid/CardGrid.constants'

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
            </Grid>
            /*
                    <CardContent sx={theme => ({
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 2,
                        width: '100%',
                        height: '60%',
                        [theme.breakpoints.down('lg')]: {
                            height: '100%',
                        },
                        [theme.breakpoints.down('xxl')]: {
                            height: '75%',
                        },
                        padding: '0!important',
                    })}>
                        <Typography variant={'h2'} sx={theme => ({
                            lineHeight: 'inherit',
                            fontSize: theme.typography.h3.fontSize,
                            backgroundColor: `${theme.palette.background.default}`,
                            padding: '0.2rem 0.4rem',
                            borderRadius: 1,
                            display: 'inline-block'
                        })}>{card.title}</Typography>
                        <Typography sx={theme => ({
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1,
                            [theme.breakpoints.up('xs')]: { WebkitLineClamp: 5, },
                            [theme.breakpoints.up('sm')]: { WebkitLineClamp: 3, },
                            [theme.breakpoints.up('md')]: { WebkitLineClamp: 2, },
                            [theme.breakpoints.up('lg')]: { WebkitLineClamp: 4, },
                            [theme.breakpoints.up('xl')]: { WebkitLineClamp: 6, },
                            [theme.breakpoints.up('xxl')]: { WebkitLineClamp: 4, },
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: theme.typography.subtitle2.fontSize,

                            backgroundColor: `${theme.palette.background.default}`,
                            padding: '0.2rem 0.4rem',
                            borderRadius: 1,
                        })}>
                            {card.description}
                        </Typography>
                    </CardContent>
            */
        ))}
    </Grid>)