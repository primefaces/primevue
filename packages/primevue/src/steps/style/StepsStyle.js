import { style } from '@primeuix/styles/steps';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => ['p-steps p-component', { 'p-readonly': props.readonly }],
    list: 'p-steps-list',
    item: ({ instance, item, index }) => [
        'p-steps-item',
        {
            'p-steps-item-active': instance.isActive(index),
            'p-disabled': instance.isItemDisabled(item, index)
        }
    ],
    itemLink: 'p-steps-item-link',
    itemNumber: 'p-steps-item-number',
    itemLabel: 'p-steps-item-label'
};

export default BaseStyle.extend({
    name: 'steps',
    style,
    classes
});
