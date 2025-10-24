import { Card, Typography, styled } from '@mui/material'
export const StyledThumbnailCard = styled(Card)(({ theme }) => ({
    padding: `0 ${theme.spacing(4)}`, aspectRatio: '16/9',
    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', columnGap: `${theme.spacing(4)}`,

    maxHeight: '400px' // TODO: Remove or override for default story
}))

export const StyledLeftThumbnailCard = styled('section')(({ theme }) => ({
    width: '90%', aspectRatio: '1/1',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
    position: 'relative', overflow: 'hidden', cursor: 'pointer',
    transition: theme.transitions.create('box-shadow', { duration: theme.transitions.duration.short, }),
    boxShadow: theme.shadows[1],
    '&:hover': { boxShadow: theme.shadows[6], },
    borderRadius: theme.spacing(3),
}))

export const StyledRightThumbnailCard = styled('section')(({ theme }) => ({
    width: '90%', aspectRatio: '1/1',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
}))

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h3.fontSize,
    width: '100%', height: '20%',
}))
export const StyledCardHeadline = styled('div')(({ theme }) => ({
    width: '100%', height: '60%',
    display: 'flex',
}))
export const StyledCardInfo = styled('div')(({ theme }) => ({
    width: '100%', height: '20%',
    display: 'flex', alignItems: 'center', columnGap: theme.spacing(4),
    'img': {
        borderRadius: '50%', cursor: 'pointer',
        transition: theme.transitions.create('box-shadow', { duration: theme.transitions.duration.short, }),
        boxShadow: theme.shadows[1],
        '&:hover': { boxShadow: theme.shadows[6], },
    },
}))
