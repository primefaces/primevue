<template>
    <component :is="headerTag" class="doc-section-label">
        {{ $attrs.label }}
        <Tag v-if="$attrs.badge" :value="$attrs.badge?.value ?? $attrs.badge" class="doc-section-label-badge" :severity="$attrs.badge?.severity || 'info'"></Tag>
        <NuxtLink :id="$attrs.id" :to="`${checkRouteName}/#${$attrs.id}`" target="_self" @click="onClick"> # </NuxtLink>
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
    },
    computed: {
        checkRouteName() {
            const path = this.$router.currentRoute.value.path;

            if (path.lastIndexOf('/') === path.length - 1) {
                return path.slice(0, -1);
            }

            return path;
        },
        headerTag() {
            if (this.$attrs.level === 3) {
                return 'h4';
            } else if (this.$attrs.level === 2) {
                return 'h3';
            }

            return 'h2';
        }
    }
};
</script>
