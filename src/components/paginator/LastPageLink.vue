<template>
	<button :class="containerClass" type="button" v-ripple>
		<Icon class="p-paginator-icon" :icon="{ commonIcon: 'angle-double-right', context: 'LastPageLink' }" />
	</button>
</template>

<script>
import Ripple from 'primevue/ripple';
import Icon from 'primevue/icon';

export default {
    name: 'LastPageLink',
    computed: {
        containerClass() {
            return ['p-paginator-last p-paginator-element p-link', {
                'p-disabled': this.$attrs.disabled
            }];
        }
    },
    components: {
        'Icon': Icon,
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
