<template>
    <component :is="$attrs.level === 2 ? 'h3' : 'h2'" class="doc-section-label">
        {{ $attrs.label }}
        <NuxtLink :id="$attrs.id" :to="`/${$router.currentRoute.value.name}/#${$attrs.id}`" target="_self" @click="onClick"> # </NuxtLink>
    </component>
    <div v-if="$attrs" class="doc-section-description">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    methods: {
        onClick(event) {
            const parentElement = event.currentTarget.parentElement;
            const hash = window.location.hash.substring(1);

            hash === this.$attrs.id && event.preventDefault();

            setTimeout(() => {
                parentElement.scrollIntoView({ block: 'start' });
            }, 0);
        }
    }
};
</script>
