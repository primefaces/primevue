import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-tablist',
    content: ({ instance }) => [
        'p-tablist-content',
        {
            'p-tablist-viewport': instance.$pcTabs.scrollable
        }
    ],
    tabList: 'p-tablist-tab-list',
    activeBar: 'p-tablist-active-bar',
    prevButton: 'p-tablist-prev-button p-tablist-nav-button',
    nextButton: 'p-tablist-next-button p-tablist-nav-button'
};

export default BaseStyle.extend({
    name: 'tablist',
    classes
});
