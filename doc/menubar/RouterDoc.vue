<template>
    <DocSectionText v-bind="$attrs">
        <p>Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.</p>
    </DocSectionText>
    <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                </a>
            </template>
        </Menubar>
    </div>
    <DocSectionCode :code="code" hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Router',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Styled',
                            route: '/theming/styled'
                        },
                        {
                            label: 'Unstyled',
                            route: '/theming/unstyled'
                        }
                    ]
                },
                {
                    label: 'Programmatic',
                    icon: 'pi pi-link',
                    command: () => {
                        this.$router.push('/introduction');
                    }
                },
                {
                    label: 'External',
                    icon: 'pi pi-home',
                    items: [
                        {
                            label: 'Vue.js',
                            url: 'https://vuejs.org/'
                        },
                        {
                            label: 'Vite.js',
                            url: 'https://vitejs.dev/'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<Menubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
    </template>
</Menubar>
`,
                options: `
<template>
    <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                </a>
            </template>
        </Menubar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Router',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Styled',
                            route: '/theming/styled'
                        },
                        {
                            label: 'Unstyled',
                            route: '/theming/unstyled'
                        }
                    ]
                },
                {
                    label: 'Programmatic',
                    icon: 'pi pi-link',
                    command: () => {
                        this.$router.push('/introduction');
                    }
                },
                {
                    label: 'External',
                    icon: 'pi pi-home',
                    items: [
                        {
                            label: 'Vue.js',
                            url: 'https://vuejs.org/'
                        },
                        {
                            label: 'Vite.js',
                            url: 'https://vitejs.dev/'
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                </a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
            {
                label: 'Styled',
                route: '/theming/styled'
            },
            {
                label: 'Unstyled',
                route: '/theming/unstyled'
            }
        ]
    },
    {
        label: 'Programmatic',
        icon: 'pi pi-link',
        command: () => {
            router.push('/introduction');
        }
    },
    {
        label: 'External',
        icon: 'pi pi-home',
        items: [
            {
                label: 'Vue.js',
                url: 'https://vuejs.org/'
            },
            {
                label: 'Vite.js',
                url: 'https://vitejs.dev/'
            }
        ]
    }
]);
<\/script>
`
            }
        };
    }
};
</script>
