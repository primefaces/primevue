import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-fieldset p-component',
        {
            'p-fieldset-toggleable': props.toggleable
        }
    ],
    legend: 'p-fieldset-legend',
    legendtitle: 'p-fieldset-legend-text',
    togglericon: 'p-fieldset-toggler',
    toggleablecontent: 'p-toggleable-content',
    content: 'p-fieldset-content'
};

export default BaseStyle.extend({
    name: 'fieldset',
    classes
});
