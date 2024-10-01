<template>
    <DocSectionText v-bind="$attrs">
        <p>In addition to the presets, a regular expression can be used to validate the entire word using <i>validateOnly</i> option.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div>
            <label for="numkeys" class="font-bold block mb-2"> Block Numeric (allow "+" only once at start) </label>
            <InputText id="numkeys" v-model="text" v-keyfilter="{ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true }" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            text: null,
            code: {
                basic: `
<InputText v-model="text" v-keyfilter="{ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true }" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div>
            <label for="numkeys" class="font-bold block mb-2"> Block Numeric (allow "+" only once at start) </label>
            <InputText id="numkeys" v-model="text" v-keyfilter="{ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true }" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div>
            <label for="numkeys" class="font-bold block mb-2"> Block Numeric (allow "+" only once at start) </label>
            <InputText id="numkeys" v-model="text" v-keyfilter="{ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true }" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
