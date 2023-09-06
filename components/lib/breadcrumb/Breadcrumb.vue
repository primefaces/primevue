<template>
    <nav :class="cx('root')" v-bind="ptm('root')" data-pc-name="breadcrumb">
        <ol :class="cx('menu')" v-bind="ptm('menu')">
            <BreadcrumbItem v-if="home" :item="home" :class="cx('home')" :templates="$slots" :exact="exact" :pt="pt" :unstyled="unstyled" v-bind="ptm('home')" />
            <template v-for="(item, i) of model" :key="item.label + '_' + i">
                <li v-if="home || i !== 0" :class="cx('separator')" v-bind="ptm('separator')">
                    <slot name="separator">
                        <ChevronRightIcon aria-hidden="true" v-bind="ptm('separatorIcon')" />
                    </slot>
                </li>
                <BreadcrumbItem :item="item" :index="i" :templates="$slots" :exact="exact" :pt="pt" :unstyled="unstyled" />
            </template>
        </ol>
    </nav>
</template>

<script>
import ChevronRightIcon from 'primevue/icons/chevronright';
import BaseBreadcrumb from './BaseBreadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

export default {
    name: 'Breadcrumb',
    extends: BaseBreadcrumb,
    beforeMount() {
        if (!this.$slots.item) {
            console.warn('In future versions, vue-router support will be removed. Item templating should be used.');
        }
    },
    components: {
        BreadcrumbItem: BreadcrumbItem,
        ChevronRightIcon: ChevronRightIcon
    }
};
</script>
