<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
        <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
        <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
    </div>
</template>`
            }
        };
    }
};
</script>
