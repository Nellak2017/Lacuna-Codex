import Image from 'next/image'
import { Grid, CardContent, Typography } from '@mui/material'
import { cols as myCols, infoCardSize as myInfoCardSize, spacing as mySpacing, } from '../../../../../Core/components/organisms/CardGrid/CardGrid.constants'
import { StyledNewsCard } from './CardGridUpper.elements'
export const NewsSlot = ({ cards, cols = myCols, infoCardSize = myInfoCardSize, spacing = mySpacing }) => (
    <Grid container spacing={spacing} columns={cols}>
        {cards?.map(card => (
            <Grid key={card.title} size={infoCardSize}>
                <StyledNewsCard sx={theme => ({
                    position: 'relative', overflow: 'hidden', cursor: 'pointer',
                    transition: theme.transitions.create('box-shadow', { duration: theme.transitions.duration.short, }),
                    boxShadow: theme.shadows[1],
                    '&:hover': { boxShadow: theme.shadows[6], },
                })}>
                    {card?.src && (
                        <Image
                            src={card.src}
                            alt={card.title}
                            fill
                            style={{ objectFit: 'cover', zIndex: 0 }}
                            priority={true}
                            sizes="(max-width: 600px) 100vw,
                                   (max-width: 1200px) 50vw,
                                   33vw"
                        />
                    )}
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
                </StyledNewsCard>
            </Grid>
        ))}
    </Grid>)