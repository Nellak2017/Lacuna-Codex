import { Card, Typography, styled } from '@mui/material'
export const StyledThumbnailCard = styled(Card)(({ theme }) => ({
    padding: `0 ${theme.spacing(4)}`, aspectRatio: '16/9',
    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', columnGap: `${theme.spacing(4)}`,
    [theme.breakpoints.down(360)]: { padding: 0 },
}))

export const StyledLeftThumbnailCard = styled('section')(({ theme }) => ({
    width: '90%', aspectRatio: '1/1',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
    position: 'relative', overflow: 'hidden', cursor: 'pointer',
    transition: theme.transitions.create('box-shadow', { duration: theme.transitions.duration.short, }),
    boxShadow: theme.shadows[1], borderRadius: theme.spacing(3),
    '&:hover': { boxShadow: theme.shadows[6], },
    [theme.breakpoints.down(360)]: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 },
}))

export const StyledRightThumbnailCard = styled('section')(({ theme }) => ({
    width: '90%', aspectRatio: '1/1',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
    '*': {
        // border: 'solid 1px red'
    },
    [theme.breakpoints.down(360)]: { display: 'none', width: 0 },
}))

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
    width: '100%', height: 'fit-content',
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down(470)]: { display: 'none', height: 0 },
    [theme.breakpoints.up('xxl')]: { fontSize: theme.typography.h3.fontSize, },
}))
export const StyledCardHeadline = styled('div')(({ theme }) => ({
    width: '100%', height: '65%',
    display: 'flex', flexDirection: 'column',
    [theme.breakpoints.up(360)]: { height: '100%' },
    [theme.breakpoints.up(470)]: { height: '85%' },
    '& p': {
        overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis',
        [theme.breakpoints.up(360)]: { WebkitLineClamp: 2, },
        [theme.breakpoints.up(385)]: { WebkitLineClamp: 3, },
        [theme.breakpoints.up(430)]: { WebkitLineClamp: 4, },
        [theme.breakpoints.up(470)]: { WebkitLineClamp: 3, },
        [theme.breakpoints.up(525)]: { WebkitLineClamp: 4, },
        [theme.breakpoints.up(575)]: { WebkitLineClamp: 5, },
    },
    '& h2': {
        fontWeight: 'bold',
        overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis',
        WebkitLineClamp: 1,
        [theme.breakpoints.down(470)]: { fontSize: `calc(${theme.typography.h4.fontSize} + 4px)` },
        [theme.breakpoints.up(470)]: { fontSize: theme.typography.h3.fontSize },
        [theme.breakpoints.up('xxl')]: { fontSize: `calc(${theme.typography.h2.fontSize} - 12px)` },
    }
}))
export const StyledCardInfo = styled('div')(({ theme }) => ({
    width: '100%', height: 'fit-content',
    display: 'flex', alignItems: 'center',
    columnGap: theme.spacing(1),
    [theme.breakpoints.down(600)]: { display: 'none', height: 0 },
    [theme.breakpoints.up('lg')]: { columnGap: theme.spacing(2) },
    [theme.breakpoints.up('xl')]: { columnGap: theme.spacing(3) },
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