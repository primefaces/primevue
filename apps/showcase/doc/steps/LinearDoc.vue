<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps is linear by default to enforce completion of a previus step to proceed, set <i>readonly</i> as false for non-linear mode.</p>
    </DocSectionText>
    <div class="card">
        <Steps :model="items" :readonly="false" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal Info'
                },
                {
                    label: 'Reservation'
                },
                {
                    label: 'Review'
                }
            ],
            code: {
                basic: `
<Steps :model="items" :readonly="false" />
`,
                options: `
<template>
    <div class="card">
        <Steps :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal Info'
                },
                {
                    label: 'Reservation'
                },
                {
                    label: 'Review'
                }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Steps :model="items" :readonly="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Personal Info'
    },
    {
        label: 'Reservation'
    },
    {
        label: 'Review'
    }
]);

<\/script>
`
            }
        };
    }
};
</script>
