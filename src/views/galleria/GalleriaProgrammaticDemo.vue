<template>
    <div class="galleria-demo">
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria <span>Programmatic</span></h1>
                <p>Galleria can be controlled programmatically using the <b>activeIndex</b> property.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div style="padding: .5rem 0">
                    <Button icon="pi pi-minus" @click="prev" class="p-button-secondary" />
                    <Button icon="pi pi-plus" @click="next" class="p-button-secondary" style="margin-left: .5rem" />
                </div>

                <Galleria :value="images" v-model:activeIndex="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                    </template>
                </Galleria>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code>
<code><template v-pre>
&lt;div style="padding: .5rem 0"&gt;
    &lt;Button icon="pi pi-minus" @click="prev" class="p-button-secondary" /&gt;
    &lt;Button icon="pi pi-plus" @click="next" class="p-button-secondary" style="margin-left: .5rem" /&gt;
&lt;/div&gt;

&lt;Galleria :value="images" :activeIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import PhotoService from '../../service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 2,
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
			]
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
        next() {
            this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1;
        },
        prev() {
            this.activeIndex = (this.activeIndex === 0) ? 0 : this.images.length - 1;
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
            activeIndex: 2,
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
			]
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
        next() {
            this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1;
        },
        prev() {
            this.activeIndex = (this.activeIndex === 0) ? 0 : this.images.length - 1;
        }
    }
}
</script>
