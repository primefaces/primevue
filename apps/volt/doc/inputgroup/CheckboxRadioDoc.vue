<template>
    <DocSectionText v-bind="$attrs">
        <p>Checkbox and RadioButton components can be combined with an input element under the same group.</p>
    </DocSectionText>
    <div class="card flex flex-col md:flex-row gap-4">
        <div class="flex items-stretch w-full">
            <InputText placeholder="Price" pt:root="flex-1 rounded-e-none" />
            <div class="flex items-center justify-center px-2 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </div>
        </div>

        <div class="flex items-stretch w-full">
            <div class="flex items-center justify-center px-2 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <Checkbox v-model="checked1" :binary="true" />
            </div>
            <InputText placeholder="Username" pt:root="flex-1 rounded-s-none" />
        </div>

        <div class="flex items-stretch w-full">
            <div class="flex items-center justify-center px-2 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <Checkbox v-model="checked2" :binary="true" />
            </div>
            <InputText placeholder="Website" pt:root="flex-1 rounded-none" />
            <div class="flex items-center justify-center px-2 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Checkbox from '@/volt/checkbox';
import InputText from '@/volt/inputtext';
import RadioButton from '@/volt/radiobutton';
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
const radioValue1 = ref('');
const radioValue2 = ref('');

const code = ref(`
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <div class="flex items-stretch w-full">
            <InputText placeholder="Price" pt:root="flex-1 rounded-e-none" />
            <div class="flex items-center justify-center px-2 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </div>
        </div>

        <div class="flex items-stretch w-full">
            <div class="flex items-center justify-center px-2 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <Checkbox v-model="checked1" :binary="true" />
            </div>
            <InputText placeholder="Username" pt:root="flex-1 rounded-s-none" />
        </div>

        <div class="flex items-stretch w-full">
            <div class="flex items-center justify-center px-2 border-y border-s border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-s-md">
                <Checkbox v-model="checked2" :binary="true" />
            </div>
            <InputText placeholder="Website" pt:root="flex-1 rounded-none" />
            <div class="flex items-center justify-center px-2 border-y border-e border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 text-surface-400 rounded-e-md">
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Checkbox from '@/volt/checkbox';
import InputText from '@/volt/inputtext';
import RadioButton from '@/volt/radiobutton';
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
const radioValue1 = ref('');
const radioValue2 = ref('');
<\/script>
`);
</script>
