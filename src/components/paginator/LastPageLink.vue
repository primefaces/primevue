<template>
	<button :class="containerClass" v-on="$listeners" type="button" v-ripple>
		<span class="p-paginator-icon pi pi-angle-double-right"></span>
	</button>
</template>

<script>
import Ripple from '../ripple/Ripple';

export default {
    computed: {
        containerClass() {
            return ['p-paginator-last p-paginator-element p-link', {
                'p-disabled': this.$attrs.disabled
            }];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>