import { style } from '@primeuix/styles/progressbar';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-progressbar p-component',
        {
            'p-progressbar-determinate': instance.determinate,
            'p-progressbar-indeterminate': instance.indeterminate
        }
    ],
    value: 'p-progressbar-value',
    label: 'p-progressbar-label'
};

export default BaseStyle.extend({
    name: 'progressbar',
    style,
    classes
});
