<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria <span>FullScreen</span></h1>
                <p>In fullscreen mode content covers the whole page over a mask..</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>With Thumbnails</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"
                    :circular="true" :fullScreen="true" :showItemNavigators="true" v-model:visible="displayBasic">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </template>
                </Galleria>

                <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />
            </div>

            <div class="card">
                <h5>Without Thumbnails</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayBasic2">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </template>
                </Galleria>

                <Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" />
            </div>

            <div class="card">
                <h5>Custom Content</h5>
                <Galleria :value="images" v-model:activeIndex="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayCustom">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </template>
                </Galleria>

                <div v-if="images" class="grid" style="max-width: 400px;">
                    <div v-for="(image, index) of images" class="col-3" :key="index">
                        <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code><code><template v-pre>
&lt;h3&gt;With Thumbnails&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"
    :circular="true" :fullScreen="true" :showItemNavigators="true" v-model:visible="displayBasic"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" /&gt;

&lt;h3&gt;Without Thumbnails&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayBasic2"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" /&gt;

&lt;h3&gt;Custom Content&lt;/h3&gt;
&lt;Galleria :value="images" v-model:activeIndex="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayCustom"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;div v-if="images" class="grid" style="max-width: 400px;"&gt;
    &lt;div v-for="(image, index) of images" class="col-3" :key="index"&gt;
        &lt;img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)"/&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script><code>
import PhotoService from '../../service/PhotoService';

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
            responsiveOptions2: [
                {
                    breakpoint: '1500px',
                    numVisible: 5
                },
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayBasic: false,
            displayBasic2: false,
            displayCustom: false
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import PhotoService from '../../service/PhotoService';

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
            responsiveOptions2: [
                {
                    breakpoint: '1500px',
                    numVisible: 5
                },
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayBasic: false,
            displayBasic2: false,
            displayCustom: false
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
}
</script>
