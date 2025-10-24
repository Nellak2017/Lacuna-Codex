import React from 'react'
import { StyledThumbnailCard } from './ThumbnailCard.elements.js'
import { LeftThumbnailCardSlot, RightThumbnailCardSlot } from './ThumbnailCard.slots.js'
export const ThumbnailCard = ({ children }) => {
    const childrenArray = React.Children.toArray(children)
    return (<StyledThumbnailCard>{childrenArray?.[0] ?? <LeftThumbnailCardSlot />}{childrenArray?.[1] ?? <RightThumbnailCardSlot />}</StyledThumbnailCard>)
}