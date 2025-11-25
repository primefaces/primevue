import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-steppanel',
        {
            'p-steppanel-active': instance.isVertical && instance.active
        }
    ],
    contentWrapper: 'p-steppanel-content-wrapper',
    content: 'p-steppanel-content'
};

export default BaseStyle.extend({
    name: 'steppanel',
    classes
});
