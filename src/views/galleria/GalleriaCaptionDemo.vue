<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria <span>Caption</span></h1>
                <p>Caption displays a description for an item.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                    <template #item="{item}">
                        <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="{item}">
                        <div class="grid grid-nogutter justify-content-center">
                            <img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block;" />
                        </div>
                    </template>
                    <template #caption="{item}">
                        <h4 style="margin-bottom: .5rem;">{{item.title}}</h4>
                        <p>{{item.alt}}</p>
                    </template>
                </Galleria>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code><code><template v-pre>
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"&gt;
    &lt;template #item="{item}"&gt;
        &lt;img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="{item}"&gt;
        &lt;div class="grid grid-nogutter justify-content-center"&gt;
            &lt;img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #caption="{item}"&gt;
        &lt;h4 style="margin-bottom: .5rem;"&gt;{{item.title}}&lt;/h4&gt;
        &lt;p&gt;{{item.alt}}&lt;/p&gt;
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
