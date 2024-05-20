<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps can be controlled programmatically using <i>activeStep</i> property.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex mb-8 gap-2 justify-end">
            <Button @click="active = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
            <Button @click="active = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
            <Button @click="active = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
        </div>
        <Steps v-model:activeStep="active" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            active: 0,
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
<div class="flex mb-2 gap-2 justify-end">
    <Button @click="active = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
    <Button @click="active = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
    <Button @click="active = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
</div>
<Steps v-model:activeStep="active" :model="items" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="active = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
            <Button @click="active = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
            <Button @click="active = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
        </div>
        <Steps v-model:activeStep="active" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
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
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="active = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
            <Button @click="active = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
            <Button @click="active = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
        </div>
        <Steps v-model:activeStep="active" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);

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
