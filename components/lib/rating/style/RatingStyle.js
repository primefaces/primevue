import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-rating',
        {
            'p-readonly': props.readonly,
            'p-disabled': props.disabled
        }
    ],
    item: ({ instance, props, value }) => [
        'p-rating-option',
        {
            'p-rating-option-active': value <= props.modelValue,
            'p-focus-visible': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
        }
    ],
    onIcon: 'p-rating-icon p-rating-on-icon',
    offIcon: 'p-rating-icon p-rating-off-icon'
};

export default BaseStyle.extend({
    name: 'rating',
    classes
});
