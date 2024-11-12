<template>
    <template v-for="(instance, key) in instanceMap" :key="key">
        <DDialog v-model:visible="instance.visible" :_instance="instance" v-bind="instance.options.props" @hide="onDialogHide(instance)" @after-hide="onDialogAfterHide">
            <template v-if="instance.options.templates && instance.options.templates.header" #header>
                <component v-for="(header, index) in getTemplateItems(instance.options.templates.header)" :is="header" :key="index + '_header'" v-bind="instance.options.emits"></component>
            </template>
            <component :is="instance.content" v-bind="instance.options.emits"></component>
            <template v-if="instance.options.templates && instance.options.templates.footer" #footer>
                <component v-for="(footer, index) in getTemplateItems(instance.options.templates.footer)" :is="footer" :key="index + '_footer'" v-bind="instance.options.emits"></component>
            </template>
        </DDialog>
    </template>
</template>

<script>
import { UniqueComponentId } from '@primevue/core/utils';
import Dialog from 'primevue/dialog';
import DynamicDialogEventBus from 'primevue/dynamicdialogeventbus';
import BaseDynamicDialog from './BaseDynamicDialog.vue';

export default {
    name: 'DynamicDialog',
    extends: BaseDynamicDialog,
    inheritAttrs: false,
    data() {
        return {
            instanceMap: {}
        };
    },
    openListener: null,
    closeListener: null,
    currentInstance: null,
    mounted() {
        this.openListener = ({ instance }) => {
            const key = UniqueComponentId() + '_dynamic_dialog';

            instance.visible = true;
            instance.key = key;
            this.instanceMap[key] = instance;
        };

        this.closeListener = ({ instance, params }) => {
            const key = instance.key;
            const currentInstance = this.instanceMap[key];

            if (currentInstance) {
                currentInstance.visible = false;
                currentInstance.options.onClose && currentInstance.options.onClose({ data: params, type: 'config-close' });

                this.currentInstance = currentInstance;
            }
        };

        DynamicDialogEventBus.on('open', this.openListener);
        DynamicDialogEventBus.on('close', this.closeListener);
    },
    beforeUnmount() {
        DynamicDialogEventBus.off('open', this.openListener);
        DynamicDialogEventBus.off('close', this.closeListener);
    },
    methods: {
        onDialogHide(instance) {
            !this.currentInstance && instance.options.onClose && instance.options.onClose({ type: 'dialog-close' });
            delete this.instanceMap[instance.key];
        },
        onDialogAfterHide() {
            this.currentInstance && delete this.currentInstance;
            this.currentInstance = null;
        },
        getTemplateItems(template) {
            return Array.isArray(template) ? template : [template];
        }
    },
    components: {
        DDialog: Dialog
    }
};
</script>
