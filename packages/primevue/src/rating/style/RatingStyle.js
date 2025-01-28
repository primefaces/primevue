import { style } from '@primeuix/styles/rating';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-rating',
        {
            'p-readonly': props.readonly,
            'p-disabled': props.disabled
        }
    ],
    option: ({ instance, value }) => [
        'p-rating-option',
        {
            'p-rating-option-active': value <= instance.d_value,
            'p-focus-visible': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
        }
    ],
    onIcon: ({ instance }) => [
        'p-rating-icon p-rating-on-icon',
        {
            'p-invalid': instance.$invalid
        }
    ],
    offIcon: ({ instance }) => [
        'p-rating-icon p-rating-off-icon',
        {
            'p-invalid': instance.$invalid
        }
    ]
};

export default BaseStyle.extend({
    name: 'rating',
    style,
    classes
});
