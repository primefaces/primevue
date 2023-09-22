<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as
            <i>NuxtLink</i> or <i>router-link</i>. Here is an example with vue-router.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-if="item.icon" v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                route: '/'
            },
            items: [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }],
            code: {
                basic: `
<Breadcrumb :home="home" :model="items">
    <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-if="item.icon" v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
        </a>
    </template>
</Breadcrumb>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-if="item.icon" v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                route: '/'
            },
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-if="item.icon" v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});
const items = ref([
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
]);
<\/script>`
            }
        };
    }
};
</script>
