<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Steps
            :model="items"
            :readonly="false"
            :pt="{
                root: { class: 'w-30rem' }
            }"
        />
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
<Steps
    :model="items"
    :readonly="false"
    :pt="{
        root: { class: 'w-30rem' }
    }"
/>
`,
                options: `
<template>
    <div>        
        <div class="card">
            <Steps
                :model="items"
                :readonly="false"
                :pt="{
                    root: { class: 'w-30rem' }
                }"
            />
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
<\/script>
`,
                composition: `
<template>
    <div>
        <div class="card">
            <Steps
                :model="items"
                :readonly="false"
                :pt="{
                    root: { class: 'w-30rem' }
                }"
            />
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
<\/script>
`
            }
        };
    }
};
</script>
