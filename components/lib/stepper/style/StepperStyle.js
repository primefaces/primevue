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
    nav: 'p-stepper-list',
    stepper: {
        header: ({ instance, step, index }) => [
            'p-stepper-item',
            {
                'p-stepper-item-active': instance.isStepActive(index),
                'p-disabled': instance.isItemDisabled(index)
            }
        ],
        action: 'p-stepper-header',
        number: 'p-stepper-number',
        title: 'p-stepper-title',
        separator: 'p-stepper-separator',
        toggleableContent: 'p-stepper-panel-content-container',
        content: 'p-stepper-panel-content'
    },
    panelContainer: 'p-stepper-panels',
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
