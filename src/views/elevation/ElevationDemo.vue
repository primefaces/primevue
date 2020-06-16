<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Elevation</h1>
                <p>Elevation is used to specify separation between surfaces and elements along the z-axis.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="p-grid">
                <div class="p-col" v-for="index in 24" :key="index">
                    <div :class="['box', 'p-shadow-' + index]">
                        p-shadow-{{index}}
                    </div>
                </div>
            </div>
        </div>

        <ElevationDoc />
    </div>
</template>

<script>
import ElevationDoc from './ElevationDoc';

export default {
	components: {
		'ElevationDoc': ElevationDoc
	}
}
</script>

<style lang="scss" scoped>
.box {
    min-height: 100px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 2rem;
    border-radius: 4px;
}
</style>