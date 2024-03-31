import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-tristatecheckbox p-checkbox p-component',
        {
            'p-highlight': instance.active,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant === 'filled' || instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    checkIcon: 'p-checkbox-icon',
    uncheckIcon: 'p-checkbox-icon',
    nullableIcon: 'p-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'tristatecheckbox',
    classes
});
