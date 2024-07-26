<template>
    <DocSectionText v-bind="$attrs">
        <p>Fluid used by making the input's width 100%.</p>
    </DocSectionText>
    <div class="card">
        <Fluid>
            <InputText id="username" v-model="value" placeholder="Username" />
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
    <InputText id="username" v-model="value" placeholder="Username" />
</Fluid>
`,
                options: `
<template>
    <div class="card">
        <Fluid>
            <InputText id="username" v-model="value" placeholder="Username" />
        </Fluid>
    </div>
</template>

<script setup>
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
            <InputText id="username" v-model="value" placeholder="Username" />
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
