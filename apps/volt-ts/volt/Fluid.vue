<template>
    <Fluid unstyled>
        <slot></slot>
    </Fluid>
</template>

<script setup lang="ts">
import Fluid, { type FluidProps } from 'primevue/fluid';

interface Props extends /* @vue-ignore */ FluidProps {}
defineProps<Props>();
</script>
