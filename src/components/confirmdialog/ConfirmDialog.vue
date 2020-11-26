<template>
    <CDialog v-model:visible="visible" :modal="true" :header="header" :blockScroll="blockScroll" :position="position" class="p-confirm-dialog">
        <i :class="iconClass" /> 
        <span class="p-confirm-dialog-message">{{message}}</span>
        <template #footer>
            <CDButton :label="rejectLabel" :icon="rejectIcon" :class="rejectClass" @click="reject()"/>
            <CDButton :label="acceptLabel" :icon="acceptIcon" :class="acceptClass" @click="accept()" autofocus />
        </template>
    </CDialog>
</template>

<script>
import ConfirmationEventBus from '../confirmation/ConfirmationEventBus';
import Dialog from '../dialog/Dialog';
import Button from '../button/Button';

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
    beforeUnmount() {
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
            return this.confirmation ? (this.confirmation.acceptLabel || 'Yes') : null;
        },
        rejectLabel() {
            return this.confirmation ? (this.confirmation.rejectLabel || 'No') : null;
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