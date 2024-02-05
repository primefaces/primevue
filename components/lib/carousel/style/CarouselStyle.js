import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-carousel p-component',
        {
            'p-carousel-vertical': instance.isVertical(),
            'p-carousel-horizontal': !instance.isVertical()
        }
    ],
    header: 'p-carousel-header',
    content: 'p-carousel-content',
    container: 'p-carousel-container',
    previousButton: ({ instance }) => [
        'p-carousel-prev p-link',
        {
            'p-disabled': instance.backwardIsDisabled
        }
    ],
    previousButtonIcon: 'p-carousel-next-icon',
    itemsContent: 'p-carousel-items-content',
    itemsContainer: 'p-carousel-items-container',
    itemCloned: ({ index, value, totalShiftedItems, d_numVisible }) => [
        'p-carousel-item p-carousel-item-cloned',
        {
            'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
            'p-carousel-item-start': index === 0,
            'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
        }
    ],
    item: ({ instance, index }) => [
        'p-carousel-item',
        {
            'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
            'p-carousel-item-start': instance.firstIndex() === index,
            'p-carousel-item-end': instance.lastIndex() === index
        }
    ],
    nextButton: ({ instance }) => [
        'p-carousel-next p-link',
        {
            'p-disabled': instance.forwardIsDisabled
        }
    ],
    nextButtonIcon: 'p-carousel-prev-icon',
    indicators: 'p-carousel-indicators p-reset',
    indicator: ({ instance, index }) => [
        'p-carousel-indicator',
        {
            'p-highlight': instance.d_page === index
        }
    ],
    indicatorButton: 'p-link',
    footer: 'p-carousel-footer'
};

export default BaseStyle.extend({
    name: 'carousel',
    classes
});
