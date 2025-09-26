<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>updateModelType</i> property controls the data type of the value. When set to <i>string</i> it returns a string representation of the date, when set to <i>date</i> (default) it returns a Date object.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="datetype" class="font-bold block mb-2"> Date Type Model </label>
            <DatePicker v-model="dateTypeModel" fluid />
        </div>
        <div class="flex-auto">
            <label for="stringtype" class="font-bold block mb-2"> String Type Model </label>
            <DatePicker v-model="stringTypeModel" updateModelType="string" fluid />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            dateTypeModel: null,
            stringTypeModel: null,
            code: {
                basic: `
<DatePicker v-model="dateTypeModel" />
<DatePicker v-model="stringTypeModel" updateModelType="string" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="datetype" class="font-bold block mb-2"> Date Type Model </label>
            <DatePicker v-model="dateTypeModel" fluid />
        </div>
        <div class="flex-auto">
            <label for="stringtype" class="font-bold block mb-2"> String Type Model </label>
            <DatePicker v-model="stringTypeModel" updateModelType="string" fluid />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dateTypeModel: null,
            stringTypeModel: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="datetype" class="font-bold block mb-2"> Date Type Model </label>
            <DatePicker v-model="dateTypeModel" fluid />
        </div>
        <div class="flex-auto">
            <label for="stringtype" class="font-bold block mb-2"> String Type Model </label>
            <DatePicker v-model="stringTypeModel" updateModelType="string" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const dateTypeModel = ref();
const stringTypeModel = ref();
<\/script>
`
            }
        };
    }
};
</script>
