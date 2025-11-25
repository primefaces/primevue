import { style } from '@primeuix/styles/fieldset';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-fieldset p-component',
        {
            'p-fieldset-toggleable': props.toggleable
        }
    ],
    legend: 'p-fieldset-legend',
    legendLabel: 'p-fieldset-legend-label',
    toggleButton: 'p-fieldset-toggle-button',
    toggleIcon: 'p-fieldset-toggle-icon',
    contentContainer: 'p-fieldset-content-container',
    contentWrapper: 'p-fieldset-content-wrapper',
    content: 'p-fieldset-content'
};

export default BaseStyle.extend({
    name: 'fieldset',
    style,
    classes
});
