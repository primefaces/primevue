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
    nav: 'p-stepper-nav',
    stepper: {
        header: ({ instance, step, index }) => [
            'p-stepper-header',
            {
                'p-highlight': instance.isStepActive(index),
                'p-disabled': instance.isItemDisabled(index)
            }
        ],
        action: 'p-stepper-action',
        number: 'p-stepper-number',
        title: 'p-stepper-title',
        separator: 'p-stepper-separator',
        toggleableContent: 'p-stepper-toggleable-content',
        content: ({ props }) => [
            'p-stepper-content',
            {
                'p-toggleable-content': props.orientation === 'vertical'
            }
        ]
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
