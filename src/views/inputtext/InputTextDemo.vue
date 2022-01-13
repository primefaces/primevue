<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputText</h1>
                <p>InputText renders a text field to enter data.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <InputText type="text" v-model="value1" />
                <span :style="{marginLeft: '.5em'}">{{value1}}</span>

                <h5>Floating Label</h5>
                <span class="p-float-label">
                    <InputText id="username" type="text" v-model="value2" />
                    <label for="username">Username</label>
                </span>

                <h5>Left Icon</h5>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText type="text" v-model="value3" placeholder="Search" />
                </span>

                <h5>Right Icon</h5>
                <span class="p-input-icon-right">
                    <i class="pi pi-spin pi-spinner" />
                    <InputText type="text" v-model="value4" />
                </span>

                <h5>Help Text</h5>
                <div class="field">
                    <label for="username1">Username</label>
                    <InputText id="username1" type="username" aria-describedby="username1-help" />
                    <small id="username1-help">Enter your username to reset your password.</small>
                </div>

                <h5>Invalid</h5>
                <div class="field">
                    <label for="username2">Username</label>
                    <InputText id="username2" type="username" aria-describedby="username2-help" class="p-invalid" />
                    <small id="username2-help" class="p-error">Username is not available.</small>
                </div>

                <h5>Disabled</h5>
                <InputText type="text" v-model="value5" disabled />

                <h5>Sizes</h5>
                <div class="sizes">
                    <InputText type="text" class="p-inputtext-sm" placeholder="Small" />
                    <InputText type="text" placeholder="Normal" />
                    <InputText type="text" class="p-inputtext-lg"  placeholder="Large" />
                </div>
            </div>
        </div>

        <InputTextDoc />
    </div>
</template>

<script>
import InputTextDoc from './InputTextDoc';

export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: 'PrimeVue'
        }
    },
	components: {
		'InputTextDoc': InputTextDoc
    }
}
</script>

<style lang="scss" scoped>
.sizes {
    .p-inputtext {
        display: block;
        margin-bottom: .5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.field * {
    display: block;
}
</style>