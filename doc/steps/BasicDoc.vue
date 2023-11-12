<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
        <Steps :model="items" />
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
<Steps :model="items" />
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
        <Steps :model="items" />
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
