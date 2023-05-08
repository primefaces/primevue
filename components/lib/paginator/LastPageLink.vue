<template>
    <button v-ripple :class="containerClass" type="button" v-bind="getPTOptions('lastPageButton')">
        <component :is="template || 'AngleDoubleRightIcon'" class="p-paginator-icon" v-bind="getPTOptions('lastPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleDoubleRightIcon from 'primevue/icons/angledoubleright';
import Ripple from 'primevue/ripple';

export default {
    name: 'LastPageLink',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
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
