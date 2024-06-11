<template>
    <DocSectionText v-bind="$attrs">
        <p>Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
    <DocSectionCode :code="code" hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Navigate',
                    items: [
                        {
                            label: 'Router Link',
                            icon: 'pi pi-palette',
                            route: '/theming/unstyled'
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
                            url: 'https://vuejs.org/'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<Menu :model="items">
    <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
        </a>
    </template>
</Menu>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Router Link',
                    icon: 'pi pi-palette',
                    route: '/theming/unstyled'
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
                    url: 'https://vuejs.org/'
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Router Link',
        icon: 'pi pi-palette',
        route: '/theming/unstyled'
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
        url: 'https://vuejs.org/'
    }
]);
<\/script>
`
            }
        };
    }
};
</script>
