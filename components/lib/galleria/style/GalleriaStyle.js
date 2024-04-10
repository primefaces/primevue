import BaseStyle from 'primevue/base/style';

const classes = {
    mask: ({ instance }) => [
        'p-galleria-mask p-component-overlay p-component-overlay-enter',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
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
    itemWrapper: 'p-galleria-items-container',
    itemContainer: 'p-galleria-items',
    previousItemButton: ({ instance }) => [
        'p-galleria-prev-button p-galleria-navigate-button',
        {
            'p-disabled': instance.isNavBackwardDisabled()
        }
    ],
    previousItemIcon: 'p-galleria-prev-icon',
    item: 'p-galleria-item',
    nextItemButton: ({ instance }) => [
        'p-galleria-next-button p-galleria-navigate-button',
        {
            'p-disabled': instance.isNavForwardDisabled()
        }
    ],
    nextItemIcon: 'p-galleria-next-icon',
    caption: 'p-galleria-caption',
    indicators: 'p-galleria-indicators',
    indicator: ({ instance, index }) => [
        'p-galleria-indicator',
        {
            'p-galleria-indicator-active': instance.isIndicatorItemActive(index)
        }
    ],
    indicatorButton: 'p-galleria-indicator-button',
    thumbnailWrapper: 'p-galleria-thumbnails',
    thumbnailContainer: 'p-galleria-thumbnails-content',
    previousThumbnailButton: ({ instance }) => [
        'p-galleria-thumbnail-prev-button',
        {
            'p-disabled': instance.isNavBackwardDisabled()
        }
    ],
    previousThumbnailIcon: 'p-galleria-thumbnail-prev-icon',
    thumbnailItemsContainer: 'p-galleria-thumbnails-viewport',
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
    thumbnailItemContent: 'p-galleria-thumbnail',
    nextThumbnailButton: ({ instance }) => [
        'p-galleria-thumbnail-next-button',
        {
            'p-disabled': instance.isNavForwardDisabled()
        }
    ],
    nextThumbnailIcon: 'p-galleria-thumbnail-next-icon'
};

export default BaseStyle.extend({
    name: 'galleria',
    classes
});
