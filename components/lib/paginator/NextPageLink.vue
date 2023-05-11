<template>
    <button v-ripple :class="containerClass" type="button" v-bind="getPTOptions('nextPageButton')">
        <component :is="template || 'AngleRightIcon'" class="p-paginator-icon" v-bind="getPTOptions('nextPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleRightIcon from 'primevue/icons/angleright';
import Ripple from 'primevue/ripple';

export default {
    name: 'NextPageLink',
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
                'p-paginator-next p-paginator-element p-link',
                {
                    'p-disabled': this.$attrs.disabled
                }
            ];
        }
    },
    components: {
        AngleRightIcon: AngleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
