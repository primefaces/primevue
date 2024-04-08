import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-accordion p-component',
    tab: {
        root: ({ instance, index }) => [
            'p-accordion-panel',
            {
                'p-accordion-panel-active': instance.isTabActive(index)
            }
        ],
        header: ({ instance, tab, index }) => [
            'p-accordion-panel-header',
            {
                'p-accordion-panel-header-active': instance.isTabActive(index),
                'p-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'p-accordion-panel-header-content',
        headerIcon: 'p-accordion-panel-toggle-icon',
        headerTitle: 'p-accordion-panel-title',
        toggleableContent: 'p-accordion-panel-content-container',
        content: 'p-accordion-panel-content'
    }
};

export default BaseStyle.extend({
    name: 'accordion',
    classes
});
