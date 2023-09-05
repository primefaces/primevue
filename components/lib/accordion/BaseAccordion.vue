<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-accordion-header-action {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}

.p-accordion-header-action:focus {
    z-index: 1;
}

.p-accordion-header-text {
    line-height: 1;
}
`;

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

const { load: loadStyle } = useStyle(styles, { name: 'accordion', manual: true });

export default {
    name: 'BaseAccordion',
    extends: BaseComponent,
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        activeIndex: {
            type: [Number, Array],
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        },
        expandIcon: {
            type: String,
            default: undefined
        },
        collapseIcon: {
            type: String,
            default: undefined
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
