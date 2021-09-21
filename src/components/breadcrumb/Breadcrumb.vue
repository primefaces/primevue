<template>
    <nav class="p-breadcrumb p-component" aria-label="Breadcrumb">
        <ul>
            <BreadcrumbItem v-if="home" :item="home" class="p-breadcrumb-home" :exact="exact" />
            <template v-for="(item, i) of model">
                <li class="p-breadcrumb-chevron pi pi-chevron-right" :key="'chevron' + i"></li>
                <BreadcrumbItem :key="item.label + i" :item="item" :exact="exact" />
            </template>
        </ul>
    </nav>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem';

export default {
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
        'BreadcrumbItem': BreadcrumbItem
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
</style>