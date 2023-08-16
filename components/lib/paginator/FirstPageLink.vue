<template>
    <button v-ripple :class="cx('firstPageButton')" type="button" v-bind="getPTOptions('firstPageButton')">
        <component :is="template || 'AngleDoubleLeftIcon'" :class="cx('firstPageIcon')" v-bind="getPTOptions('firstPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleDoubleLeftIcon from 'primevue/icons/angledoubleleft';
import Ripple from 'primevue/ripple';

export default {
    name: 'FirstPageLink',
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
        AngleDoubleLeftIcon: AngleDoubleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
