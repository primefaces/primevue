<template>
    <DocSectionText v-bind="$attrs">
        <p>
            When using range selection with <i>numberOfMonths</i> greater than 1, selecting the start date from the second (or later) visible month causes the calendar view to jump so that the selected month becomes the first visible month. Enable <i>preserveViewOnRangeStart</i> to keep the current view stable until the range is complete (both start and end dates selected).
        </p>
    </DocSectionText>
    <div class="card flex flex-col gap-4 justify-center">
        <div>
            <label for="range-multi-default" class="font-bold block mb-2">Default (view jumps when start is from second month)</label>
            <DatePicker id="range-multi-default" v-model="datesDefault" selectionMode="range" :numberOfMonths="2" :manualInput="false" />
        </div>
        <div>
            <label for="range-multi-preserve" class="font-bold block mb-2">With preserveViewOnRangeStart (stable view)</label>
            <DatePicker id="range-multi-preserve" v-model="datesPreserved" selectionMode="range" :numberOfMonths="2" :preserveViewOnRangeStart="true" :manualInput="false" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            datesDefault: null,
            datesPreserved: null,
            code: {
                basic: `
<DatePicker v-model="datesDefault" selectionMode="range" :numberOfMonths="2" :manualInput="false" />

<DatePicker v-model="datesPreserved" selectionMode="range" :numberOfMonths="2" :preserveViewOnRangeStart="true" :manualInput="false" />
`,
                options: `
<template>
    <div class="card flex flex-col gap-4 justify-center">
        <DatePicker v-model="datesDefault" selectionMode="range" :numberOfMonths="2" :manualInput="false" />
        <DatePicker v-model="datesPreserved" selectionMode="range" :numberOfMonths="2" :preserveViewOnRangeStart="true" :manualInput="false" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            datesDefault: null,
            datesPreserved: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col gap-4 justify-center">
        <DatePicker v-model="datesDefault" selectionMode="range" :numberOfMonths="2" :manualInput="false" />
        <DatePicker v-model="datesPreserved" selectionMode="range" :numberOfMonths="2" :preserveViewOnRangeStart="true" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const datesDefault = ref();
const datesPreserved = ref();
<\/script>
`
            }
        };
    }
};
</script>
