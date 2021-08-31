<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Image</h1>
                <p>Displays an image with preview and tranformation options.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Image src="demo/images/galleria/galleria1.jpg" alt="Image" width="250" />

                <h5>Preview</h5>
                <Image src="demo/images/galleria/galleria11.jpg" alt="Image" width="250" preview />
            </div>
        </div>

        <ImageDoc />
    </div>
</template>

<script>
import ImageDoc from './ImageDoc';

export default {
	components: {
		'ImageDoc': ImageDoc
    }
}
</script>

<style lang="scss" scoped>

</style>