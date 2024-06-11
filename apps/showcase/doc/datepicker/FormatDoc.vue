<template>
    <DocSectionText v-bind="$attrs">
        <p>Default date format is <i>mm/dd/yy</i> which can be customized using the <i>dateFormat</i> property. Following options can be a part of the format.</p>
        <ul class="mb-6 leading-loose">
            <li><i>d</i> - day of month (no leading zero)</li>
            <li><i>dd</i> - day of month (two digit)</li>
            <li><i>o</i> - day of the year (no leading zeros)</li>
            <li><i>oo</i> - day of the year (three digit)</li>
            <li><i>D</i> - day name short</li>
            <li><i>DD</i> - day name long</li>
            <li><i>m</i> - month of year (no leading zero)</li>
            <li><i>mm</i> - month of year (two digit)</li>
            <li><i>M</i> - month name short</li>
            <li><i>MM</i> - month name long</li>
            <li><i>y</i> - year (two digit)</li>
            <li><i>yy</i> - year (four digit)</li>
            <li><i>@</i> - Unix timestamp (ms since 01/01/1970)</li>
            <li><i>!</i> - Windows ticks (100ns since 01/01/0001)</li>
            <li><i>'...'</i> - literal text</li>
            <li><i>''</i> - single quote</li>
            <li><i>anything else</i> - literal text</li>
        </ul>
    </DocSectionText>
    <div class="card flex justify-center">
        <DatePicker v-model="date" dateFormat="dd/mm/yy" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            date: null,
            code: {
                basic: `
<DatePicker v-model="date" dateFormat="dd/mm/yy" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" dateFormat="dd/mm/yy" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" dateFormat="dd/mm/yy" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
`
            }
        };
    }
};
</script>
