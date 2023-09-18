<template>
    <DocSectionText v-bind="$attrs">
        <p>TabMenu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
        </TabMenu>
        <router-view />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home', route: '/tabmenu/' },
                { label: 'Calendar', icon: 'pi pi-fw pi-calendar', route: '/tabmenu/calendar' },
                { label: 'Edit', icon: 'pi pi-fw pi-pencil', route: '/tabmenu/edit' },
                { label: 'Documentation', icon: 'pi pi-fw pi-file', route: '/tabmenu/documentation' },
                { label: 'Settings', icon: 'pi pi-fw pi-cog', route: '/tabmenu/settings' }
            ],
            code: {
                basic: `<TabMenu v-model:activeIndex="active" :model="items">
    <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
    </template>
</TabMenu>
<router-view />`,
                options: `<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
        </TabMenu>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    route: '/'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar',
                    route: '/calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    route: '/edit'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file',
                    route: '/documentation'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    route: '/settings'
                }
            ]
        }
    },
    watch: {
        $route() {
            this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
        }
    },
    mounted() {
        this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
    }
}
<\/script>`,
                composition: `<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
        </TabMenu>
        <router-view />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const actvie = ref(0);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        route: '/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        route: '/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        route: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        route: '/settings'
    }
]);

onMounted(() => {
    active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})

watch(
    route,
    () => {
        active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
    },
    { immediate: true }
);
<\/script>`,
                pages: [
                    {
                        tabName: 'HomeDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Home Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'CalendarDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Calendar Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'EditDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Edit Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'DocumentationDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Documentation Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'SettingsDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Settings Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>`
                    }
                ]
            }
        };
    },
    watch: {
        $route() {
            this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
        }
    },
    mounted() {
        this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
    }
};
</script>
