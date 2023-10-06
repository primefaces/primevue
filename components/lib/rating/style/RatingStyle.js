import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-rating {
        position: relative;
        display: flex;
        align-items: center;
    }

    .p-rating-item {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    .p-rating.p-readonly .p-rating-item {
        cursor: default;
    }
}
`;

const classes = {
    root: ({ props }) => [
        'p-rating',
        {
            'p-readonly': props.readonly,
            'p-disabled': props.disabled
        }
    ],
    cancelItem: ({ instance }) => [
        'p-rating-item p-rating-cancel-item',
        {
            'p-focus': instance.focusedOptionIndex === 0 && instance.isFocusVisibleItem
        }
    ],
    cancelIcon: 'p-rating-icon p-rating-cancel',
    item: ({ instance, props, value }) => [
        'p-rating-item',
        {
            'p-rating-item-active': value <= props.modelValue,
            'p-focus': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
        }
    ],
    onIcon: 'p-rating-icon',
    offIcon: 'p-rating-icon'
};

export default BaseStyle.extend({
    name: 'rating',
    css,
    classes
});
