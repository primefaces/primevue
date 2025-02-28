<template>
    <DocSectionText v-bind="$attrs">
        <p>
            An eye icon is displayed by default when the image is hovered in preview mode, use the <i>previewicon</i> slot for custom content. In addition, the <i>image</i> and <i>preview</i> slots are available to define the thumbnail and detailed
            image respectively.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Image alt="Image" preview>
            <template #previewicon>
                <i class="pi pi-search"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="image" width="250" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Image alt="Image" preview>
    <template #previewicon>
        <i class="pi pi-search"></i>
    </template>
    <template #image>
        <img src="/thumbnail.jpg" alt="image" />
    </template>
    <template #preview="slotProps">
        <img src="/image.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
    </template>
</Image>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Image alt="Image" preview>
            <template #previewicon>
                <i class="pi pi-search"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="image" width="250" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Image alt="Image" preview>
            <template #previewicon>
                <i class="pi pi-search"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="image" width="250" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
</template>
`
            }
        };
    }
};
</script>
