<template>
    <button v-ripple :class="containerClass" type="button" v-bind="getPTOptions('prevPageButton')">
        <component :is="template || 'AngleLeftIcon'" class="p-paginator-icon" v-bind="getPTOptions('prevPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleLeftIcon from 'primevue/icons/angleleft';
import Ripple from 'primevue/ripple';

export default {
    name: 'PrevPageLink',
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
