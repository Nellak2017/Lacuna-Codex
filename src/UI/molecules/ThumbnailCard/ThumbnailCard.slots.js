import { Typography, Tooltip } from '@mui/material'
import { StyledLeftThumbnailCard, StyledRightThumbnailCard, StyledCardTitle, StyledCardHeadline, StyledCardInfo, StyledAvatarWrapper } from './ThumbnailCard.elements'
import Image from 'next/image'
export const LeftThumbnailCardSlot = ({ state: {
    thumbnail = '/stockSciFiOne.jpg',
    thumbnailAlt = 'Default Image' } = {} }) => (
    <StyledLeftThumbnailCard>
        <Image src={thumbnail} alt={thumbnailAlt} fill priority sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw' />
    </StyledLeftThumbnailCard>
)
const longText = 'Subheader here really long repeated text here really long repeated text here really long repeated text here really long repeated text here really long text repeated here really long text repeated here'
export const RightThumbnailCardSlot = ({ state: {
    avatar = '/stockSciFiTwo.jpg',
    avatarAlt = 'User',
    category = 'Category',
    title = 'News Headline here',
    subtitle = longText,
    info = 'Apr 30, 2025' } = {} }) => (
    <StyledRightThumbnailCard>
        <StyledCardTitle variant='h1' component='h1'>{category}</StyledCardTitle>
        <StyledCardHeadline>
            <Typography variant='h2' component='h2'>{title}</Typography>
            <Typography variant='p' component='p'>{subtitle}</Typography>
        </StyledCardHeadline>
        <StyledCardInfo>
            <Tooltip title={avatarAlt}>
                <Image src={avatar} alt={avatarAlt} width={25} height={25} />
            </Tooltip>
            <Typography variant='p' component='p'>{info}</Typography>
        </StyledCardInfo>
    </StyledRightThumbnailCard>
)
/* 
import { LeftThumbnailCardSlot, RightThumbnailCardSlot } from '..the place'

export const CardGridUpper = (customHook = CardGridUpperHook) => {
    const { state } = customHook?.(...args) || {}
    const { cards } = state || {}
    const [card1, card2, card3] = cards || []
    return (
        <GridWrapper>
            {<ThumbnailCard>
                <LeftThumbnailCardSlot state={card1} />
                <RightThumbnailCardSlot state={card1} />
             </ThumbnailCard>}
            {Not a thumbnail card}
            {<ThumbnailCard> 
                <LeftThumbnailCardSlot state={card3} />
                <RightThumbnailCardSlot state={card3} />
            <ThumbnailCard/>}
        </GridWrapper>
    )
}
*/