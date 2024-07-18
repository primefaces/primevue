import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-step',
        {
            'p-step-active': instance.active,
            'p-disabled': instance.isStepDisabled
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
