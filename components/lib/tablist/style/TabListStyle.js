import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-tablist',
    content: ({ instance }) => [
        'p-tablist-content',
        {
            'p-tablist-scroll-container': instance.$pcTabs.scrollable
        }
    ],
    inkbar: 'p-tablist-ink-bar',
    previousButton: 'p-tablist-prev-button p-tablist-navigator',
    nextButton: 'p-tablist-next-button p-tablist-navigator'
};

export default BaseStyle.extend({
    name: 'tablist',
    classes
});
