<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The built-in theme is optional as Tailwind can easily be integrated with PrimeVue components in unstyled mode either using global setting or for a particular component only. Visit the <NuxtLink to="/unstyled">unstyled</NuxtLink> mode
            documentation for getting started. As an example, Tailwind is used to style the <i>Button</i> and <i>Dialog</i> components of PrimeVue without the default theme.
        </p>
    </DocSectionText>
    <div class="flex justify-content-center">
        <iframe class="w-full h-full" style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 2px; min-height: 800px" src="https://codesandbox.io/p/sandbox/unstyled-primevue-dialog-with-tailwind-css-2jp96n?embed=1" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
</script>
