<template>
    <DocSectionText v-bind="$attrs">
        <p>The button element can be displayed as a link element visually when the <i>link</i> property is present. If you need to customize the rendering, use the <i>as</i> to change the element or <i>asChild</i> for advanced templating.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <Button label="Link" variant="link" />
        <Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
        <Button asChild v-slot="slotProps">
            <RouterLink to="/" :class="slotProps.class">Router</RouterLink>
        </Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Link" variant="link" />
<Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
<Button asChild v-slot="slotProps">
    <RouterLink to="/" :class="slotProps.class">Router</RouterLink>
</Button>
`,
                options: `
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" variant="link" />
        <Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
        <Button asChild v-slot="slotProps">
            <RouterLink to="/" :class="slotProps.class">Router</RouterLink>
        </Button>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" variant="link" />
        <Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
        <Button asChild v-slot="slotProps">
            <RouterLink to="/" :class="slotProps.class">Router</RouterLink>
        </Button>
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
