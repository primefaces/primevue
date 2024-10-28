<template>
    <DocSectionText v-bind="$attrs">
        <p>An advisory text can be defined with the <NuxtLink to="/message">Message</NuxtLink> component.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <Message size="small" severity="secondary" variant="simple">Enter your username to reset your password.</Message>
        </div>
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
<div class="flex flex-col gap-2">
    <label for="username">Username</label>
    <InputText id="username" v-model="value" aria-describedby="username-help" />
    <Message size="small" severity="secondary" variant="simple">Enter your username to reset your password.</Message>
</div>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <Message size="small" severity="secondary" variant="simple">Enter your username to reset your password.</Message>
        </div>
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
        <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <Message size="small" severity="secondary" variant="simple">Enter your username to reset your password.</Message>
        </div>
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
