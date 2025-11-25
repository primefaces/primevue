import { style } from '@primeuix/styles/panel';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-panel p-component',
        {
            'p-panel-toggleable': props.toggleable
        }
    ],
    header: 'p-panel-header',
    title: 'p-panel-title',
    headerActions: 'p-panel-header-actions',
    pcToggleButton: 'p-panel-toggle-button',
    contentContainer: 'p-panel-content-container',
    contentWrapper: 'p-panel-content-wrapper',
    content: 'p-panel-content',
    footer: 'p-panel-footer'
};

export default BaseStyle.extend({
    name: 'panel',
    style,
    classes
});
