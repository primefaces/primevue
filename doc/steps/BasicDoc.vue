<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
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
            </template>
        </Steps>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal',
                    route: '/steps'
                },
                {
                    label: 'Seat',
                    route: '/steps/seat'
                },
                {
                    label: 'Payment',
                    route: '/steps/payment'
                },
                {
                    label: 'Confirmation',
                    route: '/steps/confirmation'
                }
            ],
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
        <span v-else v-bind="props.action">
            <span v-bind="props.step">{{ index + 1 }}</span>
            <span v-bind="props.label">{{ label }}</span>
        </span>
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
                    <span v-else v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </span>
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
                    route: '/steps'
                },
                {
                    label: 'Seat',
                    route: '/steps/seat'
                },
                {
                    label: 'Payment',
                    route: '/steps/payment'
                },
                {
                    label: 'Confirmation',
                    route: '/steps/confirmation'
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
                    <span v-else v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </span>
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
