<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Text</h1>
                <p>Manage the alignment and the styling of a text with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> text utilities.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Alignment</h5>
                <div class="mb-3 text-left">Left</div>
                <div class="mb-3 text-center">Center</div>
                <div class="text-right">Right</div>

                <h5>Wrap</h5>
                <div class="mb-3 demo-container" style="width: 10rem">Long text wraps and does not overlow.</div>
                <div class="mb-3 demo-container white-space-nowrap" style="width: 10rem">Long text does not wrap and overflows the parent.</div>
                <div class="mb-3 demo-container white-space-nowrap overflow-hidden text-overflow-ellipsis" style="width: 10rem">Long text does not wrap and overflows the parent.</div>

                <h5>Transform</h5>
                <div class="mb-3 text-lowercase">LOWERCASE</div>
                <div class="mb-3 text-uppercase">uppercase</div>
                <div class="text-capitalize">capitalize</div>

                <h5>Style</h5>
                <div class="mb-3 font-bold">Bold</div>
                <div class="mb-3 font-norrmal">Normal</div>
                <div class="mb-3 font-light">Light</div>
                <div class="mb-3 font-italic">Italic</div>
            </div>
        </div>

        <TextDoc />
    </div>
</template>

<script>
import TextDoc from './TextDoc';

export default {
	components: {
		'TextDoc': TextDoc
	}
}
</script>

<style scoped>
.demo-container {
    border: 2px solid var(--surface-d);
}
</style>