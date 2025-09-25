<template>
    <Dialog
        v-model:visible="visible"
        role="alertdialog"
        :class="cx('root')"
        :modal="modal"
        :header="header"
        :blockScroll="blockScroll"
        :appendTo="appendTo"
        :position="position"
        :breakpoints="breakpoints"
        :closeOnEscape="closeOnEscape"
        :draggable="draggable"
        @update:visible="onHide"
        :pt="pt"
        :unstyled="unstyled"
    >
        <template v-if="$slots.container" #container="slotProps">
            <slot name="container" :message="confirmation" :closeCallback="slotProps.closeCallback" :acceptCallback="accept" :rejectCallback="reject" :initDragCallback="slotProps.initDragCallback" />
        </template>
        <template v-if="!$slots.container">
            <template v-if="!$slots.message">
                <slot name="icon">
                    <component v-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" />
                    <span v-else-if="confirmation.icon" :class="[confirmation.icon, cx('icon')]" v-bind="ptm('icon')" />
                </slot>
                <span :class="cx('message')" v-bind="ptm('message')">{{ message }}</span>
            </template>
            <component v-else :is="$slots.message" :message="confirmation"></component>
        </template>
        <template v-if="!$slots.container" #footer>
            <Button
                :class="[cx('pcRejectButton'), confirmation.rejectClass]"
                :autofocus="autoFocusReject"
                :unstyled="unstyled"
                :text="confirmation.rejectProps?.text || false"
                @click="reject()"
                v-bind="confirmation.rejectProps"
                :label="rejectLabel"
                :pt="ptm('pcRejectButton')"
            >
                <template v-if="rejectIcon || $slots.rejecticon" #icon="iconProps">
                    <slot name="rejecticon">
                        <span :class="[rejectIcon, iconProps.class]" v-bind="ptm('pcRejectButton')['icon']" data-pc-section="rejectbuttonicon" />
                    </slot>
                </template>
            </Button>
            <Button :label="acceptLabel" :class="[cx('pcAcceptButton'), confirmation.acceptClass]" :autofocus="autoFocusAccept" :unstyled="unstyled" @click="accept()" v-bind="confirmation.acceptProps" :pt="ptm('pcAcceptButton')">
                <template v-if="acceptIcon || $slots.accepticon" #icon="iconProps">
                    <slot name="accepticon">
                        <span :class="[acceptIcon, iconProps.class]" v-bind="ptm('pcAcceptButton')['icon']" data-pc-section="acceptbuttonicon" />
                    </slot>
                </template>
            </Button>
        </template>
    </Dialog>
</template>

<script>
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import Dialog from 'primevue/dialog';
import BaseConfirmDialog from './BaseConfirmDialog.vue';

export default {
    name: 'ConfirmDialog',
    extends: BaseConfirmDialog,
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
        appendTo() {
            return this.confirmation ? this.confirmation.appendTo : 'body';
        },
        target() {
            return this.confirmation ? this.confirmation.target : null;
        },
        modal() {
            return this.confirmation ? (this.confirmation.modal == null ? true : this.confirmation.modal) : true;
        },
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
        acceptLabel() {
            if (this.confirmation) {
                const confirmation = this.confirmation;

                return confirmation.acceptLabel || confirmation.acceptProps?.label || this.$primevue.config.locale.accept;
            }

            return this.$primevue.config.locale.accept;
        },
        rejectLabel() {
            if (this.confirmation) {
                const confirmation = this.confirmation;

                return confirmation.rejectLabel || confirmation.rejectProps?.label || this.$primevue.config.locale.reject;
            }

            return this.$primevue.config.locale.reject;
        },
        acceptIcon() {
            return this.confirmation ? this.confirmation.acceptIcon : this.confirmation?.acceptProps ? this.confirmation.acceptProps.icon : null;
        },
        rejectIcon() {
            return this.confirmation ? this.confirmation.rejectIcon : this.confirmation?.rejectProps ? this.confirmation.rejectProps.icon : null;
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
        Dialog,
        Button
    }
};
</script>
