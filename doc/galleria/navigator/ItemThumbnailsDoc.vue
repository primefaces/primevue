<template>
    <DocSectionText v-bind="$attrs">
        <p>Add <i>showItemNavigators</i> to display navigator elements and the left and right side.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px" :showItemNavigators="true">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
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
            responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ],
            code: {
                basic: `
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>
`,
                options: `
<template>
    <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
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
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
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
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
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
