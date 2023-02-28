<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
        <Steps :model="items" aria-label="Form Steps" :readonly="false" />
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
                    to: '/steps'
                },
                {
                    label: 'Seat',
                    to: '/steps/seat'
                },
                {
                    label: 'Payment',
                    to: '/steps/payment'
                },
                {
                    label: 'Confirmation',
                    to: '/steps/confirmation'
                }
            ],
            code: {
                basic: `
<Steps :model="items" aria-label="Form Steps" />`,
                options: `
<template>
    <div>        
        <div class="card">
            <Steps :model="items" :readonly="false" aria-label="Form Steps" />
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
                    to: '/'
                },
                {
                    label: 'Seat',
                    to: '/seat'
                },
                {
                    label: 'Payment',
                    to: '/payment'
                },
                {
                    label: 'Confirmation',
                    to: '/confirmation'
                }
            ]
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div>
        <div class="card">
            <Steps :model="items" :readonly="false" aria-label="Form Steps" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Personal',
        to: "/"
    },
    {
        label: 'Seat',
        to: "/seat",
    },
    {
        label: 'Payment',
        to: "/payment",
    },
    {
        label: 'Confirmation',
        to: "/confirmation",
    }
]);
<\/script>`
            }
        };
    }
};
</script>
