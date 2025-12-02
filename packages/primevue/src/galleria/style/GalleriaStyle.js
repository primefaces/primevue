import { style } from '@primeuix/styles/galleria';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    mask: 'p-galleria-mask p-overlay-mask p-overlay-mask-enter-active',
    root: ({ instance }) => {
        const thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass('p-galleria-thumbnails', instance.$attrs.thumbnailsPosition);
        const indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass('p-galleria-indicators', instance.$attrs.indicatorsPosition);

        return [
            'p-galleria p-component',
            {
                'p-galleria-fullscreen': instance.$attrs.fullScreen,
                'p-galleria-inset-indicators': instance.$attrs.showIndicatorsOnItem,
                'p-galleria-hover-navigators': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
            },
            thumbnailsPosClass,
            indicatorPosClass
        ];
    },
    closeButton: 'p-galleria-close-button',
    closeIcon: 'p-galleria-close-icon',
    header: 'p-galleria-header',
    content: 'p-galleria-content',
    footer: 'p-galleria-footer',
    itemsContainer: 'p-galleria-items-container',
    items: 'p-galleria-items',
    prevButton: ({ instance }) => [
        'p-galleria-prev-button p-galleria-nav-button',
        {
            'p-disabled': instance.isNavBackwardDisabled
        }
    ],
    prevIcon: 'p-galleria-prev-icon',
    item: 'p-galleria-item',
    nextButton: ({ instance }) => [
        'p-galleria-next-button p-galleria-nav-button',
        {
            'p-disabled': instance.isNavForwardDisabled
        }
    ],
    nextIcon: 'p-galleria-next-icon',
    caption: 'p-galleria-caption',
    indicatorList: 'p-galleria-indicator-list',
    indicator: ({ instance, index }) => [
        'p-galleria-indicator',
        {
            'p-galleria-indicator-active': instance.isIndicatorItemActive(index)
        }
    ],
    indicatorButton: 'p-galleria-indicator-button',
    thumbnails: 'p-galleria-thumbnails',
    thumbnailContent: 'p-galleria-thumbnails-content',
    thumbnailPrevButton: ({ instance }) => [
        'p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button',
        {
            'p-disabled': instance.isNavBackwardDisabled
        }
    ],
    thumbnailPrevIcon: 'p-galleria-thumbnail-prev-icon',
    thumbnailsViewport: 'p-galleria-thumbnails-viewport',
    thumbnailItems: 'p-galleria-thumbnail-items',
    thumbnailItem: ({ instance, index, activeIndex }) => [
        'p-galleria-thumbnail-item',
        {
            'p-galleria-thumbnail-item-current': activeIndex === index,
            'p-galleria-thumbnail-item-active': instance.isItemActive(index),
            'p-galleria-thumbnail-item-start': instance.firstItemAciveIndex() === index,
            'p-galleria-thumbnail-item-end': instance.lastItemActiveIndex() === index
        }
    ],
    thumbnail: 'p-galleria-thumbnail',
    thumbnailNextButton: ({ instance }) => [
        'p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button',
        {
            'p-disabled': instance.isNavForwardDisabled
        }
    ],
    thumbnailNextIcon: 'p-galleria-thumbnail-next-icon'
};

export default BaseStyle.extend({
    name: 'galleria',
    style,
    classes
});
