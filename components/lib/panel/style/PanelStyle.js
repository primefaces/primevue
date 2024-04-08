import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-panel p-component',
        {
            'p-panel-toggleable': props.toggleable
        }
    ],
    header: 'p-panel-header',
    title: 'p-panel-title',
    icons: 'p-panel-header-actions',
    toggler: 'p-panel-toggle-button',
    toggleablecontent: 'p-panel-content-container',
    content: 'p-panel-content',
    footer: 'p-panel-footer'
};

export default BaseStyle.extend({
    name: 'panel',
    classes
});
