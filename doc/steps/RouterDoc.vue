<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as
            <i>NuxtLink</i> or <i>router-link</i>. Here is an example with vue-router.
        </p>
    </DocSectionText>
    <!-- <div class="card">
        <Steps
            :model="items"
            aria-label="Form Steps"
            :readonly="false"
            :pt="{
                menuitem: ({ context }) => ({
                    class: isActive(context.item) && 'p-highlight p-steps-current'
                })
            }"
        >
            <template #item="{ label, item, index, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.step">{{ index + 1 }}</span>
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Steps>
    </div> -->
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            // items: [
            //     {
            //         label: 'Personal',
            //         route: '/steps/'
            //     },
            //     {
            //         label: 'Seat',
            //         route: '/steps/seat'
            //     },
            //     {
            //         label: 'Payment',
            //         route: '/steps/payment'
            //     },
            //     {
            //         label: 'Confirmation',
            //         route: '/steps/confirmation'
            //     },
            //     {
            //         label: 'File Upload',
            //         url: '/fileupload'
            //     }
            // ],
            code: {
                basic: `<Steps :model="items" aria-label="Form Steps" :readonly="false"
    :pt="{
        menuitem: ({ context }) => ({
            class: isActive(context.item) && 'p-highlight p-steps-current'
        })
    }">
    <template #item="{ label, item, index, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                <span v-bind="props.step">{{ index + 1 }}</span>
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.step">{{ index + 1 }}</span>
            <span v-bind="props.label">{{ label }}</span>
        </a>
    </template>
</Steps>`,
                options: `<template>
    <div>        
        <div class="card">
            <Steps :model="items" aria-label="Form Steps" :readonly="false"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }">
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </template>
            </Steps>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal',
                    route: '/'
                },
                {
                    label: 'Seat',
                    route: '/seat'
                },
                {
                    label: 'Payment',
                    route: '/payment'
                },
                {
                    label: 'Confirmation',
                    route: '/confirmation'
                },
                {
                    label: 'File Upload',
                    url: '/fileupload'
                }
            ]
        }
    },
    methods: {
        isActive(item) {
            return item.route ? this.$router.resolve(item.route).path === this.$route.path : false;
        }
    }
}
<\/script>`,
                composition: `<template>
    <div>
        <div class="card">
            <Steps :model="items" aria-label="Form Steps" :readonly="false"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }">
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </template>
            </Steps>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const items = ref([
    {
        label: 'Personal',
        route: "/"
    },
    {
        label: 'Seat',
        route: "/seat",
    },
    {
        label: 'Payment',
        route: "/payment",
    },
    {
        label: 'Confirmation',
        route: "/confirmation",
    },
    {
        label: 'File Upload',
        url: '/fileupload'
    }
]);

const isActive = (item) => {
    return item.route ? router.resolve(item.route).path === route.path : false;
}
<\/script>`
            }
        };
    },
    methods: {
        isActive(item) {
            return item.route ? this.$router.resolve(item.route).path === this.$route.path : false;
        }
    }
};
</script>
