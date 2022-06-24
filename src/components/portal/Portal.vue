<template>
    <template v-if="inline">
        <slot></slot>
    </template>
    <Teleport v-else-if="isClient" :to="appendTo">
        <slot></slot>
    </Teleport>
</template>

<script>
import { DomHandler } from 'primevue/utils';

export default {
    name: 'Portal',
    props: {
        appendTo: {
            type: String,
            default: 'body'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        inline() {
            return this.disabled || this.appendTo === 'self';
        },
        isClient() {
            return DomHandler.isClient();
        }
    }
}
</script>
