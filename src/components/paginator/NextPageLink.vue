<template>
    <button v-ripple :class="containerClass" type="button">
        <span :class="['p-paginator-icon', icon]"></span>
    </button>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'NextPageLink',
    props: {
        icon: {
            type: String,
            default: 'pi pi-angle-right'
        }
    },
    computed: {
        containerClass() {
            return [
                'p-paginator-next p-paginator-element p-link',
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
