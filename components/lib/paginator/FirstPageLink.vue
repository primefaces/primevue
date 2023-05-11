<template>
    <button v-ripple :class="containerClass" type="button" v-bind="getPTOptions('firstPageButton')">
        <component :is="template || 'AngleDoubleLeftIcon'" class="p-paginator-icon" v-bind="getPTOptions('firstPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleDoubleLeftIcon from 'primevue/icons/angledoubleleft';
import Ripple from 'primevue/ripple';

export default {
    name: 'FirstPageLink',
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
