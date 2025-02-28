<template>
    <DocSectionText v-bind="$attrs">
        <p>Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputOtp v-model="value">
            <template #default="{ attrs, events }">
                <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            </template>
        </InputOtp>
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
<InputOtp v-model="value">
    <template #default="{ attrs, events }">
        <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
    </template>
</InputOtp>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value">
            <template #default="{ attrs, events }">
                <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            </template>
        </InputOtp>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>

<style scoped>
.custom-otp-input {
    width: 40px;
    font-size: 36px;
    border: 0 none;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    background: transparent;
    border-bottom: 2px solid var(--p-inputtext-border-color);
}

.custom-otp-input:focus {
    outline: 0 none;
    border-bottom-color: var(--p-primary-color);
}
<\/style>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value">
            <template #default="{ attrs, events }">
                <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            </template>
        </InputOtp>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>

<style scoped>
.custom-otp-input {
    width: 40px;
    font-size: 36px;
    border: 0 none;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    background: transparent;
    border-bottom: 2px solid var(--p-inputtext-border-color);
}

.custom-otp-input:focus {
    outline: 0 none;
    border-bottom-color: var(--p-primary-color);
}
<\/style>
`
            }
        };
    }
};
</script>

<style scoped>
.custom-otp-input {
    width: 40px;
    font-size: 36px;
    border: 0 none;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    background: transparent;
    border-bottom: 2px solid var(--p-inputtext-border-color);
}

.custom-otp-input:focus {
    outline: 0 none;
    border-bottom-color: var(--p-primary-color);
}
</style>
