<template>
    <button v-ripple :class="containerClass" type="button">
        <component :is="template || 'AngleRightIcon'" class="p-paginator-icon" />
    </button>
</template>

<script>
import AngleRightIcon from 'primevue/icons/angleright';
import Ripple from 'primevue/ripple';

export default {
    name: 'NextPageLink',
    props: {
        template: {
            type: Function,
            default: null
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
    components: {
        AngleRightIcon: AngleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
