<template>
	<button :class="containerClass" type="button" v-ripple>
		<Icon class="p-paginator-icon" :icon="{ commonIcon: 'angle-right', context: 'NextPageLink' }" />
	</button>
</template>

<script>
import Icon from 'primevue/icon';
import Ripple from 'primevue/ripple';

export default {
    name: 'NextPageLink',
    computed: {
        containerClass() {
            return ['p-paginator-next p-paginator-element p-link', {
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
