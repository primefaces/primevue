import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => ['p-steps p-component', { 'p-readonly': props.readonly }],
    menu: 'p-steps-list',
    menuitem: ({ instance, item, index }) => [
        'p-steps-item',
        {
            'p-highlight p-steps-current': instance.isActive(index),
            'p-disabled': instance.isItemDisabled(item, index)
        }
    ],
    action: 'p-menuitem-link',
    step: 'p-steps-number',
    label: 'p-steps-title'
};

export default BaseStyle.extend({
    name: 'steps',
    classes
});
