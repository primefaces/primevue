<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>image</i> property is used to display an image like an avatar.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
        <Chip label="Asiya Javayant" image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
        <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
        <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" removable />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Chip label="Amy Elsner" image="/images/avatar/amyelsner.png" />
<Chip label="Asiya Javayant" image="/images/avatar/asiyajavayant.png" />
<Chip label="Onyama Limba" image="/images/avatar/onyamalimba.png" />
<Chip label="Xuxue Feng" image="/images/avatar/xuxuefeng.png" removable />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
        <Chip label="Asiya Javayant" image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
        <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
        <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" removable />
    </div>
</template>

<script >

<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
        <Chip label="Asiya Javayant" image=https://primefaces.org/cdn/primevue"/images/avatar/asiyajavayant.png" />
        <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
        <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" removable />
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
