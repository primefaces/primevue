import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-step',
        {
            'p-step-active': instance.active,
            'p-disabled': instance.isStepDisabled() || props.disabled
        }
    ],
    header: 'p-step-header',
    number: 'p-step-number',
    title: 'p-step-title'
};

export default BaseStyle.extend({
    name: 'step',
    classes
});
