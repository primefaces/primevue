import { style } from '@primeuix/styles/tag';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-tag p-component',
        {
            [`p-tag-${props.severity}`]: props.severity,
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
