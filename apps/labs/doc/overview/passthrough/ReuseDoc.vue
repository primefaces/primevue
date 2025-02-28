<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The set of the utilities can easily be converted to a reusable class using the <i>@apply</i> directive of Tailwind if you'd like to reuse them in your application. Note that, the built-in presets do not follow this approach for reuse as
            it would mean creating opinionated Tailwind components whereas focus of PrimeVue is creating Vue components. Also it would require us to naming class names and as we all know developers are not good at naming things.
        </p>
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
                root: 'myTailwindInput'
            },
            code: {
                basic: `
<style scoped>
.myTailwindInput {
    @apply bg-gray-100 dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent;
}
</style>
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
                root: 'myTailwindInput'
            }
        }
    }
}
<\/script>

<style scoped>
.myTailwindInput {
    @apply bg-gray-100 dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent;
}
</style>
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
    root: 'myTailwindInput'
});
<\/script>

<style scoped>
.myTailwindInput {
    @apply bg-gray-100 dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent;
}
</style>
`
            }
        };
    }
};
</script>

<style scoped>
.myTailwindInput {
    @apply bg-gray-100 dark:bg-gray-950 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent;
}
</style>
