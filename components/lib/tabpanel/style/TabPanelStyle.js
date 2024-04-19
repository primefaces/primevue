import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-tabpanel',
        {
            'p-active': instance.active
        }
    ]
};

export default BaseStyle.extend({
    name: 'tabpanel',
    classes
});
