<template>
    <button v-ripple :class="containerClass" type="button">
        <component :is="template || 'AngleDoubleRightIcon'" class="p-paginator-icon" />
    </button>
</template>

<script>
import AngleDoubleRightIcon from 'primevue/icons/angledoubleright';
import Ripple from 'primevue/ripple';

export default {
    name: 'LastPageLink',
    props: {
        template: {
            type: Function,
            default: null
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
    components: {
        AngleDoubleRightIcon: AngleDoubleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
