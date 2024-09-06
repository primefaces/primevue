<template>
    <div class="card flex flex-col items-center relative">
        <slot></slot>

        <div v-if="showValue" class="mt-3" :class="valueClass">
            <b>Value:</b> <span>{{ value }}</span>
        </div>

        <div class="absolute top-2 right-2 flex items-center gap-1 opacity-20 hover:opacity-100 transition-opacity duration-300">
            <Button
                v-tooltip.bottom="{ value: showValue ? 'Hide Value' : 'Show Value', class: 'doc-section-code-tooltip' }"
                @click="showValue = !showValue"
                class="size-8"
                severity="secondary"
            >
                <i v-if="showValue" class="pi pi-eye-slash text-lg"></i>
                <i v-else class="pi text-lg pi-eye"></i>
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: null,
            default: null
        },
        valueClass: {
            type: String,
            default: 'mt-3'
        }
    },
    data() {
        return {
            showValue: false
        };
    }
};
</script>