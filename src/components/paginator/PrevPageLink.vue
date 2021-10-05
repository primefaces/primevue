<template>
	<button :class="containerClass" type="button" v-ripple>
		<Icon class="p-paginator-icon" :icon="{ commonIcon: 'angle-left', context: 'PrevPageLink' }" />
	</button>
</template>

<script>
import Ripple from 'primevue/ripple';
import Icon from 'primevue/icon';

export default {
    name: 'PrevPageLink',
    computed: {
        containerClass() {
            return ['p-paginator-prev p-paginator-element p-link', {
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
