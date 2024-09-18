<template>
    <DocSectionText v-bind="$attrs">
        <p>IftaLabel is used to create infield top aligned labels. Visit <PrimeVueNuxtLink to="/iftalabel">IftaLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <IftaLabel>
            <Password v-model="value" inputId="password" />
            <label for="password">Password</label>
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
    <Password v-model="value" inputId="password" />
    <label for="password">Password</label>
</IftaLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <Password v-model="value" inputId="password" />
            <label for="password">Password</label>
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
            <Password v-model="value" inputId="password" />
            <label for="password">Password</label>
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
