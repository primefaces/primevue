import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${dt('galleria.border.width')};
    border-color: ${dt('galleria.border.color')};
    border-radius: ${dt('galleria.border.radius')};
}

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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: ${dt('galleria.nav.button.background')};
    color: ${dt('galleria.nav.button.color')};
    width: ${dt('galleria.nav.button.size')};
    height: ${dt('galleria.nav.button.size')};
    transition: background ${dt('galleria.transition.duration')}, color ${dt('galleria.transition.duration')}, outline-color ${dt('galleria.transition.duration')}, box-shadow ${dt('galleria.transition.duration')};
    margin: calc(-1 * calc(${dt('galleria.nav.button.size')}) / 2) ${dt('galleria.nav.button.gutter')} 0 ${dt('galleria.nav.button.gutter')};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${dt('galleria.nav.button.hover.background')};
    color: ${dt('galleria.nav.button.hover.color')};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${dt('galleria.nav.button.focus.ring.shadow')};
    outline: ${dt('galleria.nav.button.focus.ring.width')} ${dt('galleria.nav.button.focus.ring.style')} ${dt('galleria.nav.button.focus.ring.color')};
    outline-offset: ${dt('galleria.nav.button.focus.ring.offset')};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${dt('galleria.nav.icon.size')};
    width: ${dt('galleria.nav.icon.size')};
    height: ${dt('galleria.nav.icon.size')};
}

.p-galleria-prev-button {
    border-radius: ${dt('galleria.nav.button.prev.border.radius')};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${dt('galleria.nav.button.next.border.radius')};
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
    transition: opacity ${dt('galleria.transition.duration')} ease-in-out;
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
    padding: ${dt('galleria.caption.padding')};
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
    margin: 0 ${dt('galleria.thumbnail.nav.button.gutter')};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${dt('galleria.thumbnail.nav.button.color')};
    width: ${dt('galleria.thumbnail.nav.button.size')};
    height: ${dt('galleria.thumbnail.nav.button.size')};
    transition: background ${dt('galleria.transition.duration')}, color ${dt('galleria.transition.duration')}, outline-color ${dt('galleria.transition.duration')};
    outline-color: transparent;
    border-radius: ${dt('galleria.thumbnail.nav.button.border.radius')};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${dt('galleria.thumbnail.nav.button.hover.background')};
    color: ${dt('galleria.thumbnail.nav.button.hover.color')};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${dt('galleria.thumbnail.nav.button.focus.ring.shadow')};
    outline: ${dt('galleria.thumbnail.nav.button.focus.ring.width')} ${dt('galleria.thumbnail.nav.button.focus.ring.style')} ${dt('galleria.thumbnail.nav.button.focus.ring.color')};
    outline-offset: ${dt('galleria.thumbnail.nav.button.focus.ring.offset')};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${dt('galleria.thumbnail.nav.button.icon.size')};
    width: ${dt('galleria.thumbnail.nav.button.icon.size')};
    height: ${dt('galleria.thumbnail.nav.button.icon.size')};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${dt('galleria.thumbnails.content.background')};
    padding: ${dt('galleria.thumbnails.content.padding')};
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
    padding: ${dt('galleria.indicator.list.padding')};
    gap: ${dt('galleria.indicator.list.gap')};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${dt('galleria.indicator.button.background')};
    width: ${dt('galleria.indicator.button.width')};
    height: ${dt('galleria.indicator.button.height')};
    transition: background ${dt('galleria.transition.duration')}, color ${dt('galleria.transition.duration')}, outline-color ${dt('galleria.transition.duration')}, box-shadow ${dt('galleria.transition.duration')};
    outline-color: transparent;
    border-radius: ${dt('galleria.indicator.button.border.radius')};
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
    box-shadow: ${dt('galleria.indicator.button.focus.ring.shadow')};
    outline: ${dt('galleria.indicator.button.focus.ring.width')} ${dt('galleria.indicator.button.focus.ring.style')} ${dt('galleria.indicator.button.focus.ring.color')};
    outline-offset: ${dt('galleria.indicator.button.focus.ring.offset')};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${dt('galleria.indicator.button.active.background')};
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
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: ${dt('galleria.close.button.gutter')};
    background: ${dt('galleria.close.button.background')};
    color: ${dt('galleria.close.button.color')};
    width: ${dt('galleria.close.button.size')};
    height: ${dt('galleria.close.button.size')};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${dt('galleria.close.button.border.radius')};
    outline-color: transparent;
    transition: background ${dt('galleria.transition.duration')}, color ${dt('galleria.transition.duration')}, outline-color ${dt('galleria.transition.duration')};
}

.p-galleria-close-icon {
    font-size: ${dt('galleria.close.button.icon.size')};
    width: ${dt('galleria.close.button.icon.size')};
    height: ${dt('galleria.close.button.icon.size')};
}

.p-galleria-close-button:hover {
    background: ${dt('galleria.close.button.hover.background')};
    color: ${dt('galleria.close.button.hover.color')};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${dt('galleria.close.button.focus.ring.shadow')};
    outline: ${dt('galleria.close.button.focus.ring.width')} ${dt('galleria.close.button.focus.ring.style')} ${dt('galleria.close.button.focus.ring.color')};
    outline-offset: ${dt('galleria.close.button.focus.ring.offset')};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
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
    mask: 'p-galleria-mask p-overlay-mask p-overlay-mask-enter',
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
