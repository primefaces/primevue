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
            'p-drawer-mask',
            {
                'p-component-overlay p-component-overlay-enter': props.modal,
                'p-drawer-open': instance.containerVisible,
                'p-drawer-full': instance.fullScreen
            },
            pos ? `p-drawer-${pos}` : ''
        ];
    },
    root: ({ instance }) => [
        'p-drawer p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false,
            'p-drawer-full': instance.fullScreen
        }
    ],
    header: 'p-drawer-header',
    title: 'p-drawer-title',
    closeButton: 'p-drawer-close-button',
    content: 'p-drawer-content'
};

export default BaseStyle.extend({
    name: 'drawer',
    classes,
    inlineStyles
});
