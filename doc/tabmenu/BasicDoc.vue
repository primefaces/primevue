<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps requires a collection of menuitems as its <i>model</i>. TabMenu can be also integrated with Vue Router.</p>
    </DocSectionText>
    <div class="card">
        <TabMenu :model="items" />
        <router-view />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu' },
                { label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar' },
                { label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit' },
                { label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation' },
                { label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings' }
            ],
            code: {
                basic: `
<TabMenu :model="items" />
<router-view />`,
                options: `
<template>
    <div class="card">
        <TabMenu :model="items" />
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    to: '/edit'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file',
                    to: '/documentation'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    to: '/settings'
                }
            ]
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card">
        <TabMenu :model="items" />
        <router-view />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        to: '/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        to: '/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        to: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        to: '/settings'
    }
]);

<\/script>`,
                pages: [
                    {
                        tabName: 'HomeDemo',
                        content: `
<template>
    <div class="tabmenudemo-content">
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
    <div class="tabmenudemo-content">
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
    <div class="tabmenudemo-content">
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
    <div class="tabmenudemo-content">
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
    <div class="tabmenudemo-content">
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
    }
};
</script>
