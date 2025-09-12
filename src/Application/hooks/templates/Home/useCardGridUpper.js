export const useCardGridUpper = () => {
    const cards = Array.from({ length: 4 }, (_, i) => `Card ${i + 1}`) // Hook. Data source being CMS
    return { state: { cards } } // No services since it is a Controlled Component, with controlling source being CMS
}