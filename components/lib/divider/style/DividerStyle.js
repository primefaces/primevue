import BaseStyle from 'primevue/base/style';

/* Position */
const inlineStyles = {
    root: ({ props }) => ({
        justifyContent: props.layout === 'horizontal' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null) : null,
        alignItems: props.layout === 'vertical' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null) : null
    })
};

const classes = {
    root: ({ props }) => [
        'p-divider p-component',
        'p-divider-' + props.layout,
        'p-divider-' + props.type,
        { 'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left') },
        { 'p-divider-center': props.layout === 'horizontal' && props.align === 'center' },
        { 'p-divider-right': props.layout === 'horizontal' && props.align === 'right' },
        { 'p-divider-top': props.layout === 'vertical' && props.align === 'top' },
        { 'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center') },
        { 'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom' }
    ],
    content: 'p-divider-content'
};

export default BaseStyle.extend({
    name: 'divider',
    classes,
    inlineStyles
});
