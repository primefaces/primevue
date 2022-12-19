<template>
    <div>
        <Head>
            <Title>Vue Tooltip Directive</Title>
            <Meta name="description" content="Tooltip functionality is integrated within various PrimeVue components." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tooltip</h1>
                <p>Tooltip directive provides advisory information for a component.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Positions</h5>
                <div class="grid p-fluid">
                    <div class="col-12 md:col-3">
                        <InputText v-tooltip.right="'Enter your username'" type="text" placeholder="Right" />
                    </div>
                    <div class="col-12 md:col-3">
                        <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
                    </div>
                    <div class="col-12 md:col-3">
                        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
                    </div>
                    <div class="col-12 md:col-3">
                        <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
                    </div>
                </div>

                <h5>Focus and Blur</h5>
                <InputText v-tooltip.bottom.focus="'Enter your username'" type="text" placeholder="Focus" />

                <h5>Button</h5>
                <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />

                <h5>Custom Class</h5>
                <InputText v-tooltip.right="{ value: 'Invalid username', class: 'custom-error' }" type="text" placeholder="Custom Class" />
            </div>
        </div>

        <TooltipDoc />
    </div>
</template>

<script>
import TooltipDoc from './TooltipDoc';

export default {
    components: {
        TooltipDoc: TooltipDoc
    }
};
</script>

<style>
.custom-error .p-tooltip-text {
    background-color: var(--pink-800);
    color: rgb(255, 255, 255);
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
    border-right-color: var(--pink-800);
}
</style>
