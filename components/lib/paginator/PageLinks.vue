<template>
    <span class="p-paginator-pages">
        <button
            v-for="pageLink of value"
            :key="pageLink"
            v-ripple
            :class="['p-paginator-page p-paginator-element p-link', { 'p-highlight': pageLink - 1 === page }]"
            type="button"
            :aria-label="ariaPageLabel(pageLink)"
            :aria-current="pageLink - 1 === page ? 'page' : undefined"
            @click="onPageLinkClick($event, pageLink)"
        >
            {{ pageLink }}
        </button>
    </span>
</template>
<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'PageLinks',
    inheritAttrs: false,
    emits: ['click'],
    props: {
        value: Array,
        page: Number
    },
    methods: {
        onPageLinkClick(event, pageLink) {
            this.$emit('click', {
                originalEvent: event,
                value: pageLink
            });
        },
        ariaPageLabel(value) {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : undefined;
        }
    },
    computed: {},
    directives: {
        ripple: Ripple
    }
};
</script>
