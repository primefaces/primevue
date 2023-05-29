<template>
    <CDialog
        v-model:visible="visible"
        role="alertdialog"
        :class="cx('root')"
        :modal="true"
        :header="header"
        :blockScroll="blockScroll"
        :position="position"
        :breakpoints="breakpoints"
        :closeOnEscape="closeOnEscape"
        :draggable="draggable"
        @update:visible="onHide"
        :pt="pt"
        :unstyled="unstyled"
    >
        <template v-if="!$slots.message">
            <slot name="icon">
                <component v-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" />
                <span v-else-if="confirmation.icon" :class="cx('icon')" v-bind="ptm('icon')" />
            </slot>
            <span :class="cx('message')" v-bind="ptm('message')">{{ message }}</span>
        </template>
        <component v-else :is="$slots.message" :message="confirmation"></component>
        <template #footer>
            <CDButton :label="rejectLabel" :class="cx('rejectButton')" iconPos="left" @click="reject()" :autofocus="autoFocusReject" :pt="ptm('rejectButton')">
                <template #icon="iconProps">
                    <slot name="rejecticon">
                        <span :class="cx('rejectButtonIcon', getCXOptions(rejectIcon, iconProps))" v-bind="ptm('rejectButton')['icon']" />
                    </slot>
                </template>
            </CDButton>
            <CDButton :label="acceptLabel" :class="cx('acceptButton')" iconPos="left" @click="accept()" :autofocus="autoFocusAccept" :pt="ptm('acceptButton')">
                <template #icon="iconProps">
                    <slot name="accepticon">
                        <span :class="cx('acceptButtonIcon', getCXOptions(acceptIcon, iconProps))" v-bind="ptm('acceptButton')['icon']" />
                    </slot>
                </template>
            </CDButton>
        </template>
    </CDialog>
</template>

<script>
import BaseConfirmDialog from './BaseConfirmDialog';
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import Dialog from 'primevue/dialog';

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
        },
        getCXOptions(icon, iconProps) {
            return { contenxt: { icon, iconClass: iconProps.class } };
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
