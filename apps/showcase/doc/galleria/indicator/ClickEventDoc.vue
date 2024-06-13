<template>
    <DocSectionText v-bind="$attrs">
        <p>Indicators are displayed at the bottom by enabling <i>showIndicators</i> property and interacted with the click event by default.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false" :showIndicators="true">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                </template>
            </Galleria>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['PhotoService']" />
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            code: {
                basic: `
<Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px"
    :showThumbnails="false" :showIndicators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
</Galleria>
`,
                options: `
<template>
    <div class="card">
        <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px"
            :showThumbnails="false" :showIndicators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px"
            :showThumbnails="false" :showIndicators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
<\/script>
`,
                data: `
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `
            }
        };
    },
    methods: {
        loadDemoData() {
            PhotoService.getImages().then((data) => (this.images = data));
        }
    }
};
</script>
