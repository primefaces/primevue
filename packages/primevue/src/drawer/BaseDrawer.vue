<script>
import BaseComponent from '@primevue/core/basecomponent';
import DrawerStyle from 'primevue/drawer/style';

export default {
    name: 'BaseDrawer',
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
        closeButtonProps: {
            type: Object,
            default: () => {
                return { severity: 'secondary', text: true, rounded: true };
            }
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
    style: DrawerStyle,
    provide() {
        return {
            $pcDrawer: this,
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
