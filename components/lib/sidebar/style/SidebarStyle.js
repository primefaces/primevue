import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    mask: ({ position }) => ({
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
        alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center'
    })
};

const classes = {
    mask: ({ instance, props }) => {
        const positions = ['left', 'right', 'top', 'bottom'];
        const pos = positions.find((item) => item === props.position);

        return [
            'p-sidebar-mask',
            {
                'p-component-overlay p-component-overlay-enter': props.modal,
                'p-sidebar-mask-scrollblocker': props.blockScroll,
                'p-sidebar-visible': instance.containerVisible,
                'p-sidebar-full': instance.fullScreen
            },
            pos ? `p-sidebar-${pos}` : ''
        ];
    },
    root: ({ instance }) => [
        'p-sidebar p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false,
            'p-sidebar-full': instance.fullScreen
        }
    ],
    header: 'p-sidebar-header',
    title: 'p-sidebar-header-content',
    closeButton: 'p-sidebar-close p-sidebar-icon p-link',
    closeIcon: 'p-sidebar-close-icon',
    content: 'p-sidebar-content'
};

export default BaseStyle.extend({
    name: 'sidebar',
    classes,
    inlineStyles
});
