<template>
    <DocSectionText v-bind="$attrs">
        <p>As an example, <a href="https://getbootstrap.com/docs/4.0/components/modal/">Modal</a> and <a href="https://getbootstrap.com/docs/4.0/components/button/">Button</a> styles of Bootstrap are used to style PrimeVue Button and Dialog.</p>
    </DocSectionText>
    <div class="flex justify-content-center">
        <iframe class="w-full h-full" style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 2px; min-height: 800px" src="https://codesandbox.io/p/sandbox/primevue-bootstrap-dialog-button-pt-example-4p3t7d" allowfullscreen></iframe>
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
