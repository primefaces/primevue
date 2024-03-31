import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-tabview p-component',
        {
            'p-tabview-scrollable': props.scrollable
        }
    ],
    navContainer: 'p-tabview-nav-container',
    previousButton: 'p-tabview-nav-prev p-tabview-nav-btn p-link',
    navContent: 'p-tabview-nav-content',
    nav: 'p-tabview-nav',
    tab: {
        header: ({ instance, tab, index }) => [
            'p-tabview-header',
            instance.getTabProp(tab, 'headerClass'),
            {
                'p-highlight': instance.d_activeIndex === index,
                'p-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'p-tabview-nav-link p-tabview-header-action',
        headerTitle: 'p-tabview-title',
        content: ({ instance, tab }) => ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')]
    },
    inkbar: 'p-tabview-ink-bar',
    nextButton: 'p-tabview-nav-next p-tabview-nav-btn p-link',
    panelContainer: 'p-tabview-panels'
};

export default BaseStyle.extend({
    name: 'tabview',
    classes
});
