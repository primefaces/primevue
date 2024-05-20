<template>
    <DocSectionText v-bind="$attrs">
        <p>A sample UI implementation with templating and additional elements.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-4">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-between mt-8 self-stretch">
                <Button label="Resend Code" link class="p-0"></Button>
                <Button label="Submit Code"></Button>
            </div>
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
<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
    <InputOtp v-model="value" :length="6" style="gap: 0">
        <template #default="{ attrs, events, index }">
            <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            <div v-if="index === 3" class="px-4">
                <i class="pi pi-minus" />
            </div>
        </template>
    </InputOtp>
    <div class="flex justify-between mt-8 self-stretch">
        <Button label="Resend Code" link class="p-0"></Button>
        <Button label="Submit Code"></Button>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-4">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-between mt-8 self-stretch">
                <Button label="Resend Code" link class="p-0"></Button>
                <Button label="Submit Code"></Button>
            </div>
        </div>
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
    width: 48px;
    height: 48px;
    font-size: 24px;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    border-radius: 0;
    border: 1px solid var(--p-inputtext-border-color);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--p-inputtext-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--p-focus-ring-color);
}

.custom-otp-input:first-child,
.custom-otp-input:nth-child(5) {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.custom-otp-input:nth-child(3),
.custom-otp-input:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right-width: 1px;
    border-right-style: solid;
    border-color: var(--p-inputtext-border-color);
}
<\/style>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-4">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-between mt-8 self-stretch">
                <Button label="Resend Code" link class="p-0"></Button>
                <Button label="Submit Code"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>

<style scoped>
.custom-otp-input {
    width: 48px;
    height: 48px;
    font-size: 24px;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    border-radius: 0;
    border: 1px solid var(--p-inputtext-border-color);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--p-inputtext-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--p-focus-ring-color);
}

.custom-otp-input:first-child,
.custom-otp-input:nth-child(5) {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.custom-otp-input:nth-child(3),
.custom-otp-input:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right-width: 1px;
    border-right-style: solid;
    border-color: var(--p-inputtext-border-color);
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
    width: 48px;
    height: 48px;
    font-size: 24px;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    border-radius: 0;
    border: 1px solid var(--p-inputtext-border-color);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--p-inputtext-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--p-focus-ring-color);
}

.custom-otp-input:first-child,
.custom-otp-input:nth-child(5) {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.custom-otp-input:nth-child(3),
.custom-otp-input:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right-width: 1px;
    border-right-style: solid;
    border-color: var(--p-inputtext-border-color);
}
</style>
