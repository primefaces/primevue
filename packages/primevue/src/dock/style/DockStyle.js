import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-dock {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.p-dock-list-container {
    display: flex;
    pointer-events: auto;
    background: ${dt('dock.background')};
    border: 1px solid ${dt('dock.border.color')};
    padding: ${dt('dock.padding')};
    border-radius: ${dt('dock.border.radius')};
}

.p-dock-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0 none;
}

.p-dock-item {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    padding: ${dt('dock.item.padding')};
    border-radius: ${dt('dock.item.border.radius')};
}

.p-dock-item.p-focus {
    box-shadow: ${dt('dock.item.focus.ring.shadow')};
    outline: ${dt('dock.item.focus.ring.width')} ${dt('dock.item.focus.ring.style')} ${dt('dock.item.focus.ring.color')};
    outline-offset: ${dt('dock.item.focus.ring.offset')};
}

.p-dock-item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: ${dt('dock.item.size')};
    height: ${dt('dock.item.size')};
}

.p-dock-top {
    left: 0;
    top: 0;
    width: 100%;
}

.p-dock-top .p-dock-item {
    transform-origin: center top;
}

.p-dock-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
}

.p-dock-bottom .p-dock-item {
    transform-origin: center bottom;
}

.p-dock-right {
    right: 0;
    top: 0;
    height: 100%;
}

.p-dock-right .p-dock-item {
    transform-origin: center right;
}

.p-dock-right .p-dock-list {
    flex-direction: column;
}

.p-dock-left {
    left: 0;
    top: 0;
    height: 100%;
}

.p-dock-left .p-dock-item {
    transform-origin: center left;
}

.p-dock-left .p-dock-list {
    flex-direction: column;
}


.p-dock-item-second-prev,
.p-dock-item-second-next {
    transform: scale(1.2);
}

.p-dock-item-prev,
.p-dock-item-next {
    transform: scale(1.4);
}

.p-dock-item-current {
    transform: scale(1.6);
    z-index: 1;
}

.p-dock.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-bottom .p-dock-item-second-next {
    margin: 0 0.9rem;
  }

.p-dock.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-top .p-dock-item-next, .p-dock.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-bottom .p-dock-item-next {
    margin: 0 1.3rem;
}
.p-dock.p-dock-top .p-dock-item-current, .p-dock.p-dock-bottom .p-dock-item-current {
    margin: 0 1.5rem;
}
.p-dock.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-right .p-dock-item-second-next {
    margin: 0.9rem 0;
}
.p-dock.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-left .p-dock-item-next, .p-dock.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-right .p-dock-item-next {
    margin: 1.3rem 0;
}
.p-dock.p-dock-left .p-dock-item-current, .p-dock.p-dock-right .p-dock-item-current {
    margin: 1.5rem 0;
}

.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-dock p-component',
        `p-dock-${props.position}`,
        {
            'p-dock-mobile': instance.queryMatches
        }
    ],
    listContainer: 'p-dock-list-container',
    list: 'p-dock-list',
    item: ({ instance, processedItem, id, index }) => [
        'p-dock-item',
        {
            'p-dock-item-second-prev': instance.currentIndex - 2 === index,
            'p-dock-item-prev': instance.currentIndex - 1 === index,
            'p-dock-item-current': instance.currentIndex === index,
            'p-dock-item-next': instance.currentIndex + 1 === index,
            'p-dock-item-second-next': instance.currentIndex + 2 === index,
            'p-focus': instance.isItemActive(id),
            'p-disabled': instance.disabled(processedItem)
        }
    ],
    itemContent: 'p-dock-item-content',
    itemLink: 'p-dock-item-link',
    itemIcon: 'p-dock-item-icon'
};

export default BaseStyle.extend({
    name: 'dock',
    theme,
    classes
});
