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
        targetListProps: {
            type: null,
            default: null
        },
        sourceListProps: {
            type: null,
            default: null
        },
        moveUpButtonProps: {
            type: null,
            default: null
        },
        moveTopButtonProps: {
            type: null,
            default: null
        },
        moveDownButtonProps: {
            type: null,
            default: null
        },
        moveBottomButtonProps: {
            type: null,
            default: null
        },
        moveToTargetProps: {
            type: null,
            default: null
        },
        moveAllToTargetProps: {
            type: null,
            default: null
        },
        moveToSourceProps: {
            type: null,
            default: null
        },
        moveAllToSourceProps: {
            type: null,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
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
