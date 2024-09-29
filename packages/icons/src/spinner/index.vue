<template>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="pti()">
        <circle
            cx="7"
            cy="7"
            fill="none"
            r="6.4"
            stroke="currentColor"
            stroke-dasharray="35,5.2"
            stroke-dashoffset="2.6"
            stroke-linecap="round"
            stroke-width="1.2"
        />
    </svg>
</template>

<script>
import BaseIcon from '@primevue/icons/baseicon';

export default {
    name: 'SpinnerIcon',
    extends: BaseIcon
};
</script>
