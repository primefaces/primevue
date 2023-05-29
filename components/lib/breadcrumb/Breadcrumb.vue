<template>
    <nav :class="cx('root')" v-bind="ptm('root')" data-pc-name="breadcrumb">
        <ol :class="cx('menu')" v-bind="ptm('menu')">
            <BreadcrumbItem v-if="home" :item="home" :class="cx('home')" :templates="$slots" :exact="exact" :pt="pt" v-bind="ptm('home')" />
            <template v-for="(item, i) of model" :key="item.label">
                <li v-if="home || i !== 0" :class="cx('separator')" v-bind="ptm('separator')">
                    <slot name="separator">
                        <ChevronRightIcon aria-hidden="true" v-bind="ptm('separatorIcon')" />
                    </slot>
                </li>
                <BreadcrumbItem :item="item" :index="i" :templates="$slots" :exact="exact" :pt="pt" />
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
    components: {
        BreadcrumbItem: BreadcrumbItem,
        ChevronRightIcon: ChevronRightIcon
    }
};
</script>
