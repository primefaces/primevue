import BaseStyle from 'primevue/base/style';

/* Direction */
const inlineStyles = {
    root: ({ props }) => ({
        alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
        justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
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
    classes,
    inlineStyles
});
