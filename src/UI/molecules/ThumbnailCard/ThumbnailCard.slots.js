import { Typography } from '@mui/material'
import { StyledLeftThumbnailCard, StyledRightThumbnailCard, StyledCardTitle, StyledCardHeadline, StyledCardInfo } from './ThumbnailCard.elements'
import Image from 'next/image'
export const LeftThumbnailCardSlot = ({ state: { card: { thumbnail = '/stockSciFiOne.jpg', thumbnailAlt = 'Default Image' } = {} } = {} }) => (
    <StyledLeftThumbnailCard>
        <Image
            src={thumbnail} alt={thumbnailAlt} fill
            style={{ objectFit: 'fill' }}
            sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
    </StyledLeftThumbnailCard>

)
export const RightThumbnailCardSlot = ({ state: { card: { avatar = '/stockSciFiTwo.jpg', avatarAlt = 'Default Avatar', category = 'default category', title = 'default title', info = 'default info' } = {} } = {} }) => (
    <StyledRightThumbnailCard>
        <StyledCardTitle variant='h1' component='h1'>Category</StyledCardTitle>
        <StyledCardHeadline>
            <Typography variant='h2' component='h2'>
                News Headline here
            </Typography>
        </StyledCardHeadline>
        <StyledCardInfo>
            <Image src={avatar} alt={avatarAlt} width={50} height={50} />
            <Typography variant='p' component='p'>User | Apr 3, 2025</Typography>
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