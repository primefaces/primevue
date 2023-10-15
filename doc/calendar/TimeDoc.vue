<template>
    <DocSectionText v-bind="$attrs">
        <p>A time picker is displayed when <i>showTime</i> is enabled where 12/24 hour format is configured with <i>hourFormat</i> property. In case, only time needs to be selected, add <i>timeOnly</i> to hide the date section.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="calendar-12h" class="font-bold block mb-2"> 12h Format </label>
            <Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" />
        </div>
        <div class="flex-auto">
            <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label>
            <Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" />
        </div>
        <div class="flex-auto">
            <label for="calendar-timeonly" class="font-bold block mb-2"> Time Only </label>
            <Calendar id="calendar-timeonly" v-model="time" timeOnly />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            datetime12h: null,
            datetime24h: null,
            time: null,
            code: {
                basic: `
<Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" />
<Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" />
<Calendar id="calendar-timeonly" v-model="time" timeOnly />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="calendar-12h" class="font-bold block mb-2"> 12h Format </label>
            <Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" />
        </div>
        <div class="flex-auto">
            <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label>
            <Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" />
        </div>
        <div class="flex-auto">
            <label for="calendar-timeonly" class="font-bold block mb-2"> Time Only </label>
            <Calendar id="calendar-timeonly" v-model="time" timeOnly />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datetime12h: null,
            datetime24h: null,
            time: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="calendar-12h" class="font-bold block mb-2"> 12h Format </label>
            <Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" />
        </div>
        <div class="flex-auto">
            <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label>
            <Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" />
        </div>
        <div class="flex-auto">
            <label for="calendar-timeonly" class="font-bold block mb-2"> Time Only </label>
            <Calendar id="calendar-timeonly" v-model="time" timeOnly />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const datetime12h = ref();
const datetime24h = ref();
const time = ref();
<\/script>
`
            }
        };
    }
};
</script>
