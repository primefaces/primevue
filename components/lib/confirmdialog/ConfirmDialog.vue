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
        :pt="pt"
    >
        <template v-if="!$slots.message">
            <slot name="icon" class="p-confirm-dialog-icon">
                <component v-if="$slots.icon" :is="$slots.icon" class="p-confirm-dialog-icon" />
                <span v-else-if="confirmation.icon" :class="iconClass" v-bind="ptm('icon')" />
            </slot>
            <span class="p-confirm-dialog-message" v-bind="ptm('message')">{{ message }}</span>
        </template>
        <component v-else :is="$slots.message" :message="confirmation"></component>
        <template #footer>
            <CDButton :label="rejectLabel" :class="rejectClass" iconPos="left" @click="reject()" :autofocus="autoFocusReject" :pt="ptm('rejectButton')">
                <template #icon="iconProps">
                    <slot name="rejecticon">
                        <span :class="[rejectIcon, iconProps.class]" v-bind="ptm('rejectButton')['icon']" />
                    </slot>
                </template>
            </CDButton>
            <CDButton :label="acceptLabel" :class="acceptClass" iconPos="left" @click="accept()" :autofocus="autoFocusAccept" :pt="ptm('acceptButton')">
                <template #icon="iconProps">
                    <slot name="accepticon">
                        <span :class="[acceptIcon, iconProps.class]" v-bind="ptm('acceptButton')['icon']" />
                    </slot>
                </template>
            </CDButton>
        </template>
    </CDialog>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import Dialog from 'primevue/dialog';

export default {
    name: 'ConfirmDialog',
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
