<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Shadow</h1>
                <p>Shadow is used to add depth to an element.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="p-grid">
                <div class="p-col-12 p-md-2">
                    <div class="box">
                        none
                    </div>
                </div>
                <div class="p-col-12 p-md-2">
                    <div class="box p-shadow-1">
                        p-shadow-1
                    </div>
                </div>
                <div class="p-col-12 p-md-2">
                    <div class="box p-shadow-2">
                        p-shadow-2
                    </div>
                </div>
                <div class="p-col-12 p-md-2">
                    <div class="box p-shadow-3">
                        p-shadow-3
                    </div>
                </div>
                <div class="p-col-12 p-md-2">
                    <div class="box p-shadow-4">
                        p-shadow-4
                    </div>
                </div>
                <div class="p-col-12 p-md-2">
                    <div class="box p-shadow-5">
                        p-shadow-5
                    </div>
                </div>
            </div>
        </div>

        <ShadowDoc />
    </div>
</template>

<script>
import ShadowDoc from './ShadowDoc';

export default {
	components: {
		'ShadowDoc': ShadowDoc
	}
}
</script>

<style lang="scss" scoped>
.box {
    background-color: #e9ecef;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
}
</style>