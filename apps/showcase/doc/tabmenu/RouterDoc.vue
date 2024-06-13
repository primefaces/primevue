<template>
    <DocSectionText v-bind="$attrs">
        <p>Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.</p>
    </DocSectionText>
    <div class="card">
        <TabMenu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ item.label }}</span>
                </a>
            </template>
        </TabMenu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Router Link', icon: 'pi pi-home', route: '/tabmenu' },
                {
                    label: 'Programmatic',
                    icon: 'pi pi-palette',
                    command: () => {
                        this.$router.push('/theming/unstyled');
                    }
                },
                { label: 'External', icon: 'pi pi-link', url: 'https://vuejs.org/' }
            ],
            code: {
                basic: `
<TabMenu :model="items">
    <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ item.label }}</span>
        </a>
    </template>
</TabMenu>
`,
                options: `
<template>
    <div class="card">
        <TabMenu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ item.label }}</span>
                </a>
            </template>
        </TabMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Router Link', icon: 'pi pi-home', route: '/tabmenu' },
                {
                    label: 'Programmatic',
                    icon: 'pi pi-palette',
                    command: () => {
                        this.$router.push('/theming/unstyled');
                    }
                },
                { label: 'External', icon: 'pi pi-link', url: 'https://vuejs.org/' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TabMenu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ item.label }}</span>
                </a>
            </template>
        </TabMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'Router Link', icon: 'pi pi-home', route: '/tabmenu' },
    {
        label: 'Programmatic',
        icon: 'pi pi-palette',
        command: () => {
            this.$router.push('/theming/unstyled');
        }
    },
    { label: 'External', icon: 'pi pi-link', url: 'https://vuejs.org/' }
]);
<\/script>
`
            }
        };
    }
};
</script>
