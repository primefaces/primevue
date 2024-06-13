import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: ${dt('rating.gap')};
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: background ${dt('rating.transition.duration')}, color ${dt('rating.transition.duration')}, border-color ${dt('rating.transition.duration')}, outline-color ${dt('rating.transition.duration')}, box-shadow ${dt(
        'rating.transition.duration'
    )};
}

.p-rating-option.p-focus-visible {
    box-shadow: ${dt('focus.ring.shadow')};
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-rating-icon {
    color: ${dt('rating.icon.color')};
    transition: background ${dt('rating.transition.duration')}, color ${dt('rating.transition.duration')}, border-color ${dt('rating.transition.duration')}, outline-color ${dt('rating.transition.duration')}, box-shadow ${dt(
        'rating.transition.duration'
    )};
    font-size: ${dt('rating.icon.size')};
    width: ${dt('rating.icon.size')};
    height: ${dt('rating.icon.size')};
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: ${dt('rating.icon.hover.color')};
}

.p-rating-option-active .p-rating-icon {
    color: ${dt('rating.icon.active.color')};
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
    option: ({ instance, props, value }) => [
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
    theme,
    classes
});
