<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tailwind CSS includes a reset utility in base called <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">preflight</a>. If you are using this feature, wrap the base and utilities in separate layers
            and make sure primevue layer comes after the base.
        </p>
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
@layer tailwind-base, primevue, tailwind-utilities;

@layer tailwind-base {
    @tailwind base;
}

@layer tailwind-utilities {
    @tailwind components;
    @tailwind utilities;
}
`
            }
        };
    }
};
</script>
