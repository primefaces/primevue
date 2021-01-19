<template>
    <nav class="p-breadcrumb p-component" aria-label="Breadcrumb">
        <ul>
            <BreadcrumbItem v-if="home" :item="home" class="p-breadcrumb-home" />
            <template v-for="item of model" :key="item.label" >
                <li class="p-breadcrumb-chevron pi pi-chevron-right"></li>
                <BreadcrumbItem :item="item" />
            </template>
        </ul>
    </nav>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem.vue';

export default {
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        }
    },
    components: {
        'BreadcrumbItem': BreadcrumbItem
    }
}
</script>

<style>
.p-breadcrumb ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-breadcrumb .p-menuitem-text {
    line-height: 1;
}

.p-breadcrumb .p-menuitem-link {
    text-decoration: none;
}
</style>