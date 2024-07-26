<template>
    <DocSectionText v-bind="$attrs">
        <p>Fluid makes the input's width 100%. Visit <PrimeVueNuxtLink to="/fluid">Fluid</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card">
        <Fluid>
            <InputText v-model="value" type="text" />
        </Fluid>
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
<Fluid>
    <InputText v-model="value" type="text" />
</Fluid>
`,
                options: `
<template>
    <div class="card">
        <Fluid>
            <InputText v-model="value" type="text" />
        </Fluid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card">
        <Fluid>
            <InputText v-model="value" type="text" />
        </Fluid>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `
            }
        };
    }
};
</script>
