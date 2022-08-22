<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Image Preview</h1>
                <p>Displays an image with preview and tranformation options. For multiple image, see <router-link to="galleria">Galleria</router-link>.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <ImagePreview src="demo/images/galleria/galleria1.jpg" alt="Image" width="250" />

                <h5>Preview</h5>
                <ImagePreview src="demo/images/galleria/galleria11.jpg" alt="Image" width="250" preview />
            </div>
        </div>

        <ImagePreviewDoc />
    </div>
</template>

<script>
import ImagePreviewDoc from './ImagePreviewDoc';
export default {
	components: {
		'ImagePreviewDoc': ImagePreviewDoc
    }
}
</script>

<style lang="scss" scoped>
</style>