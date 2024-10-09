<template>
    <DocSectionText v-bind="$attrs">
        <p>In addition to the presets, a regular expression can be configured for customization of blocking a single key press.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="spacekey" class="font-bold block mb-2"> Block Space </label>
            <InputText id="spacekey" v-model="spacekey" v-keyfilter="/[^\s]/" fluid />
        </div>
        <div class="flex-auto">
            <label for="chars" class="font-bold block mb-2"> Block &lt; &gt; * ! </label>
            <InputText id="chars" v-model="chars" v-keyfilter="/^[^<>*!]+$/" fluid />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            spacekey: null,
            chars: null,
            code: {
                basic: `
<InputText v-model="spacekey" v-keyfilter="/[^\s]/" />
<InputText v-model="chars" v-keyfilter="/^[^<>*!]+$/" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="spacekey" class="font-bold block mb-2"> Block Space </label>
            <InputText id="spacekey" v-model="spacekey" v-keyfilter="/[^\s]/" fluid />
        </div>
        <div class="flex-auto">
            <label for="chars" class="font-bold block mb-2"> Block &lt; &gt; * ! </label>
            <InputText id="chars" v-model="chars" v-keyfilter="/^[^<>*!]+$/" fluid />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            spacekey: null,
            chars: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="spacekey" class="font-bold block mb-2"> Block Space </label>
            <InputText id="spacekey" v-model="spacekey" v-keyfilter="/[^\s]/" fluid />
        </div>
        <div class="flex-auto">
            <label for="chars" class="font-bold block mb-2"> Block &lt; &gt; * ! </label>
            <InputText id="chars" v-model="chars" v-keyfilter="/^[^<>*!]+$/" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const spacekey = ref(null);
const chars = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
