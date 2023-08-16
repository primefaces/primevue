<template>
    <button v-ripple :class="cx('nextPageButton')" type="button" v-bind="getPTOptions('nextPageButton')">
        <component :is="template || 'AngleRightIcon'" :class="cx('nextPageIcon')" v-bind="getPTOptions('nextPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleRightIcon from 'primevue/icons/angleright';
import Ripple from 'primevue/ripple';

export default {
    name: 'NextPageLink',
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
        AngleRightIcon: AngleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
