<script>
import BaseComponent from 'primevue/basecomponent';
import VirtualScrollerStyle from 'primevue/virtualscroller/style';

export default {
    name: 'BaseVirtualScroller',
    extends: BaseComponent,
    props: {
        id: {
            type: String,
            default: null
        },
        style: null,
        class: null,
        items: {
            type: Array,
            default: null
        },
        itemSize: {
            type: [Number, Array],
            default: 0
        },
        scrollHeight: null,
        scrollWidth: null,
        orientation: {
            type: String,
            default: 'vertical'
        },
        numToleratedItems: {
            type: Number,
            default: null
        },
        delay: {
            type: Number,
            default: 0
        },
        resizeDelay: {
            type: Number,
            default: 10
        },
        lazy: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loaderDisabled: {
            type: Boolean,
            default: false
        },
        columns: {
            type: Array,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        showSpacer: {
            type: Boolean,
            default: true
        },
        showLoader: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        inline: {
            type: Boolean,
            default: false
        },
        step: {
            type: Number,
            default: 0
        },
        appendOnly: {
            type: Boolean,
            default: false
        },
        autoSize: {
            type: Boolean,
            default: false
        }
    },
    style: VirtualScrollerStyle,
    provide() {
        return {
            $parentInstance: this
        };
    },
    beforeMount() {
        VirtualScrollerStyle.loadStyle({ nonce: this.$config?.csp?.nonce });
    }
};
</script>
