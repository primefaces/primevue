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
    <div class="flex flex-wrap justify-content-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
    </div>
</template>

<script setup>

<\/script>
        `
            }
        };
    }
};
</script>
