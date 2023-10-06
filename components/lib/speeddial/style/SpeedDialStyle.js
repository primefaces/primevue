import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-speeddial {
        position: absolute;
        display: flex;
    }

    .p-speeddial-button {
        z-index: 1;
    }

    .p-speeddial-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: top 0s linear 0.2s;
        pointer-events: none;
        z-index: 2;
    }

    .p-speeddial-item {
        transform: scale(0);
        opacity: 0;
        transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
        will-change: transform;
    }

    .p-speeddial-action {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
    }

    .p-speeddial-circle .p-speeddial-item,
    .p-speeddial-semi-circle .p-speeddial-item,
    .p-speeddial-quarter-circle .p-speeddial-item {
        position: absolute;
    }

    .p-speeddial-rotate {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        will-change: transform;
    }

    .p-speeddial-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-mask-visible {
        pointer-events: none;
        opacity: 1;
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-opened .p-speeddial-list {
        pointer-events: auto;
    }

    .p-speeddial-opened .p-speeddial-item {
        transform: scale(1);
        opacity: 1;
    }

    .p-speeddial-opened .p-speeddial-rotate {
        transform: rotate(45deg);
    }
}
`;

/* Direction */
const inlineStyles = {
    root: ({ props }) => ({
        alignItems: props.direction === 'up' || props.direction === 'down' ? 'center' : '',
        justifyContent: props.direction === 'left' || props.direction === 'right' ? 'center' : '',
        flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    }),
    menu: ({ props }) => ({
        flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    })
};

const classes = {
    root: ({ instance, props }) => [
        `p-speeddial p-component p-speeddial-${props.type}`,
        {
            [`p-speeddial-direction-${props.direction}`]: props.type !== 'circle',
            'p-speeddial-opened': instance.d_visible,
            'p-disabled': props.disabled
        }
    ],
    button: ({ props }) => [
        'p-speeddial-button p-button-rounded',
        {
            'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
        }
    ],
    menu: 'p-speeddial-list',
    menuitem: ({ instance, id }) => [
        'p-speeddial-item',
        {
            'p-focus': instance.isItemActive(id)
        }
    ],
    action: ({ item }) => [
        'p-speeddial-action',
        {
            'p-disabled': item.disabled
        }
    ],
    actionIcon: 'p-speeddial-action-icon',
    mask: ({ instance }) => [
        'p-speeddial-mask',
        {
            'p-speeddial-mask-visible': instance.d_visible
        }
    ]
};

export default BaseStyle.extend({
    name: 'speeddial',
    css,
    classes,
    inlineStyles
});
