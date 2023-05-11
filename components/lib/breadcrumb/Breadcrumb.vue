<template>
    <nav class="p-breadcrumb p-component" v-bind="ptm('root')">
        <ol class="p-breadcrumb-list" v-bind="ptm('menu')">
            <BreadcrumbItem v-if="home" :item="home" class="p-breadcrumb-home" :templates="$slots" :exact="exact" :pt="pt" />
            <template v-for="(item, i) of model" :key="item.label">
                <li v-if="home || i !== 0" class="p-menuitem-separator" v-bind="ptm('separator')">
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
import BaseComponent from 'primevue/basecomponent';
import ChevronRightIcon from 'primevue/icons/chevronright';
import BreadcrumbItem from './BreadcrumbItem.vue';

export default {
    name: 'Breadcrumb',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    components: {
        BreadcrumbItem: BreadcrumbItem,
        ChevronRightIcon: ChevronRightIcon
    }
};
</script>

<style>
.p-breadcrumb {
    overflow-x: auto;
}

.p-breadcrumb .p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.p-breadcrumb .p-menuitem-text {
    line-height: 1;
}

.p-breadcrumb .p-menuitem-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.p-breadcrumb .p-menuitem-separator {
    display: flex;
    align-items: center;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}
</style>
