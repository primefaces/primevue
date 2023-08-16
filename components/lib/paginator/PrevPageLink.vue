<template>
    <button v-ripple :class="cx('previousPageButton')" type="button" v-bind="getPTOptions('previousPageButton')">
        <component :is="template || 'AngleLeftIcon'" :class="cx('previousPageIcon')" v-bind="getPTOptions('previousPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleLeftIcon from 'primevue/icons/angleleft';
import Ripple from 'primevue/ripple';

export default {
    name: 'PrevPageLink',
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
        AngleLeftIcon: AngleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
