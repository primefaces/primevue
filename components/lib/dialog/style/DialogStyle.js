import BaseStyle from 'primevue/base/style';

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
                'p-component-overlay p-component-overlay-enter': props.modal
            },
            pos ? `p-dialog-${pos}` : ''
        ];
    },
    root: ({ props, instance }) => [
        'p-dialog p-component',
        {
            'p-dialog-rtl': props.rtl,
            'p-dialog-maximized': props.maximizable && instance.maximized,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-dialog-header',
    title: 'p-dialog-title',
    icons: 'p-dialog-header-icons',
    maximizableButton: 'p-dialog-header-icon p-dialog-header-maximize p-link',
    maximizableIcon: 'p-dialog-header-maximize-icon',
    closeButton: 'p-dialog-header-icon p-dialog-header-close p-link',
    closeButtonIcon: 'p-dialog-header-close-icon',
    content: 'p-dialog-content',
    footer: 'p-dialog-footer'
};

export default BaseStyle.extend({
    name: 'dialog',
    classes,
    inlineStyles
});
