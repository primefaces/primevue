<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ToggleButton</h1>
                <p>ToggleButton is used to select a boolean value using a button.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="Confirmation" />

                <h5>Customized</h5>
                <ToggleButton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="do you confirm" />
            </div>
        </div>

        <ToggleButtonDoc/>
    </div>
</template>

<script>
import ToggleButtonDoc from './ToggleButtonDoc';

export default {
    data() {
        return {
            checked1: false,
            checked2: true
        }
    },
    components: {
        'ToggleButtonDoc': ToggleButtonDoc
    }
}
</script>