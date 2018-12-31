<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Password</h1>
                <p>Password displays strength indicator for password fields.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Password v-model="value" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style>

</style>
