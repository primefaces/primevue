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
                'p-galleria-indicator-onitem': instance.$attrs.showIndicatorsOnItem,
                'p-galleria-item-nav-onhover': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
            },
            thumbnailsPosClass,
            indicatorPosClass
        ];
    },
    closeButton: 'p-galleria-close p-link',
    closeIcon: 'p-galleria-close-icon',
    header: 'p-galleria-header',
    content: 'p-galleria-content',
    footer: 'p-galleria-footer',
    itemWrapper: 'p-galleria-item-wrapper',
    itemContainer: 'p-galleria-item-container',
    previousItemButton: ({ instance }) => [
        'p-galleria-item-prev p-galleria-item-nav p-link',
        {
            'p-disabled': instance.isNavBackwardDisabled()
        }
    ],
    previousItemIcon: 'p-galleria-item-prev-icon',
    item: 'p-galleria-item',
    nextItemButton: ({ instance }) => [
        'p-galleria-item-next p-galleria-item-nav p-link',
        {
            'p-disabled': instance.isNavForwardDisabled()
        }
    ],
    nextItemIcon: 'p-galleria-item-next-icon',
    caption: 'p-galleria-caption',
    indicators: 'p-galleria-indicators p-reset',
    indicator: ({ instance, index }) => [
        'p-galleria-indicator',
        {
            'p-highlight': instance.isIndicatorItemActive(index)
        }
    ],
    indicatorButton: 'p-link',
    thumbnailWrapper: 'p-galleria-thumbnail-wrapper',
    thumbnailContainer: 'p-galleria-thumbnail-container',
    previousThumbnailButton: ({ instance }) => [
        'p-galleria-thumbnail-prev p-link',
        {
            'p-disabled': instance.isNavBackwardDisabled()
        }
    ],
    previousThumbnailIcon: 'p-galleria-thumbnail-prev-icon',
    thumbnailItemsContainer: 'p-galleria-thumbnail-items-container',
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
    thumbnailItemContent: 'p-galleria-thumbnail-item-content',
    nextThumbnailButton: ({ instance }) => [
        'p-galleria-thumbnail-next p-link',
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
