<template>
    <div class="app-inputstyleswitch">
        <h4>Input Style</h4>
        <div class="formgroup-inline">
            <div class="field-radiobutton">
                <RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="value" @update:modelValue="onChange" />
                <label for="input_outlined">Outlined</label>
            </div>
            <div class="field-radiobutton">
                <RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="value" @update:modelValue="onChange" />
                <label for="input_filled">Filled</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onChange(value) {
            this.$primevue.config.inputStyle = value;
        }
    },
    computed: {
        value() {
            return this.$primevue.config.inputStyle;
        }
    }
};
</script>