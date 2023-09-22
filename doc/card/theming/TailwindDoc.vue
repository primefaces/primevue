<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `export default {
    card: {
        root: {
            class: [
                'bg-white text-gray-700 shadow-md rounded-md', // Background, text color, box shadow, and border radius.
                'dark:bg-gray-900 dark:text-white ' //dark
            ]
        },
        body: 'p-5', // Padding.
        title: 'text-2xl font-bold mb-2', // Font size, font weight, and margin bottom.
        subtitle: {
            class: [
                'font-normal mb-2 text-gray-600', // Font weight, margin bottom, and text color.
                'dark:text-white/60 ' //dark
            ]
        },
        content: 'py-5', // Vertical padding.
        footer: 'pt-5' // Top padding.
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex items-center justify-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
