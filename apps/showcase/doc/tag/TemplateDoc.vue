<template>
    <DocSectionText v-bind="$attrs">
        <p>Children of the component are passed as the content for templating.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)">
            <div class="flex items-center gap-2 px-1">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
                <span class="text-base">Italy</span>
            </div>
        </Tag>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)">
    <div class="flex items-center gap-2 px-1">
        <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
        <span class="text-base">Italy</span>
    </div>
</Tag>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)">
            <div class="flex items-center gap-2 px-1">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
                <span class="text-base">Italy</span>
            </div>
        </Tag>
    </div>    
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)">
            <div class="flex items-center gap-2 px-1">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
                <span class="text-base">Italy</span>
            </div>
        </Tag>
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
