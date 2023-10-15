<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
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
<span class="p-float-label">
    <Chips id="chips" v-model="value" />
    <label for="chips">Chips</label>
</span>
`,
                options: `
<template>
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
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
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
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
