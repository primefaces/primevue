import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-togglebutton p-component',
        {
            'p-togglebutton-checked': instance.active,
            'p-invalid': props.invalid
        }
    ],
    icon: 'p-togglebutton-icon',
    label: 'p-togglebutton-label'
};

export default BaseStyle.extend({
    name: 'togglebutton',
    classes
});
