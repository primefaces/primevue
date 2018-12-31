<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ToggleButton</h1>
                <p>ToggleButton is used to select a boolean value using a button.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" />
            <p style="font-weight: bold">{{checked1}}</p>

            <h3>Customized</h3>
            <ToggleButton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" />
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

<style>

</style>
