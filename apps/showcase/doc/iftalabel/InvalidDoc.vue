<template>
    <DocSectionText v-bind="$attrs">
        <p>When the form element is invalid, the label is also highlighted.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputText id="username" v-model="value" autocomplete="off" :invalid="!value" />
            <label for="username">Username</label>
        </IftaLabel>
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
<IftaLabel>
    <InputText id="username" v-model="value" :invalid="!value" />
    <label for="username">Username</label>
</IftaLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputText id="username" v-model="value" :invalid="!value" />
            <label for="username">Username</label>
        </IftaLabel>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputText id="username" v-model="value" :invalid="!value" />
            <label for="username">Username</label>
        </IftaLabel>
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
