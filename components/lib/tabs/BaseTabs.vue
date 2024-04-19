<script>
import BaseComponent from 'primevue/basecomponent';
import TabsStyle from 'primevue/tabs/style';

export default {
    name: 'BaseTabs',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        },
        lazy: {
            type: Boolean,
            default: false
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        showNavigators: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        previousButtonProps: {
            type: Object,
            default: () => {
                return { severity: 'secondary', text: true };
            }
        },
        nextButtonProps: {
            type: Object,
            default: () => {
                return { severity: 'secondary', text: true };
            }
        }
    },
    style: TabsStyle,
    provide() {
        return {
            $pcTabs: this,
            $parentInstance: this
        };
    }
};
</script>
