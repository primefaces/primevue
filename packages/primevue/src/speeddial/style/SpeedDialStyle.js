import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-speeddial {
    position: static;
    display: flex;
    gap: ${dt('speeddial.gap')};
}

.p-speeddial-button {
    z-index: 1;
}

.p-speeddial-button.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background ${dt('speeddial.transition.duration')}, color ${dt('speeddial.transition.duration')}, border-color ${dt('speeddial.transition.duration')},
    box-shadow ${dt('speeddial.transition.duration')}, outline-color ${dt('speeddial.transition.duration')};
    will-change: transform;
}

.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear ${dt('speeddial.transition.duration')};
    pointer-events: none;
    outline: 0 none;
    z-index: 2;
    gap: ${dt('speeddial.gap')};
}

.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}

.p-speeddial-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${dt('mask.background')};
    border-radius: 6px;
    transition: opacity 150ms;
}

.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 150ms;
}

.p-speeddial-open .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-open .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}

.p-speeddial-open .p-speeddial-rotate {
    transform: rotate(45deg);
}
`;

/* Direction */
const inlineStyles = {
    root: ({ props }) => ({
        alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
        justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
        flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    }),
    list: ({ props }) => ({
        flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    })
};

const classes = {
    root: ({ instance, props }) => [
        `p-speeddial p-component p-speeddial-${props.type}`,
        {
            [`p-speeddial-direction-${props.direction}`]: props.type !== 'circle',
            'p-speeddial-open': instance.d_visible,
            'p-disabled': props.disabled
        }
    ],
    pcButton: ({ props }) => [
        'p-speeddial-button',
        {
            'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
        }
    ],
    list: 'p-speeddial-list',
    item: 'p-speeddial-item',
    action: 'p-speeddial-action',
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
    theme,
    classes,
    inlineStyles
});
