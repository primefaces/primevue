<template>
    <button v-ripple :class="containerClass" type="button">
        <span :class="['p-paginator-icon', icon]"></span>
    </button>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'LastPageLink',
    props: {
        icon: {
            type: String,
            default: 'pi pi-angle-double-right'
        }
    },
    computed: {
        containerClass() {
            return [
                'p-paginator-last p-paginator-element p-link',
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
