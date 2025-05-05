import { style } from '@primeuix/styles/tabview';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-tabview p-component',
        {
            'p-tabview-scrollable': props.scrollable
        }
    ],
    navContainer: 'p-tabview-tablist-container',
    prevButton: 'p-tabview-prev-button',
    navContent: 'p-tabview-tablist-scroll-container',
    nav: 'p-tabview-tablist',
    tab: {
        header: ({ instance, tab, index }) => [
            'p-tabview-tablist-item',
            instance.getTabProp(tab, 'headerClass'),
            {
                'p-tabview-tablist-item-active': instance.d_activeIndex === index,
                'p-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'p-tabview-tab-header',
        headerTitle: 'p-tabview-tab-title',
        content: ({ instance, tab }) => ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')]
    },
    inkbar: 'p-tabview-ink-bar',
    nextButton: 'p-tabview-next-button',
    panelContainer: 'p-tabview-panels'
};

export default BaseStyle.extend({
    name: 'tabview',
    style,
    classes
});
