<template>
    <button v-ripple :class="containerClass" type="button">
        <component :is="template || 'AngleDoubleLeftIcon'" class="p-paginator-icon" />
    </button>
</template>

<script>
import AngleDoubleLeftIcon from 'primevue/icons/angledoubleleft';
import Ripple from 'primevue/ripple';

export default {
    name: 'FirstPageLink',
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    computed: {
        containerClass() {
            return [
                'p-paginator-first p-paginator-element p-link',
                {
                    'p-disabled': this.$attrs.disabled
                }
            ];
        }
    },
    components: {
        AngleDoubleLeftIcon: AngleDoubleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
