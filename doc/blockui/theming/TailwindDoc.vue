<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    blockui: {
        root: 'relative',
        mask: 'bg-black/40'
    }
}
`
            },
            code2: {
                composition: `<template>
    <div class="card">
        <div class="mb-3">
            <Button label="Block" @click="blocked = true" class="mr-2"></Button>
            <Button label="Unblock" @click="blocked = false"></Button>
        </div>
        <BlockUI :blocked="blocked">
            <Panel header="Basic">
                <p class="text-gray-700 dark:text-white/80 m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </BlockUI>
    </div>
</template>

<script setup>
import { ref } from "vue";

const blocked = ref(false);
<\/script>`
            }
        };
    }
};
</script>
