<template>
    <DocSectionText v-bind="$attrs">
        <p>Save your time using date shortcuts property: <i>shortCuts</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" :short-cuts="shortCuts" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            date: null,
            shortCuts: [
                {
                    label: 'Some day',
                    value: '07/12/2023'
                },
                {
                    label: 'Liberation day',
                    value: '12/16/1971'
                },
                {
                    label: 'Other day',
                    value: '01/01/2000'
                },
                {
                    label: "Afif's birthday",
                    value: '06/10/2023'
                }
            ],
            code: {
                basic: `<Calendar :shortCuts="shortCuts" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Calendar :short-cuts="shortCuts" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: null,
                shortCuts: [
                    {
                        label: "Some day",
                        value: "07/12/2023"
                    },
                    {
                        label: "Liberation day",
                        value: "12/16/1971"
                    },
                    {
                        label: "Other day",
                        value: "01/01/2000"
                    },
                    {
                        label: "Afif's birthday",
                        value: "06/10/2023"
                    }
                ],
            };
        }
    };
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Calendar :short-cuts="shortCuts" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
const shortCuts = [
    {
        label: "Some day",
        value: "07/12/2023"
    },
    {
        label: "Liberation day",
        value: "12/16/1971"
    },
    {
        label: "Other day",
        value: "01/01/2000"
    },
    {
        label: "Afif's birthday",
        value: "06/10/2023"
    }
];
<\/script>`
            }
        };
    }
};
</script>
