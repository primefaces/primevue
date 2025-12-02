import { style } from '@primeuix/styles/drawer';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    mask: ({ position, modal }) => ({
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
        alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
        pointerEvents: modal ? 'auto' : 'none'
    }),
    root: {
        pointerEvents: 'auto'
    }
};

const classes = {
    mask: ({ instance, props }) => {
        const positions = ['left', 'right', 'top', 'bottom'];
        const pos = positions.find((item) => item === props.position);

        return [
            'p-drawer-mask',
            {
                'p-overlay-mask p-overlay-mask-enter-active': props.modal,
                'p-drawer-open': instance.containerVisible,
                'p-drawer-full': instance.fullScreen
            },
            pos ? `p-drawer-${pos}` : ''
        ];
    },
    root: ({ instance }) => [
        'p-drawer p-component',
        {
            'p-drawer-full': instance.fullScreen
        }
    ],
    header: 'p-drawer-header',
    title: 'p-drawer-title',
    pcCloseButton: 'p-drawer-close-button',
    content: 'p-drawer-content',
    footer: 'p-drawer-footer'
};

export default BaseStyle.extend({
    name: 'drawer',
    style,
    classes,
    inlineStyles
});
