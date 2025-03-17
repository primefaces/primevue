<template>
    <DocSectionText v-bind="$attrs">
        <p>Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Menu from '@/volt/menu';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const items = ref([
    {
        label: 'Router Link',
        icon: 'pi pi-palette',
        route: '/introduction'
    },
    {
        label: 'Programmatic',
        icon: 'pi pi-link',
        command: () => {
            router.push('/');
        }
    },
    {
        label: 'External',
        icon: 'pi pi-home',
        url: 'https://primevue.org/'
    }
]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Menu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action" target="_self" rel="noopener noreferrer">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<script setup>
import Menu from '@/volt/menu';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const items = ref([
    {
        label: 'Router Link',
        icon: 'pi pi-palette',
        route: '/introduction'
    },
    {
        label: 'Programmatic',
        icon: 'pi pi-link',
        command: () => {
            router.push('/');
        }
    },
    {
        label: 'External',
        icon: 'pi pi-home',
        url: 'https://primevue.org/'
    }
]);
<\/script>
`);
</script>
