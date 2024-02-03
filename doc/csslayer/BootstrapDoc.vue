<template>
    <DocSectionText v-bind="$attrs">
        <p>Bootstrap has a <i>reboot</i> utility to reset the CSS of the standard elements. If you are including this utility, you may give it a layer while importing it.</p>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
@layer bootstrap-reboot, primevue;

@import "bootstrap-reboot.css" layer(bootstrap-rebooot);
`
            }
        };
    }
};
</script>
