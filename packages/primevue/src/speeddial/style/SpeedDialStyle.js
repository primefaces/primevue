import { style } from '@primeuix/styles/speeddial';
import BaseStyle from '@primevue/core/base/style';

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
    mask: 'p-speeddial-mask p-overlay-mask'
};

export default BaseStyle.extend({
    name: 'speeddial',
    style,
    classes,
    inlineStyles
});
