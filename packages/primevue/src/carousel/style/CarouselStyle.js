import { style } from '@primeuix/styles/carousel';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-carousel p-component',
        {
            'p-carousel-vertical': instance.isVertical(),
            'p-carousel-horizontal': !instance.isVertical()
        }
    ],
    header: 'p-carousel-header',
    contentContainer: 'p-carousel-content-container',
    content: 'p-carousel-content',
    pcPrevButton: ({ instance }) => [
        'p-carousel-prev-button',
        {
            'p-disabled': instance.backwardIsDisabled
        }
    ],
    viewport: 'p-carousel-viewport',
    itemList: 'p-carousel-item-list',
    itemClone: ({ index, value, totalShiftedItems, d_numVisible }) => [
        'p-carousel-item p-carousel-item-clone',
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
    pcNextButton: ({ instance }) => [
        'p-carousel-next-button',
        {
            'p-disabled': instance.forwardIsDisabled
        }
    ],
    indicatorList: 'p-carousel-indicator-list',
    indicator: ({ instance, index }) => [
        'p-carousel-indicator',
        {
            'p-carousel-indicator-active': instance.d_page === index
        }
    ],
    indicatorButton: 'p-carousel-indicator-button',
    footer: 'p-carousel-footer'
};

export default BaseStyle.extend({
    name: 'carousel',
    style,
    classes
});
