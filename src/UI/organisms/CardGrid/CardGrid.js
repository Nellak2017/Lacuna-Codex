'use client'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

import CustomPlayer from '../../molecules/CustomPlayer/CustomPlayer'

const cards = Array.from({ length: 4 }, (_, i) => `Card ${i + 1}`)
const cols = { xs: 1, sm: 2, md: 4, lg: 5, xl: 6 }
const testCols = { xs: 1, sm: 2, md: 4, lg: 5, xl: 6 }
export const CardGrid = () => {
    return (
        <Box sx={{ m: 4, mt: 2, p: 2, height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
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
            <Grid container spacing={2} columns={cols} sx={{ height: '100%' }}>
                <Grid key={cards.length} size={testCols}>
                    <Card sx={{ minHeight: '20vh', maxHeight: '50vh', maxWidth: '75vw', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CardContent sx={{
                            padding: '0!important',
                            height: '100%',
                            width: '100%',
                            // aspectRatio: '16/9',
                        }}>
                            <CustomPlayer src={'https://www.youtube-nocookie.com/watch?v=mPaCnwpFvZY'}/>
                            {/* <ReactPlayer
                                src='https://www.youtube-nocookie.com/watch?v=mPaCnwpFvZY'
                                width='100%'
                                height='100%'
                                config={{
                                    youtube: {
                                        playerVars: { modestbranding: 1, rel: 0 },
                                    },
                                }}
                            /> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
export default CardGrid