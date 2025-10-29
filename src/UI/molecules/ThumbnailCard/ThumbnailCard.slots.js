import { Typography, Tooltip } from '@mui/material'
import { StyledLeftThumbnailCard, StyledRightThumbnailCard, StyledCardTitle, StyledCardHeadline, StyledCardInfo } from './ThumbnailCard.elements'
import Image from 'next/image'
import Link from 'next/link'
export const LeftThumbnailCardSlot = ({ state: { thumbnail = '/stockSciFiOne.jpg', thumbnailAlt = 'Default Image', postUrl = 'https://www.google.com/' } = {} }) => (
    <StyledLeftThumbnailCard>
        <Link href={postUrl} onClick={e => e.stopPropagation()}>
            <Image src={thumbnail} alt={thumbnailAlt} fill priority sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw' />
        </Link>
    </StyledLeftThumbnailCard>
)
const longText = 'Subheader here really long repeated text here really long repeated text here really long repeated text here really long repeated text here really long text repeated here really long text repeated here'
export const RightThumbnailCardSlot = ({ state: { avatar = '/stockSciFiTwo.jpg', avatarAlt = 'User', category = 'Category', title = 'News Headline here', subtitle = longText, info = 'Apr 30, 2025', userUrl = 'https://duckduckgo.com/' } = {} }) => (
    <StyledRightThumbnailCard>
        <StyledCardTitle variant='h1' component='h1'>{category}</StyledCardTitle>
        <StyledCardHeadline>
            <Typography variant='h2' component='h2'>{title}</Typography>
            <Typography variant='p' component='p'>{subtitle}</Typography>
        </StyledCardHeadline>
        <StyledCardInfo>
            <Tooltip title={avatarAlt}>
                <Link href={userUrl} onClick={e => e.stopPropagation()}>
                    <Image src={avatar} alt={avatarAlt} width={25} height={25} />
                </Link>
            </Tooltip>
            <Typography variant='p' component='p'>{info}</Typography>
        </StyledCardInfo>
    </StyledRightThumbnailCard>
)