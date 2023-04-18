<template>
    <button v-ripple :class="containerClass" type="button">
        <component :is="template || 'AngleLeftIcon'" class="p-paginator-icon" />
    </button>
</template>

<script>
import AngleLeftIcon from 'primevue/icons/angleleft';
import Ripple from 'primevue/ripple';

export default {
    name: 'PrevPageLink',
    props: {
        template: {
            type: Function,
            default: null
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
    components: {
        AngleLeftIcon: AngleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
