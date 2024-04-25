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
            // @todo
            type: String,
            default: 'horizontal'
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        scrollHeight: {
            type: String,
            default: undefined
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
