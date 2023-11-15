import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
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
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .p-dock-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
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

    /* Position */
    /* top */
    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-top .p-dock-item {
        transform-origin: center top;
    }

    /* bottom */
    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-bottom .p-dock-item {
        transform-origin: center bottom;
    }

    /* right */
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

    /* left */
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
    container: 'p-dock-list-container',
    menu: 'p-dock-list',
    menuitem: ({ instance, processedItem, index, id }) => [
        'p-dock-item',
        {
            'p-focus': instance.isItemActive(id),
            'p-disabled': instance.disabled(processedItem),
            'p-dock-item-second-prev': instance.currentIndex - 2 === index,
            'p-dock-item-prev': instance.currentIndex - 1 === index,
            'p-dock-item-current': instance.currentIndex === index,
            'p-dock-item-next': instance.currentIndex + 1 === index,
            'p-dock-item-second-next': instance.currentIndex + 2 === index
        }
    ],
    content: 'p-menuitem-content',
    action: 'p-dock-link',
    icon: 'p-dock-icon'
};

export default BaseStyle.extend({
    name: 'dock',
    css,
    classes
});
