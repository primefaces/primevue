import { style } from '@primeuix/styles/selectbutton';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-selectbutton p-component',
        {
            'p-invalid': instance.$invalid // @todo: check
        }
    ]
};

export default BaseStyle.extend({
    name: 'selectbutton',
    style,
    classes
});
