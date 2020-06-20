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
                <Password v-model="value" />
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
            value: ''
        }
    },
    components: {
        'PasswordDoc': PasswordDoc
    }
}
</script>
