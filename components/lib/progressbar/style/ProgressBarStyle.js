import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-progressbar p-component',
        {
            'p-progressbar-determinate': instance.determinate,
            'p-progressbar-indeterminate': instance.indeterminate
        }
    ],
    container: 'p-progressbar-indeterminate-container',
    value: 'p-progressbar-value p-progressbar-value-animate',
    label: 'p-progressbar-label'
};

export default BaseStyle.extend({
    name: 'progressbar',
    classes
});
