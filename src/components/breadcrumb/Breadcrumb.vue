<template>
    <nav class="p-breadcrumb p-component" aria-label="Breadcrumb">
        <ul>
            <BreadcrumbItem v-if="home" :item="home" class="p-breadcrumb-home" />
            <template v-for="(item, i) of model">
                <li class="p-breadcrumb-chevron pi pi-chevron-right" :key="'chevron' + i"></li>
                <BreadcrumbItem :key="item.label + i" :item="item" />
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
        }
    },
    components: {
        'BreadcrumbItem': BreadcrumbItem
    }
}
</script>

<style>
.p-breadcrumb {
    margin: 0;
    padding: 0;
    padding: .5em;
}

.p-breadcrumb ul {
    margin: 0;
    padding: 0;
}

.p-breadcrumb ul li {
    display: inline-block;
    margin: 0 .25em;
}

.p-breadcrumb-chevron, .p-breadcrumb-home {
    vertical-align: middle;
}

.p-breadcrumb ul li .p-menuitem-link {
    text-decoration: none;
}

.p-breadcrumb .p-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.p-breadcrumb .p-menuitem-text {
    vertical-align: middle;
}
</style>