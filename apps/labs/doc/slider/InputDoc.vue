<template>
    <DocSectionText v-bind="$attrs">
        <p>Slider is connected to an input field using two-way binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="w-56">
            <InputText v-model.number="value" class="w-full mb-4" />
            <Slider v-model="value" class="w-full" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 50,
            code: {
                basic: `
<InputText v-model.number="value" />
<Slider v-model="value" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="w-56">
            <InputText v-model.number="value" class="w-full mb-4" />
            <Slider v-model="value" class="w-full" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div class="w-56">
            <InputText v-model.number="value" class="w-full mb-4" />
            <Slider v-model="value" class="w-full" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>
`
            }
        };
    }
};
</script>
