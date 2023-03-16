<template>
    <CDialog
        v-model:visible="visible"
        role="alertdialog"
        class="p-confirm-dialog"
        :modal="true"
        :header="header"
        :blockScroll="blockScroll"
        :position="position"
        :breakpoints="breakpoints"
        :closeOnEscape="closeOnEscape"
        :draggable="draggable"
        @update:visible="onHide"
    >
        <template v-if="!$slots.message">
            <i v-if="confirmation.icon" :class="iconClass" />
            <span class="p-confirm-dialog-message">{{ message }}</span>
        </template>
        <component v-else :is="$slots.message" :message="confirmation"></component>
        <template #footer>
            <CDButton :label="rejectLabel" :icon="rejectIcon" :class="rejectClass" @click="reject()" :autofocus="autoFocusReject" />
            <CDButton :label="acceptLabel" :icon="acceptIcon" :class="acceptClass" @click="accept()" :autofocus="autoFocusAccept" />
        </template>
    </CDialog>
</template>

<script>
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import Dialog from 'primevue/dialog';

export default {
    name: 'ConfirmDialog',
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
    confirmListener: null,
    closeListener: null,
    data() {
        return {
            visible: false,
            confirmation: null
        };
    },
    mounted() {
        this.confirmListener = (options) => {
            if (!options) {
                return;
            }

            if (options.group === this.group) {
                this.confirmation = options;

                if (this.confirmation.onShow) {
                    this.confirmation.onShow();
                }

                this.visible = true;
            }
        };

        this.closeListener = () => {
            this.visible = false;
            this.confirmation = null;
        };

        ConfirmationEventBus.on('confirm', this.confirmListener);
        ConfirmationEventBus.on('close', this.closeListener);
    },
    beforeUnmount() {
        ConfirmationEventBus.off('confirm', this.confirmListener);
        ConfirmationEventBus.off('close', this.closeListener);
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
        onHide() {
            if (this.confirmation.onHide) {
                this.confirmation.onHide();
            }

            this.visible = false;
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
            return this.confirmation ? this.confirmation.acceptLabel || this.$primevue.config.locale.accept : null;
        },
        rejectLabel() {
            return this.confirmation ? this.confirmation.rejectLabel || this.$primevue.config.locale.reject : null;
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
            return ['p-confirm-dialog-reject', this.confirmation ? this.confirmation.rejectClass || 'p-button-text' : null];
        },
        autoFocusAccept() {
            return this.confirmation.defaultFocus === undefined || this.confirmation.defaultFocus === 'accept' ? true : false;
        },
        autoFocusReject() {
            return this.confirmation.defaultFocus === 'reject' ? true : false;
        },
        closeOnEscape() {
            return this.confirmation ? this.confirmation.closeOnEscape : true;
        }
    },
    components: {
        CDialog: Dialog,
        CDButton: Button
    }
};
</script>
