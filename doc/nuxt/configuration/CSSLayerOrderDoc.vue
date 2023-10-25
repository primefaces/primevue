<template>
    <DocSectionText v-bind="$attrs">
        <p>Defines the CSS layer order setting for compatibility with libraries like Tailwind.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
    <DocSectionCode :code="code2" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: { 
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
}
`
            },
            code2: {
                basic: `
/* tailwind.css */
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
