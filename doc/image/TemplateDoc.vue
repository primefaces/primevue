<template>
    <DocSectionText v-bind="$attrs">
        <p>An eye icon is displayed by default when the image is hovered in preview mode. Use the <i>indicator</i> slot for custom content.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Image alt="Image" preview>
            <template #indicatoricon>
                <i class="pi pi-check"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg" alt="image" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
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
                basic: `<Image alt="Image" preview>
    <template #indicatoricon>
        <i class="pi pi-check"></i>
    </template>
    <template #image>
        <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg" alt="image" />
    </template>
    <template #preview="slotProps">
        <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
    </template>
</Image>`,
                options: `<template>
    <div class="card flex justify-content-center">
        <Image alt="Image" preview>
            <template #indicatoricon>
                <i class="pi pi-check"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg" alt="image" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
</template>`,
                composition: `<template>
    <div class="card flex justify-content-center">
        <Image alt="Image" preview>
            <template #indicatoricon>
                <i class="pi pi-check"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg" alt="image" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
</template>`
            }
        };
    }
};
</script>
