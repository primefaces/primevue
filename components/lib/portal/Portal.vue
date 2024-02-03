<template>
    <template v-if="inline">
        <slot></slot>
    </template>
    <template v-else-if="mounted">
        <Teleport :to="appendTo">
            <slot></slot>
        </Teleport>
    </template>
</template>

<script>
import { DomHandler } from 'primevue/utils';

export default {
    name: 'Portal',
    props: {
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            mounted: false
        };
    },
    mounted() {
        this.mounted = DomHandler.isClient();
    },
    computed: {
        inline() {
            return this.disabled || this.appendTo === 'self';
        }
    }
};
</script>
