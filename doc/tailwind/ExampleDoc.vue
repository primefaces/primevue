<template>
    <DocSectionText v-bind="$attrs">
        <p>As an example, Tailwind is used to style the <i>Button</i> and <i>Dialog</i> components of PrimeVue.</p>
    </DocSectionText>
    <div class="flex justify-content-center">
        <iframe class="w-full h-full" style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 2px; min-height: 800px" src="https://codesandbox.io/p/sandbox/primevue-tailwind-dialog-button-pt-example-jl2xzx?embed=1" allowfullscreen></iframe>
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
