<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card">
        <Chips
            v-model="value"
            :pt="{
                root: { class: 'flex' },
                container: { class: 'flex-1' },
                token: { class: 'bg-primary' }
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<Chips
    v-model="value"
    :pt="{
        root: { class: 'flex' },
        container: { class: 'flex-1' },
        token: { class: 'bg-primary' }
    }"
/>
`,
                options: `
<template>
    <div class="card">
        <Chips
            v-model="value"
            :pt="{
                root: { class: 'flex' },
                container: { class: 'flex-1' },
                token: { class: 'bg-primary' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Chips
            v-model="value"
            :pt="{
                root: { class: 'flex' },
                container: { class: 'flex-1' },
                token: { class: 'bg-primary' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
`
            }
        };
    }
};
</script>
