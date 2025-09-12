export const useCardGridLower = () => {
    const src = 'https://www.youtube-nocookie.com/watch?v=mPaCnwpFvZY' // Hook. Data source being CMS
    return { state: { src } } // No services since it is a Controlled Component, with controlling source being CMS
}