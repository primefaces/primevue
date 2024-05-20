<template>
    <DocSectionText v-bind="$attrs">
        <p>Using <i>activeIndex</i>, Galleria is displayed with a specific initial image.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card flex justify-center">
            <Galleria
                v-model:activeIndex="activeIndex"
                v-model:visible="displayCustom"
                :value="images"
                :responsiveOptions="responsiveOptions"
                :numVisible="7"
                containerStyle="max-width: 850px"
                :circular="true"
                :fullScreen="true"
                :showItemNavigators="true"
                :showThumbnails="false"
            >
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </template>
            </Galleria>

            <div v-if="images" class="grid grid-cols-12 gap-4" style="max-width: 400px">
                <div v-for="(image, index) of images" :key="index" class="col-span-4">
                    <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
                </div>
            </div>
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
            activeIndex: 0,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayCustom: false,
            code: {
                basic: `
<Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
    containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <div v-if="images" class="grid grid-cols-12 gap-4" style="max-width: 400px">
            <div v-for="(image, index) of images" :key="index" class="col-span-4">
                <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
            </div>
        </div>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayCustom: false
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <div v-if="images" class="grid grid-cols-12 gap-4" style="max-width: 400px">
            <div v-for="(image, index) of images" :key="index" class="col-span-4">
                <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const activeIndex = ref(0);
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayCustom = ref(false);

const imageClick = (index) => {
    activeIndex.value = index;
    displayCustom.value = true;
};
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
        },
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
};
</script>
