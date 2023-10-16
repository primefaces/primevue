import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-fieldset-legend > a,
    .p-fieldset-legend > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-fieldset-toggleable .p-fieldset-legend a {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
    }

    .p-fieldset-legend-text {
        line-height: 1;
    }
}
`;

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
    css,
    classes
});
