<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>showButtonBar</i> is present, today and clear buttons are displayed at the footer. The content can be fully customized with the <i>buttonbar</i> slot as well.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4 flex-wrap">
        <DatePicker v-model="date" showButtonBar placeholder="Basic" />
        <DatePicker v-model="dates" showButtonBar placeholder="Customized" selectionMode="range" :manualInput="false">
            <template #buttonbar="{ todayCallback, clearCallback }">
                <div class="flex justify-between w-full">
                    <div class="flex gap-2">
                        <Button size="small" label="Exact" severity="secondary" />
                        <Button size="small" label="Flexible" severity="secondary" />
                    </div>
                    <div class="flex gap-2">
                        <Button size="small" label="Today" @click="todayCallback" variant="outlined" />
                        <Button size="small" icon="pi pi-times" severity="danger" variant="text" @click="clearCallback" />
                    </div>
                </div>
            </template>
        </DatePicker>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            date: null,
            dates: null,
            code: {
                basic: `
<DatePicker v-model="date" showButtonBar placeholder="Basic" />
<DatePicker v-model="dates" showButtonBar placeholder="Customized" selectionMode="range" :manualInput="false">
    <template #buttonbar="{ todayCallback, clearCallback }">
        <div class="flex justify-between w-full">
            <div class="flex gap-2">
                <Button size="small" label="Exact" severity="secondary" />
                <Button size="small" label="Flexible" severity="secondary" />
            </div>
            <div class="flex gap-2">
                <Button size="small" label="Today" @click="todayCallback" variant="outlined" />
                <Button size="small" icon="pi pi-times" severity="danger" variant="outlined" @click="clearCallback" />
            </div>
        </div>
    </template>
</DatePicker>
`,
                options: `
<template>
    <div class="card flex justify-center gap-4 flex-wrap">
        <DatePicker v-model="date" showButtonBar placeholder="Basic" />
        <DatePicker v-model="dates" showButtonBar placeholder="Customized" selectionMode="range" :manualInput="false">
            <template #buttonbar="{ todayCallback, clearCallback }">
                <div class="flex justify-between w-full">
                    <div class="flex gap-2">
                        <Button size="small" label="Exact" severity="secondary" />
                        <Button size="small" label="Flexible" severity="secondary" />
                    </div>
                    <div class="flex gap-2">
                        <Button size="small" label="Today" @click="todayCallback" variant="outlined" />
                        <Button size="small" icon="pi pi-times" severity="danger" variant="outlined" @click="clearCallback" />
                    </div>
                </div>
            </template>
        </DatePicker>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null,
            dates: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center gap-4 flex-wrap">
        <DatePicker v-model="date" showButtonBar placeholder="Basic" />
        <DatePicker v-model="dates" showButtonBar placeholder="Customized" selectionMode="range" :manualInput="false">
            <template #buttonbar="{ todayCallback, clearCallback }">
                <div class="flex justify-between w-full">
                    <div class="flex gap-2">
                        <Button size="small" label="Exact" severity="secondary" />
                        <Button size="small" label="Flexible" severity="secondary" />
                    </div>
                    <div class="flex gap-2">
                        <Button size="small" label="Today" @click="todayCallback" variant="outlined" />
                        <Button size="small" icon="pi pi-times" severity="danger" variant="outlined" @click="clearCallback" />
                    </div>
                </div>
            </template>
        </DatePicker>
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
const dates = ref();
<\/script>
`
            }
        };
    }
};
</script>
