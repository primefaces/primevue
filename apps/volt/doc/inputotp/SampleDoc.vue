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
                    <input
                        type="text"
                        v-bind="attrs"
                        v-on="events"
                        class="w-12 h-12 text-2xl text-center border border-surface-200 :border-surface-700 focus:-outline-offset-2 focus:outline-2 focus:outline-primary border-r-0 text-surface-700 dark:text-surface-0 first:rounded-s-xl nth-5:rounded-s-xl last:rounded-e-xl nth-3:rounded-e-xl nth-3:border-r last:border-r"
                    />
                    <div v-if="index === 3" class="px-4">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-between mt-8 self-stretch">
                <Button label="Resend Code" variant="text" class="p-0"></Button>
                <Button label="Submit Code"></Button>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import InputOtp from '@/volt/inputotp';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input
                        type="text"
                        v-bind="attrs"
                        v-on="events"
                        class="w-12 h-12 text-2xl text-center border border-surface-200 :border-surface-700 focus:-outline-offset-2 focus:outline-2 focus:outline-primary border-r-0 text-surface-700 dark:text-surface-0 first:rounded-s-xl nth-5:rounded-s-xl last:rounded-e-xl nth-3:rounded-e-xl nth-3:border-r last:border-r"
                    />
                    <div v-if="index === 3" class="px-4">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-between mt-8 self-stretch">
                <Button label="Resend Code" variant="text" class="p-0"></Button>
                <Button label="Submit Code"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import InputOtp from '@/volt/inputotp';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
