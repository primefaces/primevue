<template>
    <span class="p-paginator-pages">
        <button v-for="pageLink of value" :key="pageLink" :class="['p-paginator-page p-paginator-element p-link', {'p-highlight': ((pageLink - 1) === page)}]" type="button"
            @click="onPageLinkClick($event, pageLink)" v-ripple>{{pageLink}}</button>
    </span>
</template>
<script>
import Ripple from '../ripple/Ripple';

export default {
    inheritAttrs: false,
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
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>