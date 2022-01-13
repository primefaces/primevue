<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria <span>Thumbnail</span></h1>
                <p>Thumbnails represent a smaller version of the actual content.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Positioned at Bottom</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                    </template>
                </Galleria>
            </div>

            <div class="card">
                <h5>Positioned at Left</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="left" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <div class="grid grid-nogutter justify-content-center">
                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                        </div>
                    </template>
                </Galleria>
            </div>

            <div class="card">
                <h5>Positioned at Right</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="right" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <div class="grid grid-nogutter justify-content-center">
                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                        </div>
                    </template>
                </Galleria>
            </div>

            <div class="card">
                <h5>Positioned at Top</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" thumbnailsPosition="top" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                    </template>
                </Galleria>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code><code><template v-pre>
&lt;h3&gt;Positioned at Bottom&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Positioned at Left&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="left" containerStyle="max-width: 640px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="grid grid-nogutter justify-content-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Positioned at Right&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="right" containerStyle="max-width: 640px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="grid grid-nogutter justify-content-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Positioned at Top&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" thumbnailsPosition="top" containerStyle="max-width: 640px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</template>
</code></pre>

<pre v-code.script><code>
import PhotoService from '../../service/PhotoService';

export default {
    data() {
        return {
            images: null,
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
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ]
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
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
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ]
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    }
}
</script>
