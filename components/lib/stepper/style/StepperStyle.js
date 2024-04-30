import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-stepper-horizontal': props.orientation === 'horizontal',
            'p-stepper-vertical': props.orientation === 'vertical',
            'p-readonly': props.linear
        }
    ],
    list: 'p-stepper-list',
    stepper: {
        item: ({ instance, step, index }) => [
            'p-stepper-item',
            {
                'p-stepper-item-active': instance.isStepActive(index),
                'p-disabled': instance.isItemDisabled(index)
            }
        ],
        itemHeader: 'p-stepper-item-header',
        itemNumber: 'p-stepper-item-number',
        itemTitle: 'p-stepper-item-title',
        separator: 'p-stepper-separator',
        panelContentContainer: 'p-stepper-panel-content-container',
        panelContent: 'p-stepper-panel-content'
    },
    panels: 'p-stepper-panels',
    panel: ({ instance, props, index }) => [
        'p-stepper-panel',
        {
            'p-stepper-panel-active': props.orientation === 'vertical' && instance.isStepActive(index)
        }
    ]
};

export default BaseStyle.extend({
    name: 'stepper',
    classes
});
