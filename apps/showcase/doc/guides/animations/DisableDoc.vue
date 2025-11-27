<template>
    <DocSectionText v-bind="$attrs">
        <p>Individual animations can be reduced and even disabled completely using the animation duration.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz format="css" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
@media (prefers-reduced-motion: reduce) {
    .p-anchored-overlay-enter-active,
    .p-anchored-overlay-leave-active {
        animation-duration: 0s !important;
    }
}
`
            }
        };
    }
};
</script>
