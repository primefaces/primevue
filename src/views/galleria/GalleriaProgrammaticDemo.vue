<template>
    <div class="galleria-demo">
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria - Programmatic</h1>
                <p>Galleria can be controlled programmatically using the <b>activeItemIndex</b> property.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div style="padding: .5rem 0">
                <Button icon="pi pi-minus" @click="activeIndex--" class="p-button-secondary" />
                <Button icon="pi pi-plus" @click="activeIndex++" class="p-button-secondary" style="margin-left: .5rem" />
            </div>

            <Galleria :value="images" :activeItemIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
				</template>
				<template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
				</template>
            </Galleria>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;div style="padding: .5rem 0"&gt;
    &lt;Button icon="pi pi-minus" @click="activeIndex--" class="p-button-secondary" /&gt;
    &lt;Button icon="pi pi-plus" @click="activeIndex++" class="p-button-secondary" style="margin-left: .5rem" /&gt;
&lt;/div&gt;

&lt;Galleria :value="images" :activeItemIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import PhotoService from '../../service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeItemIndex: 2,
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
    computed: {
        activeIndex: {
            get: function() {
                return this.activeItemIndex;
            },
            set: function(newValue) {
                if (this.images && 0 &lt;= newValue && newValue &lt;= (this.images.length - 1)) {
                    this.activeItemIndex = newValue;
                }
            }
        }
    }
}
</CodeHighlight>
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
            activeItemIndex: 2,
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
    computed: {
        activeIndex: {
            get: function() {
                return this.activeItemIndex;
            },
            set: function(newValue) {
                if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
                    this.activeItemIndex = newValue;
                }
            }
        }
    }
}
</script>
