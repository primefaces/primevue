<template>
	<button :class="containerClass" type="button" v-ripple>
        <Icon class="p-paginator-icon" :icon="{ commonIcon: 'angle-double-left', context: 'FirstPageLink' }" />
	</button>
</template>

<script>
import Icon from 'primevue/icon';
import Ripple from 'primevue/ripple';

export default {
    name: 'FirstPageLink',
    computed: {
        containerClass() {
            return ['p-paginator-first p-paginator-element p-link', {
                'p-disabled': this.$attrs.disabled
            }];
        }
    },
    components: {
        'Icon': Icon
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
