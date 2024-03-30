<template>
    <DocSectionText v-bind="$attrs">
        <p>Focus ring defines the outline width, style, color and offset. Let's use a thicker ring with the primary color for the outline.</p>
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
        focusRing: {
            width: '2px',
            style: 'dashed',
            color: '{primary.color}',
            offset: '1px'
        }
    }
});
`
            }
        };
    }
};
</script>
