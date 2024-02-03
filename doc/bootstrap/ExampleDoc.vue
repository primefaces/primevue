<template>
    <DocSectionText v-bind="$attrs">
        <p>Demonstration of various PrimeVue components like input field, button and table styled with Bootstrap utilities.</p>
    </DocSectionText>
    <div class="flex justify-content-center">
        <iframe class="w-full h-full" style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 2px; min-height: 800px" allowfullscreen src="https://stackblitz.com/edit/vitejs-vite-gziyk1?file=src%2FApp.vue&embed=1"></iframe>
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
