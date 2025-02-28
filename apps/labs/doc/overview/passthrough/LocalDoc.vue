<template>
    <DocSectionText v-bind="$attrs">
        <p>This example styles a InputText component by passing the Tailwind utilities to the input element, since PrimeVue is in unstyled mode <i>.p-inputtext</i> class does not exist at all.</p>
        <div class="card flex justify-center">
            <InputText type="text" :pt="myInputStyle" placeholder="InputText" />
        </div>
        <DocSectionCode :code="code" hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            myInputStyle: {
                root: 'bg-gray-100 dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent'
            },
            code: {
                basic: `
<InputText :pt="myInputStyle" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputText :pt="myInputStyle" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            myInputStyle: {
                root: 'bg-gray-100 dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent'
            }
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputText :pt="myInputStyle" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const myInputStyle = ref({
    root: 'bg-gray-100 dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent'
});
<\/script>
        `
            }
        };
    }
};
</script>
