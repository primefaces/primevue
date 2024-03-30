<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Presets use the native font stack by default for optimal rendering depending on the platform. If you have installed a specific font stack in your application, use the <i>fontFamily</i> and the optional <i>fontVariationSettings</i> tokens
            to define your custom font for PrimeVue components. As example, let's configure the popular <i>Inter</i> for PrimeVue.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
const MyPreset = definePreset(Aura, {
    semantic: {
        fontFamily: 'Inter, sans-serif'
    }
});
`
            }
        };
    }
};
</script>
