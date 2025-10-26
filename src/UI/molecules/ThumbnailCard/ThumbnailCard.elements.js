import { Card, Typography, styled } from '@mui/material'
export const StyledThumbnailCard = styled(Card)(({ theme }) => ({
    maxHeight: '320px', padding: `0 ${theme.spacing(4)}`, aspectRatio: '16/9',
    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', columnGap: `${theme.spacing(4)}`,
    [theme.breakpoints.down(360)]: { padding: 0 },
    [theme.breakpoints.up(360)]: { padding: `${theme.spacing(2)}`, columnGap: `${theme.spacing(2)}`},
    [theme.breakpoints.up(600)]: { padding: `${theme.spacing(2)}`, columnGap: `${theme.spacing(2)}`},
    [theme.breakpoints.up(900)]: { padding: `${theme.spacing(2)}`, columnGap: `${theme.spacing(4)}`},
    [theme.breakpoints.up(1100)]: { columnGap: `${theme.spacing(2)}`},
}))

export const StyledLeftThumbnailCard = styled('section')(({ theme }) => ({
    width: '90%', aspectRatio: '1/1',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
    position: 'relative', overflow: 'hidden', cursor: 'pointer',
    transition: theme.transitions.create('box-shadow', { duration: theme.transitions.duration.short, }),
    boxShadow: theme.shadows[1], borderRadius: theme.spacing(3),
    '&:hover': { boxShadow: theme.shadows[6], },
    [theme.breakpoints.down(360)]: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 },
    [theme.breakpoints.up(900)]: { display: 'none', height: 0 },
    [theme.breakpoints.up(1100)]: { display: 'flex', height: 'inherit', width: '90%', aspectRatio: '1/1', },
}))

export const StyledRightThumbnailCard = styled('section')(({ theme }) => ({
    width: '90%', aspectRatio: '1/1',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
    '*': {
        // border: 'solid 1px red'
    },
    [theme.breakpoints.down(360)]: { display: 'none', width: 0 },
    [theme.breakpoints.up(900)]: { width: '100%', height: '100%' }, // justifyContent: 'space-between'
    [theme.breakpoints.up(1100)]: { width: '90%', height: 'inherit', },
}))

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
    width: '100%', height: 'fit-content',
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down(470)]: { display: 'none', height: 0 },
    [theme.breakpoints.up(1800)]: { fontSize: theme.typography.h3.fontSize },
}))
export const StyledCardHeadline = styled('div')(({ theme }) => ({
    width: '100%', height: '65%',
    display: 'flex', flexDirection: 'column',
    [theme.breakpoints.up(360)]: { height: '100%' },
    [theme.breakpoints.up(470)]: { height: '85%' },
    [theme.breakpoints.up(810)]: { height: '65%' },
    [theme.breakpoints.up(900)]: { height: '65%' },
    [theme.breakpoints.up(1100)]: { height: '75%' },
    [theme.breakpoints.up(1200)]: { height: '50%' },
    [theme.breakpoints.up(1350)]: { height: '65%' },
    '& p': {
        overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis',
        [theme.breakpoints.up(360)]: { WebkitLineClamp: 4, },
        [theme.breakpoints.up(450)]: { WebkitLineClamp: 5, },
        [theme.breakpoints.up(470)]: { WebkitLineClamp: 4, },
        [theme.breakpoints.up(525)]: { WebkitLineClamp: 5, },
        [theme.breakpoints.up(575)]: { WebkitLineClamp: 6, },
        [theme.breakpoints.up(600)]: { WebkitLineClamp: 3, },
        [theme.breakpoints.up(750)]: { WebkitLineClamp: 3, },
        [theme.breakpoints.up(900)]: { WebkitLineClamp: 2, fontSize: '14px' },
        [theme.breakpoints.up(1100)]: { WebkitLineClamp: 3, },
        [theme.breakpoints.up(1200)]: { WebkitLineClamp: 2, },
        [theme.breakpoints.up(1350)]: { WebkitLineClamp: 4, },
        [theme.breakpoints.up(1560)]: { WebkitLineClamp: 4, },
        [theme.breakpoints.up(1700)]: { WebkitLineClamp: 4, fontSize: theme.typography.body1.fontSize },
        [theme.breakpoints.up(2485)]: { WebkitLineClamp: 5, },
        [theme.breakpoints.up(2700)]: { WebkitLineClamp: 5, },
    },
    '& h2': {
        fontWeight: 'bold',
        overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis',
        WebkitLineClamp: 1,
        [theme.breakpoints.down(470)]: { fontSize: `calc(${theme.typography.h4.fontSize} + 4px)` },
        [theme.breakpoints.up(470)]: { fontSize: theme.typography.h3.fontSize },
        [theme.breakpoints.up(600)]: { fontSize: `calc(${theme.typography.h4.fontSize} + 4px)` },
        [theme.breakpoints.up(1100)]: { fontSize: theme.typography.h4.fontSize },
        [theme.breakpoints.up(1560)]: { fontSize: theme.typography.h3.fontSize },
        [theme.breakpoints.up(1800)]: { fontSize: theme.typography.h2.fontSize },
        [theme.breakpoints.up(2004)]: { fontSize: theme.typography.h3.fontSize },
        [theme.breakpoints.up(2200)]: { fontSize: theme.typography.h2.fontSize },
    }
}))
export const StyledCardInfo = styled('div')(({ theme }) => ({
    width: '100%', height: 'fit-content',
    display: 'flex', alignItems: 'center',
    columnGap: theme.spacing(1),
    [theme.breakpoints.down(810)]: { display: 'none', height: 0 },
    [theme.breakpoints.up(900)]: { display: 'none', height: 0 },
    [theme.breakpoints.up(1200)]: { display: 'flex', height: 'fit-content' },
    // [theme.breakpoints.up('lg')]: { columnGap: theme.spacing(2) },
    // [theme.breakpoints.up('xl')]: { columnGap: theme.spacing(3) },
    '& p': {
        overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis',
        WebkitLineClamp: 1,
    },
    '& img': {
        cursor: 'pointer',
        transition: theme.transitions.create('box-shadow', { duration: theme.transitions.duration.short, }),
        boxShadow: theme.shadows[1], borderRadius: '50%',
        '&:hover': { boxShadow: theme.shadows[6], },
    }
}))