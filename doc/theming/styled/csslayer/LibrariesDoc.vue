<template>
    <DocSectionText v-bind="$attrs">
        <p>Example layer configuration for the popular CSS libraries.</p>
    </DocSectionText>
    <h4>Bootstrap</h4>
    <p>Bootstrap has a <i>reboot</i> utility to reset the CSS of the standard elements. If you are including this utility, you may give it a layer while importing it.</p>
    <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />

    <h4>Tailwind</h4>
    <p>
        Tailwind CSS includes a reset utility in base called <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer" class="doc-link">preflight</a>. If you are using this feature, wrap the base and utilities in
        separate layers and make sure primevue layer comes after the base.
    </p>
    <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />

    <h4>Normalize</h4>
    <p>Normalize is another utility to reset CSS of the standard elements. While importing the CSS file, assign it to a layer and define the layer order with primevue coming after the normalized layer.</p>
    <DocSectionCode :code="code3" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
@layer bootstrap-reboot, primevue;

@import "bootstrap-reboot.css" layer(bootstrap-rebooot);
`
            },
            code2: {
                basic: `
@layer tailwind-base, primevue, tailwind-utilities;

@layer tailwind-base {
    @tailwind base;
}

@layer tailwind-utilities {
    @tailwind components;
    @tailwind utilities;
}
`
            },
            code3: {
                basic: `
@layer normalize, primevue;

@import "normalize.css" layer(normalize-reset);
`
            }
        };
    }
};
</script>
