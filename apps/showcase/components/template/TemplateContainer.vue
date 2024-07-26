<template>
    <div class="flex flex-col gap-8">
        <template v-for="(component, index) in components" :key="'component-' + index">
            <component :is="component.name" v-bind="component.props">
                <template v-for="(slotContent, slotName) in component.slots" :key="slotName" v-slot:[slotName]>
                    <div v-html="slotContent"></div>
                </template>
            </component>
            <slot v-if="index < components.length - 1" :key="'separator-' + index" name="separator" />
        </template>
    </div>
</template>

<script>
export default {
    props: {
        templateData: {
            type: Object,
            required: true
        }
    },
    computed: {
        components() {
            return this.templateData.components.map((component) => {
                return {
                    ...component,
                    name: markRaw(component.name)
                };
            });
        }
    }
};
</script>
