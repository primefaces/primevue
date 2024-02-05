import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-accordion p-component',
    tab: {
        root: ({ instance, index }) => [
            'p-accordion-tab',
            {
                'p-accordion-tab-active': instance.isTabActive(index)
            }
        ],
        header: ({ instance, tab, index }) => [
            'p-accordion-header',
            {
                'p-highlight': instance.isTabActive(index),
                'p-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'p-accordion-header-link p-accordion-header-action',
        headerIcon: 'p-accordion-toggle-icon',
        headerTitle: 'p-accordion-header-text',
        toggleableContent: 'p-toggleable-content',
        content: 'p-accordion-content'
    }
};

export default BaseStyle.extend({
    name: 'accordion',
    classes
});
