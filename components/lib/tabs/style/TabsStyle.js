import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-tabs p-component',
        {
            'p-tabs-scrollable': props.scrollable,
            'p-tabs-vertical': props.orientation === 'vertical'
        }
    ]
};

export default BaseStyle.extend({
    name: 'tabs',
    classes
});
