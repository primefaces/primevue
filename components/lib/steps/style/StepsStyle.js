import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => ['p-steps p-component', { 'p-readonly': props.readonly }],
    menu: 'p-steps-list',
    menuitem: ({ instance, item, index }) => [
        'p-steps-item',
        {
            'p-steps-item-active': instance.isActive(index),
            'p-disabled': instance.isItemDisabled(item, index)
        }
    ],
    action: 'p-steps-item-link',
    step: 'p-steps-item-number',
    label: 'p-steps-item-label'
};

export default BaseStyle.extend({
    name: 'steps',
    classes
});
