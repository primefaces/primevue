<template>
    <DocSectionText v-bind="$attrs">
        <p>An eye icon is displayed by default when the image is hovered in preview mode. Use the <i>indicator</i> slot for custom content.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="Image" width="250" preview>
            <template #indicator>
                <i class="pi pi-check"></i>
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
<Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="Image" width="250" preview>
    <template #indicator>
        <i class="pi pi-check"></i>
    </template>
</Image>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="Image" width="250" preview>
            <template #indicator>
                <i class="pi pi-check"></i>
            </template>
        </Image>
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="Image" width="250" preview>
            <template #indicator>
                <i class="pi pi-check"></i>
            </template>
        </Image>
    </div>
</template>`
            }
        };
    }
};
</script>
