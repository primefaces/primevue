<template>
    <DocSectionText v-bind="$attrs">
        <p>Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
    <DocSectionCode :code="code" hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                route: '/introduction'
            },
            items: [{ label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }],
            code: {
                basic: `
<Breadcrumb :home="home" :model="items">
    <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
                <span :class="[item.icon, 'text-color']" />
                <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
        </a>
    </template>
</Breadcrumb>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
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
                route: '/introduction'
            },
            items: [
                { label: 'Components' },
                { label: 'Form' },
                { label: 'InputText', route: '/inputtext' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    route: '/introduction'
});
const items = ref([
    { label: 'Components' },
    { label: 'Form' },
    { label: 'InputText', route: '/inputtext' }
]);
<\/script>
`
            }
        };
    }
};
</script>
