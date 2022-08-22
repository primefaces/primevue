<template>
    <CDialog :visible="visible" :modal="true" :header="header" :blockScroll="blockScroll" :position="position" class="p-confirm-dialog" @click="closeDialog($event)">
        <i :class="iconClass" />
        <span class="p-confirm-dialog-message">{{message}}</span>
        <template #footer>
            <CDButton :label="rejectLabel" :icon="rejectIcon" :class="rejectClass" @click="reject()" :autofocus="autoFocusReject"/>
            <CDButton :label="acceptLabel" :icon="acceptIcon" :class="acceptClass" @click="accept()" :autofocus="autoFocusAccept" />
        </template>
    </CDialog>
</template>

<script>
import ConfirmationEventBus from '../confirmationeventbus/ConfirmationEventBus';
import Dialog from '../dialog/Dialog';
import Button from '../button/Button';
import DomHandler from '../utils/DomHandler';
export default {
    props: {
        group: String
    },
    data() {
        return {
            visible: false,
            confirmation: null,
        }
    },
    mounted() {
        ConfirmationEventBus.on('confirm', (options) => {
            if (!options) {
                return;
            }
            if (options.group === this.group) {
                this.confirmation = options;
                this.visible = true;
            }
        });
        ConfirmationEventBus.on('close', () => {
            this.visible = false;
            this.confirmation = null;
        });
    },
    beforeDestroy() {
        ConfirmationEventBus.off('confirm');
        ConfirmationEventBus.off('close');
    },
    methods: {
        accept() {
            if (this.confirmation.accept) {
                this.confirmation.accept();
            }
            this.visible = false;
        },
        reject() {
            if (this.confirmation.reject) {
                this.confirmation.reject();
            }
            this.visible = false;
        },
        closeDialog($event) {
            if(DomHandler.hasClass($event.target, 'p-dialog-header-close') || DomHandler.hasClass($event.target, 'p-dialog-header-close-icon')) {
                ConfirmationEventBus.off('confirm');
                ConfirmationEventBus.off('close');
                this.visible = false;
            }
        }
    },
    computed: {
        header() {
            return this.confirmation ? this.confirmation.header : null;
        },
        message() {
            return this.confirmation ? this.confirmation.message : null;
        },
        blockScroll() {
            return this.confirmation ? this.confirmation.blockScroll : true;
        },
        position() {
            return this.confirmation ? this.confirmation.position : null;
        },
        iconClass() {
            return ['p-confirm-dialog-icon', this.confirmation ? this.confirmation.icon : null];
        },
        acceptLabel() {
            return this.confirmation ? (this.confirmation.acceptLabel || this.$primevue.config.locale.accept) : null;
        },
        rejectLabel() {
            return this.confirmation ? (this.confirmation.rejectLabel || this.$primevue.config.locale.reject) : null;
        },
        acceptIcon() {
            return this.confirmation ? this.confirmation.acceptIcon : null;
        },
        rejectIcon() {
            return this.confirmation ? this.confirmation.rejectIcon : null;
        },
        acceptClass() {
            return ['p-confirm-dialog-accept', this.confirmation ? this.confirmation.acceptClass : null];
        },
        rejectClass() {
            return ['p-confirm-dialog-reject', this.confirmation ? (this.confirmation.rejectClass || 'p-button-text') : null];
        },
        autoFocusAccept() {
            return (this.confirmation.defaultFocus === undefined || this.confirmation.defaultFocus === 'accept') ? true : false;
        },
        autoFocusReject() {
            return this.confirmation.defaultFocus === 'reject' ? true : false;
        }
    },
    components: {
        'CDialog': Dialog,
        'CDButton': Button
    }
}
</script>