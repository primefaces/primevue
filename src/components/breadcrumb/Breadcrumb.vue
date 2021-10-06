<template>
    <nav class="p-breadcrumb p-component" aria-label="Breadcrumb">
        <ul>
            <BreadcrumbItem v-if="home" :item="home" class="p-breadcrumb-home" :template="$slots.item" :exact="exact" />
            <template v-for="item of model" :key="item.label">
                <Icon tag="li" class="p-breadcrumb-chevron" :icon="{ commonIcon: 'chevron-right', context: 'Breadbrumb'}" />
                <BreadcrumbItem :item="item" :template="$slots.item" :exact="exact" />
            </template>
        </ul>
    </nav>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem.vue';
import Icon from 'primevue/icon';

export default {
    name: 'Breadcrumb',
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
        'BreadcrumbItem': BreadcrumbItem,
        'Icon': Icon
    }
}
</script>

<style>
.p-breadcrumb {
    overflow-x: auto;
}

.p-breadcrumb ul {
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
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}
</style>
