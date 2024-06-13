<template>
    <nav :class="cx('root')" v-bind="ptmi('root')">
        <ol :class="cx('list')" v-bind="ptm('list')">
            <BreadcrumbItem v-if="home" :item="home" :class="cx('homeItem')" :templates="$slots" :pt="pt" :unstyled="unstyled" v-bind="ptm('homeItem')" />
            <template v-for="(item, i) of model" :key="item.label + '_' + i">
                <li v-if="home || i !== 0" :class="cx('separator')" v-bind="ptm('separator')">
                    <slot name="separator">
                        <ChevronRightIcon aria-hidden="true" v-bind="ptm('separatorIcon')" />
                    </slot>
                </li>
                <BreadcrumbItem :item="item" :index="i" :templates="$slots" :pt="pt" :unstyled="unstyled" />
            </template>
        </ol>
    </nav>
</template>

<script>
import ChevronRightIcon from '@primevue/icons/chevronright';
import BaseBreadcrumb from './BaseBreadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

export default {
    name: 'Breadcrumb',
    extends: BaseBreadcrumb,
    inheritAttrs: false,
    components: {
        BreadcrumbItem,
        ChevronRightIcon
    }
};
</script>
