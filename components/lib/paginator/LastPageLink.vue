<template>
    <button v-ripple :class="cx('lastPageButton')" type="button" v-bind="getPTOptions('lastPageButton')">
        <component :is="template || 'AngleDoubleRightIcon'" :class="cx('lastPageIcon')" v-bind="getPTOptions('lastPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleDoubleRightIcon from 'primevue/icons/angledoubleright';
import Ripple from 'primevue/ripple';

export default {
    name: 'LastPageLink',
    hostName: 'Paginator',
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
    components: {
        AngleDoubleRightIcon: AngleDoubleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
