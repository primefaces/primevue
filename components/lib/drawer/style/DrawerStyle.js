import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: ${dt('drawer.background')};
    color: ${dt('drawer.color')};
    border: 1px solid ${dt('drawer.border.color')};
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 1.125rem;
}

.p-drawer-title {
    font-weight: 600;
    font-size: 1.25rem;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-sm,
.p-drawer-right .p-drawer-sm {
    width: 20rem;
}

.p-drawer-left .p-drawer-md,
.p-drawer-right .p-drawer-md {
    width: 40rem;
}

.p-drawer-left .p-drawer-lg,
.p-drawer-right .p-drawer-lg {
    width: 60rem;
}

.p-drawer-top .p-drawer-sm,
.p-drawer-bottom .p-drawer-sm {
    height: 10rem;
}

.p-drawer-top .p-drawer-md,
.p-drawer-bottom .p-drawer-md {
    height: 20rem;
}

.p-drawer-top .p-drawer-lg,
.p-drawer-bottom .p-drawer-lg {
    height: 30rem;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 64em) {
    .p-drawer-left .p-drawer-lg,
    .p-drawer-left .p-drawer-md,
    .p-drawer-right .p-drawer-lg,
    .p-drawer-right .p-drawer-md {
        width: 20rem;
    }
}

.p-drawer-open {
    display: flex;
}
`;

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
            'p-drawer-full': instance.fullScreen
        }
    ],
    header: 'p-drawer-header',
    title: 'p-drawer-title',
    pcCloseButton: 'p-drawer-close-button',
    content: 'p-drawer-content'
};

export default BaseStyle.extend({
    name: 'drawer',
    theme,
    classes,
    inlineStyles
});
