<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputSwitch</h1>
                <p>InputSwitch is used to select a boolean value.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h3 class="first">Basic</h3>
                <InputSwitch v-model="checked1" />
                <p style="font-weight: bold">{{checked1}}</p>

                <h3>Preselection</h3>
                <InputSwitch v-model="checked2" />
                <p style="font-weight: bold">{{checked2}}</p>
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
