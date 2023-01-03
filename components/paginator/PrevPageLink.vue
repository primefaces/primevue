<template>
    <button v-ripple :class="containerClass" type="button">
        <span :class="['p-paginator-icon', icon]" />
    </button>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'PrevPageLink',
    props: {
        icon: {
            type: String,
            default: 'pi pi-angle-left'
        }
    },
    computed: {
        containerClass() {
            return [
                'p-paginator-prev p-paginator-element p-link',
                {
                    'p-disabled': this.$attrs.disabled
                }
            ];
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
