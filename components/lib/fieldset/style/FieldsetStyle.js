import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-fieldset p-component',
        {
            'p-fieldset-toggleable': props.toggleable
        }
    ],
    legend: 'p-fieldset-legend',
    legendtitle: 'p-fieldset-legend-label',
    togglericon: 'p-fieldset-toggle-icon',
    toggleablecontent: 'p-fieldset-content-container',
    content: 'p-fieldset-content'
};

export default BaseStyle.extend({
    name: 'fieldset',
    classes
});
