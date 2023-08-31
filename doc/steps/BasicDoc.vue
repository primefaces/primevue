<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
        <Steps :model="items" aria-label="Form Steps" :readonly="false">
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
                basic: `<Steps :model="items" aria-label="Form Steps" :readonly="false">
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
            <Steps :model="items" aria-label="Form Steps" :readonly="false">
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
    }
}
<\/script>`,
                composition: `<template>
    <div>
        <div class="card">
            <Steps :model="items" aria-label="Form Steps" :readonly="false">
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
<\/script>`
            }
        };
    }
};
</script>
