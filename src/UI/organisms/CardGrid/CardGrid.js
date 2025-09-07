'use client'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const cards = Array.from({ length: 4 }, (_, i) => `Card ${i + 1}`)
const cols = { xs: 1, sm: 2, md: 4, lg: 5, xl: 6 }
export const CardGrid = () => {
    return (
        <Box sx={{ m: 4, mt: 2, p: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant='h1' component='h1' sx={{ fontSize: theme => theme.typography.h2.fontSize }}>Corporate Banner</Typography>
            <Grid container spacing={2} columns={cols}>
                {cards.map((card) => (
                    <Grid key={card} size={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, }}>
                        <Card sx={{ height: '18vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CardContent>
                                <Typography>{card}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant='h1' component='h1' sx={{ fontSize: theme => theme.typography.h2.fontSize }}>Another Header</Typography>
            <Grid container spacing={2} columns={cols}>
                <Grid key={cards.length} size={cols}>
                    <Card sx={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CardContent sx={{
                            padding: '0!important',
                            width: '100%',
                            height: '100%',
                            '& iframe': { border: '0' }
                        }}>
                            {/* <ReactPlayer
                                src={`https://www.youtube.com/watch?v=mPaCnwpFvZY`}
                                width='100%'
                                height='100%'
                                controls
                                config={{
                                    youtube: {
                                        playerVars: {
                                            origin: 'https://www.youtube.com/',
                                        },
                                    },
                                }}
                            /> */}
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mPaCnwpFvZY" title="TanStack Query - How to become a React Query God" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
export default CardGrid