<template>
    <DocSectionText v-bind="$attrs">
        <p>A button can be displayed as a link element when the <i>link</i> property is present. If you need to use buttons for navigation, wrap the button inside a component like <i>NuxtLink</i> or <i>router-link</i> depending on your router.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <Button label="Link" link />
        <NuxtLink to="https://vuejs.org/" target="_blank" rel="noopener" tabindex="-1">
            <Button label="External" />
        </NuxtLink>
        <router-link to="/" target="_blank" rel="noopener" tabindex="-1">
            <Button label="Router" />
        </router-link>
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
<NuxtLink to="https://vuejs.org/" target="_blank" rel="noopener">
    <Button label="External" />
</NuxtLink>
<router-link to="/" target="_blank" rel="noopener">
    <Button label="Router" />
</router-link>
`,
                options: `
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" link />
        <NuxtLink to="https://vuejs.org/" target="_blank" rel="noopener">
            <Button label="External" />
        </NuxtLink>
        <router-link to="/" target="_blank" rel="noopener">
            <Button label="Router" />
        </router-link>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" link />
        <NuxtLink to="https://vuejs.org/" target="_blank" rel="noopener">
            <Button label="External" />
        </NuxtLink>
        <router-link to="/" target="_blank" rel="noopener">
            <Button label="Router" />
        </router-link>
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
