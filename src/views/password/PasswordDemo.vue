<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Password</h1>
                <p>Password displays strength indicator for password fields.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Password v-model="value1" :feedback="false" />

                <h5>Password Meter</h5>
                <Password v-model="value2" />

                <h5>Show Password</h5>
                <Password v-model="value3" toggleMask></Password>

                <h5>Templating</h5>
                <Password v-model="value4">
                    <template #header>
                        <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                        <Divider />
                        <p class="p-mt-2">Suggestions</p>
                        <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </Password>
            </div>
        </div>

        <PasswordDoc/>
    </div>
</template>

<script>
import PasswordDoc from './PasswordDoc';

export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null
        }
    },
    components: {
        'PasswordDoc': PasswordDoc
    }
}
</script>

<style lang="scss" scoped>
/deep/ .p-password input {
    width: 15rem
}
</style>