import { style } from '@primeuix/styles/tag';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-tag p-component',
        {
            'p-tag-info': props.severity === 'info',
            'p-tag-success': props.severity === 'success',
            'p-tag-warn': props.severity === 'warn',
            'p-tag-danger': props.severity === 'danger',
            'p-tag-secondary': props.severity === 'secondary',
            'p-tag-contrast': props.severity === 'contrast',
            'p-tag-rounded': props.rounded
        }
    ],
    icon: 'p-tag-icon',
    label: 'p-tag-label'
};

export default BaseStyle.extend({
    name: 'tag',
    style,
    classes
});
