import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: transparent;
    color: ${dt('galleria.nav.button.color')};
    width: 3rem;
    height: 3rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: 50%;
    margin: 0 0.5rem;
    padding: 0;
    user-select: none;
    border: none;
    cursor: pointer;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${dt('galleria.nav.button.hover.background')};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-prev-button {
    left: 0;
}

.p-galleria-next-button {
    right: 0;
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity ${dt('transition.duration')} ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${dt('galleria.caption.background')};
    color: ${dt('galleria.caption.color')};
    padding: 1rem;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0.5rem;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${dt('galleria.thumbnail.nav.button.color')};
    width: 2rem;
    height: 2rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    border-radius: 50%;
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${dt('galleria.thumbnail.nav.button.hover.background')};
    color: ${dt('galleria.thumbnail.nav.button.hover.color')};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-galleria-thumbnail-nav-button span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${dt('galleria.thumbnails.content.background')};
    padding: 1rem 0.25rem;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${dt('galleria.indicator.button.background')};
    width: 1rem;
    height: 1rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${dt('galleria.indicator.button.hover.background')};
}

.p-galleria-indicator-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background-color: ${dt('galleria.indicator.button.active.background')};
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: ${dt('galleria.inset.indicator.list.background')};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${dt('galleria.inset.indicator.button.background')};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${dt('galleria.inset.indicator.button.hover.background')};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${dt('galleria.inset.indicator.button.active.background')};
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    --p-mask-background: ${dt('galleria.mask.background')};
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0.5rem;
    background: transparent;
    color: ${dt('galleria.close.button.color')};
    width: 3rem;
    height: 3rem;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: 50%;
    outline-color: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-galleria-close-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-close-button:hover {
    background: ${dt('galleria.close.button.hover.background')};
    color: ${dt('galleria.close.button.hover.color')};
}

.p-galleria-close-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
    margin-top: -0.5rem;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`;

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
    itemsContainer: 'p-galleria-items-container',
    items: 'p-galleria-items',
    previousItemButton: ({ instance }) => [
        'p-galleria-prev-button p-galleria-nav-button',
        {
            'p-disabled': instance.isNavBackwardDisabled()
        }
    ],
    previousItemIcon: 'p-galleria-prev-icon',
    item: 'p-galleria-item',
    nextItemButton: ({ instance }) => [
        'p-galleria-next-button p-galleria-nav-button',
        {
            'p-disabled': instance.isNavForwardDisabled()
        }
    ],
    nextItemIcon: 'p-galleria-next-icon',
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
    previousThumbnailButton: ({ instance }) => [
        'p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button',
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
    thumbnail: 'p-galleria-thumbnail',
    nextThumbnailButton: ({ instance }) => [
        'p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button',
        {
            'p-disabled': instance.isNavForwardDisabled()
        }
    ],
    nextThumbnailIcon: 'p-galleria-thumbnail-next-icon'
};

export default BaseStyle.extend({
    name: 'galleria',
    theme,
    classes
});
