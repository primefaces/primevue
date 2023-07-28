<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
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
