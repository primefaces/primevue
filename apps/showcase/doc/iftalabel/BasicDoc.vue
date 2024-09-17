<template>
    <DocSectionText v-bind="$attrs">
        <p>IftaLabel is used by wrapping the input and its label.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputText id="username" v-model="value" autocomplete="off" />
            <label for="username">Username</label>
        </IftaLabel>
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
<IftaLabel>
    <InputText id="username" v-model="value" autocomplete="off" />
    <label for="username">Username</label>
</IftaLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputText id="username" v-model="value" autocomplete="off" />
            <label for="username">Username</label>
        </IftaLabel>
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
    <div class="card flex justify-center">
        <IftaLabel>
            <InputText id="username" v-model="value" autocomplete="off" />
            <label for="username">Username</label>
        </IftaLabel>
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
