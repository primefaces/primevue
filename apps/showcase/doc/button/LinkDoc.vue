<template>
    <DocSectionText v-bind="$attrs">
        <p>The button element can be displayed as a link element visually when the <i>link</i> property is present. If you need to use buttons for actual navigations, use the <i>as</i> property to customize the rendered element.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <Button label="Link" link />
        <Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
        <Button as="router-link" label="Router" to="/" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Link" link />
<Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
<Button as="router-link" label="Router" to="/" />
`,
                options: `
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" link />
        <Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
        <Button as="router-link" label="Router" to="/" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" link />
        <Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
        <Button as="router-link" label="Router" to="/" />
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
