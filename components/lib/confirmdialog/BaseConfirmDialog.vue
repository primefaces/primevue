<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: 'p-confirm-dialog',
    icon: ({ instance }) => ['p-confirm-dialog-icon', instance.confirmation ? instance.confirmation.icon : null],
    message: 'p-confirm-dialog-message',
    rejectButton: ({ instance }) => ['p-confirm-dialog-reject', instance.confirmation ? instance.confirmation.rejectClass || 'p-button-text' : null],
    acceptButton: ({ instance }) => ['p-confirm-dialog-accept', instance.confirmation ? instance.confirmation.acceptClass : null]
};

export default {
    name: 'BaseConfirmDialog',
    extends: BaseComponent,
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        }
    },
    css: {
        classes
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
