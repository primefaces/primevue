<script>
import BaseComponent from 'primevue/basecomponent';
import SidebarStyle from 'primevue/sidebar/style';

export default {
    name: 'BaseSidebar',
    extends: BaseComponent,
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'left'
        },
        header: {
            type: null,
            default: null
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        dismissable: {
            type: Boolean,
            default: true
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        modal: {
            type: Boolean,
            default: true
        },
        blockScroll: {
            type: Boolean,
            default: false
        }
    },
    style: SidebarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    },
    watch: {
        dismissable(newValue) {
            if (newValue) {
                this.bindOutsideClickListener();
            } else {
                this.unbindOutsideClickListener();
            }
        }
    }
};
</script>
