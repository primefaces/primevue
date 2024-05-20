<template>
    <DocSectionText v-bind="$attrs">
        <p>Galleria can be controlled programmatically using a binding to <i>activeIndex</i>.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="mb-4">
                <Button icon="pi pi-minus" @click="prev" />
                <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
            </div>

            <Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
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
            activeIndex: 2,
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
<div>
    <Button icon="pi pi-minus" @click="prev" />
    <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
</div>

<Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
</Galleria>
`,
                options: `
<template>
    <div class="card">
        <div class="mb-4">
            <Button icon="pi pi-minus" @click="prev" />
            <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
        </div>

        <Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
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
            activeIndex: 2,
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
    },
    methods: {
        next() {
            this.activeIndex = this.activeIndex === this.images.length - 1 ? this.images.length - 1 : this.activeIndex + 1;
        },
        prev() {
            this.activeIndex = this.activeIndex === 0 ? 0 : this.activeIndex - 1;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="mb-4">
            <Button icon="pi pi-minus" @click="prev" />
            <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
        </div>

        <Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
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
const activeIndex = ref(2);
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

const next = () => {
    activeIndex.value = activeIndex.value === images.value.length - 1 ? images.value.length - 1 : activeIndex.value + 1;
};
const prev = () => {
    activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
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
        next() {
            this.activeIndex = this.activeIndex === this.images.length - 1 ? this.images.length - 1 : this.activeIndex + 1;
        },
        prev() {
            this.activeIndex = this.activeIndex === 0 ? 0 : this.activeIndex - 1;
        }
    }
};
</script>
