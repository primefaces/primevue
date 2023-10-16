<template>
    <DocSectionText v-bind="$attrs">
        <p>Any content such as an image can be placed inside an Inplace.</p>
    </DocSectionText>
    <div class="card">
        <Inplace class="w-full">
            <template #display>
                <span class="pi pi-search" style="vertical-align: middle"></span>
                <span style="margin-left: 0.5rem; vertical-align: middle">View Picture</span>
            </template>
            <template #content>
                <img class="w-full" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature1.jpg" />
            </template>
        </Inplace>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Inplace>
    <template #display>
        <span class="pi pi-search" style="vertical-align: middle"></span>
        <span style="margin-left: 0.5rem; vertical-align: middle">View Picture</span>
    </template>
    <template #content>
        <img class="w-full" alt="Nature" src="/images/nature/nature1.jpg" />
    </template>
</Inplace>
`,
                options: `
<template>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="pi pi-search" style="vertical-align: middle"></span>
                <span style="margin-left: 0.5rem; vertical-align: middle">View Picture</span>
            </template>
            <template #content>
                <img class="w-full" src="https://primefaces.org/cdn/primevue/images/nature/nature1.jpg"/>
            </template>
        </Inplace>
    </div>
</template>
<script>

<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="pi pi-search" style="vertical-align: middle"></span>
                <span style="margin-left: 0.5rem; vertical-align: middle">View Picture</span>
            </template>
            <template #content>
                <img class="w-full" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature1.jpg" />
            </template>
        </Inplace>
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
