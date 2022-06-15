<template>
    <template v-for="(instance, key) in instanceMap" :key="key">
        <DDialog :_instance="instance" v-bind="instance.options.props" v-model:visible="instance.visible" @hide="onDialogHide(instance)" @after-hide="onDialogAfterHide">
            <template #header v-if="instance.options.templates && instance.options.templates.header">
                <component :is="header" v-for="(header, index) in getTemplateItems(instance.options.templates.header)" :key="index + '_header'"></component>
            </template>
            <component :is="instance.content"></component>
            <template #footer v-if="instance.options.templates && instance.options.templates.footer">
                <component :is="footer" v-for="(footer, index) in getTemplateItems(instance.options.templates.footer)" :key="index + '_footer'"></component>
            </template>
        </DDialog>
    </template>
</template>

<script>
import { UniqueComponentId } from 'primevue/utils';
import DynamicDialogEventBus from 'primevue/dynamicdialogeventbus';
import Dialog from 'primevue/dialog';

export default {
    name: 'DynamicDialog',
    inheritAttrs: false,
    data() {
        return {
            instanceMap: {}
        }
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
                currentInstance.options.onClose && currentInstance.options.onClose({ data: params,  type: 'config-close' });

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
        },
        onDialogAfterHide() {
            this.currentInstance && (delete this.currentInstance);
            this.currentInstance = null;
        },
        getTemplateItems(template) {
            return Array.isArray(template) ? template : [template];
        }
    },
    components: {
        'DDialog': Dialog
    }
}
</script>
