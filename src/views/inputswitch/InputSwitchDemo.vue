<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputSwitch</h1>
                <p>InputSwitch is used to select a boolean value.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <InputSwitch v-model="checked1" />

                <h5>Preselection</h5>
                <InputSwitch v-model="checked2" />
            </div>
        </div>

        <InputSwitchDoc/>
    </div>
</template>

<script>
import InputSwitchDoc from './InputSwitchDoc';

export default {
    data() {
        return {
            checked1: false,
            checked2: true
        }
    },
    components: {
        'InputSwitchDoc': InputSwitchDoc
    }
}
</script>
