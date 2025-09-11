import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import CustomPlayer from '../../molecules/CustomPlayer/CustomPlayer'

const cards = Array.from({ length: 4 }, (_, i) => `Card ${i + 1}`)
const cols = { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }
const testCols = { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }
export const CardGrid = () => {
    return (
        <Box sx={{ m: 4, mt: 2, p: 2, height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant='h1' component='h1' sx={{ fontSize: theme => theme.typography.h3.fontSize }}>Corporate Banner</Typography>
            <Grid container spacing={2} columns={cols}>
                {cards.map((card) => (
                    <Grid key={card} size={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, }}>
                        <Card sx={{ aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CardContent>
                                <Typography>{card}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant='h1' component='h1' sx={{ fontSize: theme => theme.typography.h3.fontSize }}>Another Header</Typography>
            <Grid container spacing={2} columns={cols} sx={{ height: '100%' }}>
                <Grid key={cards.length} size={testCols} sx={{ mb: 4 }}>
                    <Card sx={{ minHeight: '20vh', maxHeight: '40vh', maxWidth: '75vw', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CardContent sx={{ padding: '0!important', height: '100%', width: '100%', }}>
                            <CustomPlayer src={'https://www.youtube-nocookie.com/watch?v=mPaCnwpFvZY'} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
export default CardGrid