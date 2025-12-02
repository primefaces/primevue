import { style } from '@primeuix/styles/dialog';
import BaseStyle from '@primevue/core/base/style';

/* Position */
const inlineStyles = {
    mask: ({ position, modal }) => ({
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
        alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
        pointerEvents: modal ? 'auto' : 'none'
    }),
    root: {
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'auto'
    }
};

const classes = {
    mask: ({ props }) => {
        const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
        const pos = positions.find((item) => item === props.position);

        return [
            'p-dialog-mask',
            {
                'p-overlay-mask p-overlay-mask-enter-active': props.modal
            },
            pos ? `p-dialog-${pos}` : ''
        ];
    },
    root: ({ props, instance }) => [
        'p-dialog p-component',
        {
            'p-dialog-maximized': props.maximizable && instance.maximized
        }
    ],
    header: 'p-dialog-header',
    title: 'p-dialog-title',
    headerActions: 'p-dialog-header-actions',
    pcMaximizeButton: 'p-dialog-maximize-button',
    pcCloseButton: 'p-dialog-close-button',
    content: 'p-dialog-content',
    footer: 'p-dialog-footer'
};

export default BaseStyle.extend({
    name: 'dialog',
    style,
    classes,
    inlineStyles
});
