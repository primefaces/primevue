<template>
    <DocSectionText v-bind="$attrs">
        <p>Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<MegaMenu :model="items">
    <template #item="{ item }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
        </a>
    </template>
</MegaMenu>
`,
                options: `
<template>
    <div class="card">
        <MegaMenu :model="items">
            <template #item="{ item }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </MegaMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Navigation',
                    icon: 'pi pi-link',
                    items: [
                        [
                            {
                                label: 'Router',
                                items: [
                                    { label: 'Theming', route: '/theming/styled' },
                                    { label: 'Unstyled', route: '/theming/unstyled' }
                                ]
                            }
                        ],
                        [
                            {
                                label: 'Programmatic',
                                items: [
                                    {
                                        label: 'Installation',
                                        command: () => {
                                            this.$router.push('/introduction');
                                        }
                                    }
                                ]
                            }
                        ],
                        [
                            {
                                label: 'External',
                                items: [
                                    {
                                        label: 'Vue.js',
                                        url: 'https://vuejs.org/'
                                    },
                                    {
                                        label: 'Vite.js',
                                        url: 'https://vuejs.org/'
                                    }
                                ]
                            }
                        ]
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
        <MegaMenu :model="items">
            <template #item="{ item }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </MegaMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Navigation',
        icon: 'pi pi-link',
        items: [
            [
                {
                    label: 'Router',
                    items: [
                        { label: 'Theming', route: '/theming/styled' },
                        { label: 'Unstyled', route: '/theming/unstyled' }
                    ]
                }
            ],
            [
                {
                    label: 'Programmatic',
                    items: [
                        {
                            label: 'Installation',
                            command: () => {
                                router.push('/introduction');
                            }
                        }
                    ]
                }
            ],
            [
                {
                    label: 'External',
                    items: [
                        {
                            label: 'Vue.js',
                            url: 'https://vuejs.org/'
                        },
                        {
                            label: 'Vite.js',
                            url: 'https://vuejs.org/'
                        }
                    ]
                }
            ]
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
