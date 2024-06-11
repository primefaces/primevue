<script>
import BaseComponent from '@primevue/core/basecomponent';
import TabViewStyle from 'primevue/tabview/style';

export default {
    name: 'BaseTabView',
    extends: BaseComponent,
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        prevButtonProps: {
            type: null,
            default: null
        },
        nextButtonProps: {
            type: null,
            default: null
        },
        prevIcon: {
            type: String,
            default: undefined
        },
        nextIcon: {
            type: String,
            default: undefined
        }
    },
    style: TabViewStyle,
    provide() {
        return {
            $pcTabs: undefined, // Backwards compatible to prevent <TabPanel> component from breaking
            $pcTabView: this,
            $parentInstance: this
        };
    }
};
</script>
