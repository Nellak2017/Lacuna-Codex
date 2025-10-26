import React from 'react'
import { StyledThumbnailCard } from './ThumbnailCard.elements.js'
import { LeftThumbnailCardSlot, RightThumbnailCardSlot } from './ThumbnailCard.slots.js'
import { useRouter } from 'next/router'
export const ThumbnailCard = ({ postUrl = 'https://www.google.com/', children }) => {
    const router = useRouter()
    const childrenArray = React.Children.toArray(children)
    return (<StyledThumbnailCard onClick={() => router.push(postUrl)}>{childrenArray?.[0] ?? <LeftThumbnailCardSlot />}{childrenArray?.[1] ?? <RightThumbnailCardSlot />}</StyledThumbnailCard>)
}