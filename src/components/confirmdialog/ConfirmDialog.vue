<template>
    <CDialog v-model:visible="visible" :modal="true" :header="header" :blockScroll="blockScroll" :position="position" class="p-confirm-dialog"
        :breakpoints="breakpoints">
        <i :class="iconClass" />
        <span class="p-confirm-dialog-message">{{message}}</span>
        <template #footer>
            <CDButton :label="rejectLabel" :icon="rejectIcon" :class="rejectClass" @click="reject()"/>
            <CDButton :label="acceptLabel" :icon="acceptIcon" :class="acceptClass" @click="accept()" autofocus />
        </template>
    </CDialog>
</template>

<script>
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default {
    name: 'ConfirmDialog',
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        }
    },
    confirmListener: null,
    closeListener: null,
    data() {
        return {
            visible: false,
            confirmation: null,
        }
    },
    mounted() {
        this.confirmListener = (options) => {
            if (!options) {
                return;
            }

            if (options.group === this.group) {
                this.confirmation = options;
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
        }
    },
    components: {
        'CDialog': Dialog,
        'CDButton': Button
    }
}
</script>
