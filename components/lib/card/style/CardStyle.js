import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-card p-component',
    header: 'p-card-header',
    body: 'p-card-body',
    caption: 'p-card-caption',
    title: 'p-card-title',
    subtitle: 'p-card-subtitle',
    content: 'p-card-content',
    footer: 'p-card-footer'
};

export default BaseStyle.extend({
    name: 'card',
    classes
});
