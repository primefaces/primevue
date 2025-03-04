<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>image</i> property to display an image as an Avatar.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" size="xlarge" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Avatar from '@/volt/avatar';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from '@/volt/avatar';
<\/script>
`);
</script>
