<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Textarea
            v-model="value"
            :pt="{
                root: {
                    rows: 5,
                    cols: 30
                }
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<Textarea
    v-model="value"
    :pt="{
        root: {
            rows: 5,
            cols: 30
        }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Textarea
            v-model="value"
            :pt="{
                root: {
                    rows: 5,
                    cols: 30
                }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Textarea
            v-model="value"
            :pt="{
                root: {
                    rows: 5,
                    cols: 30
                }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
`
            }
        };
    }
};
</script>
