<template>
    <DocSectionText v-bind="$attrs">
        <p>By default, the SelectButton allows to deselect all items. To enforce at least one selected item, set the <i>allow-empty</i> option to <i>false</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" :allow-empty="false" aria-labelledby="allow-empty" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 'One-Way',
            options: ['One-Way', 'Return'],
            code: {
                basic: `
<SelectButton v-model="value" :options="options" optionLabel="name"  :allow-empty="false" aria-labelledby="allow-empty" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" :allow-empty="false" aria-labelledby="allow-empty" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'One-Way',
            options: ['One-Way', 'Return']
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" :allow-empty="false" aria-labelledby="allow-empty" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('One-Way');
const options = ref(['One-Way', 'Return']);
<\/script>
`
            }
        };
    }
};
</script>
