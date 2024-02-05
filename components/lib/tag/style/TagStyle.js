import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-tag p-component',
        {
            'p-tag-info': props.severity === 'info',
            'p-tag-success': props.severity === 'success',
            'p-tag-warning': props.severity === 'warning',
            'p-tag-danger': props.severity === 'danger',
            'p-tag-secondary': props.severity === 'secondary',
            'p-tag-contrast': props.severity === 'contrast',
            'p-tag-rounded': props.rounded
        }
    ],
    icon: 'p-tag-icon',
    value: 'p-tag-value'
};

export default BaseStyle.extend({
    name: 'tag',
    classes
});
