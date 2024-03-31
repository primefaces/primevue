<template>
    <DocSectionText v-bind="$attrs">
        <p>A sample UI implementation with templating and additional elements.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <div class="flex flex-column align-items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-3">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-content-between mt-5 align-self-stretch">
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
<div class="flex flex-column align-items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
    <InputOtp v-model="value" :length="6" style="gap: 0">
        <template #default="{ attrs, events, index }">
            <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            <div v-if="index === 3" class="px-3">
                <i class="pi pi-minus" />
            </div>
        </template>
    </InputOtp>
    <div class="flex justify-content-between mt-5 align-self-stretch">
        <Button label="Resend Code" link class="p-0"></Button>
        <Button label="Submit Code"></Button>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column align-items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-3">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-content-between mt-5 align-self-stretch">
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
    border: 1px solid var(--surface-400);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--text-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--primary-color);
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
    border-color: var(--surface-400);
}
<\/style>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column align-items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-3">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-content-between mt-5 align-self-stretch">
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
    border: 1px solid var(--surface-400);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--text-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--primary-color);
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
    border-color: var(--surface-400);
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
    border: 1px solid var(--surface-400);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--text-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--primary-color);
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
    border-color: var(--surface-400);
}
</style>
