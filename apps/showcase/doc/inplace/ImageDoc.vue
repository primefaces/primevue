<template>
    <DocSectionText v-bind="$attrs">
        <p>Any content such as an image can be placed inside an Inplace.</p>
    </DocSectionText>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="inline-flex items-center gap-2">
                    <span class="pi pi-image"></span>
                    <span>View Photo</span>
                </span>
            </template>
            <template #content>
                <img class="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
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
        <span class="inline-flex items-center gap-2">
            <span class="pi pi-image"></span>
            <span>View Photo</span>
        </span>
    </template>
    <template #content>
        <img class="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
    </template>
</Inplace>
`,
                options: `
<template>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="inline-flex items-center gap-2">
                    <span class="pi pi-image"></span>
                    <span>View Photo</span>
                </span>
            </template>
            <template #content>
                <img class="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
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
                <span class="inline-flex items-center gap-2">
                    <span class="pi pi-image"></span>
                    <span>View Photo</span>
                </span>
            </template>
            <template #content>
                <img class="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
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
