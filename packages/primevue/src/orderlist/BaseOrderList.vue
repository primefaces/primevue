<script>
import BaseComponent from '@primevue/core/basecomponent';
import OrderListStyle from 'primevue/orderlist/style';

export default {
    name: 'BaseOrderList',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Array,
            default: null
        },
        selection: {
            type: Array,
            default: null
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
        striped: {
            type: Boolean,
            default: false
        },
        scrollHeight: {
            type: String,
            default: '14rem'
        },
        buttonProps: {
            type: Object,
            default() {
                return { severity: 'secondary' };
            }
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
        tabindex: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: OrderListStyle,
    provide() {
        return {
            $pcOrderList: this,
            $parentInstance: this
        };
    }
};
</script>
