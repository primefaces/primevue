<template>
    <DocSectionText v-bind="$attrs">
        <p>
            When the layer is enabled at the theme configuration, defines the CSS layer order setting for compatibility with libraries like Tailwind and Bootstrap in styled mode. Visit the
            <NuxtLink to="/theming/styled/#csslayer">CSS Layer</NuxtLink> guide for detailed information.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
    <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
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
