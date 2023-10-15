<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>image</i> property to display an image as an Avatar.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<Avatar image="/images/avatar/onyamalimba.png" shape="circle" />

<Avatar v-badge.danger="4" class="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge" />

<Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
            </div>
        </div>
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
