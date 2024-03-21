<script>
import BaseComponent from 'primevue/basecomponent';
import PickListStyle from 'primevue/picklist/style';

export default {
    name: 'BasePickList',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Array,
            default: () => [[], []]
        },
        selection: {
            type: Array,
            default: () => [[], []]
        },
        dataKey: {
            type: String,
            default: null
        },
        listStyle: {
            type: null,
            default: null
        },
        metaKeySelection: {
            type: Boolean,
            default: false
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        focusOnHover: {
            type: Boolean,
            default: true
        },
        responsive: {
            type: Boolean,
            default: true
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        stripedRows: {
            type: Boolean,
            default: false
        },
        showSourceControls: {
            type: Boolean,
            default: true
        },
        showTargetControls: {
            type: Boolean,
            default: true
        },
        severity: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    style: PickListStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
