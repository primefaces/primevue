<template>
    <DocSectionText v-bind="$attrs">
        <p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            options: [
                { icon: 'pi pi-align-left', value: 'Left' },
                { icon: 'pi pi-align-right', value: 'Right' },
                { icon: 'pi pi-align-center', value: 'Center' },
                { icon: 'pi pi-align-justify', value: 'Justify' }
            ],
            code: {
                basic: `
<SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
    <template #option="slotProps">
        <i :class="slotProps.option.icon"></i>
    </template>
</SelectButton>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null,
            options: [
                { icon: 'pi pi-align-left', value: 'Left' },
                { icon: 'pi pi-align-right', value: 'Right' },
                { icon: 'pi pi-align-center', value: 'Center' },
                { icon: 'pi pi-align-justify', value: 'Justify' }
            ]
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = ref([
    { icon: 'pi pi-align-left', value: 'Left' },
    { icon: 'pi pi-align-right', value: 'Right' },
    { icon: 'pi pi-align-center', value: 'Center' },
    { icon: 'pi pi-align-justify', value: 'Justify' }
]);
<\/script>
`
            }
        };
    }
};
</script>
