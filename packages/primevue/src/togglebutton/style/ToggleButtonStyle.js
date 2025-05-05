import { style } from '@primeuix/styles/togglebutton';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-togglebutton p-component',
        {
            'p-togglebutton-checked': instance.active,
            'p-invalid': instance.$invalid,
            'p-togglebutton-sm p-inputfield-sm': props.size === 'small',
            'p-togglebutton-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    content: 'p-togglebutton-content',
    icon: 'p-togglebutton-icon',
    label: 'p-togglebutton-label'
};

export default BaseStyle.extend({
    name: 'togglebutton',
    style,
    classes
});
