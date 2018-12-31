<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputSwitch</h1>
                <p>InputSwitch is used to select a boolean value.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <InputSwitch v-model="checked1" />
            <p style="font-weight: bold">{{checked1}}</p>

            <h3>Preselection</h3>
            <InputSwitch v-model="checked2" />
            <p style="font-weight: bold">{{checked2}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: true
        }
    }
}
</script>
