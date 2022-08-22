<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Chips</h1>
                <p>Chips is used to enter multiple values on an input field.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation p-fluid">
            <div class="card">
                <h5>Basic</h5>
                <Chips v-model="value1" />

                <h5>Comma Separator</h5>
                <Chips v-model="value2" separator="," />

                <h5>Template</h5>
                <Chips v-model="value3">
                    <template #chip="slotProps">
                        <div>
                            <span>{{slotProps.value}} - (active) </span>
                            <i class="pi pi-user-plus" style="font-size: 14px"></i>
                        </div>
                    </template>
                </Chips>
            </div>
        </div>

        <ChipsDoc />
    </div>
</template>

<script>
import ChipsDoc from './ChipsDoc';

export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
        }
    },
    components: {
        'ChipsDoc': ChipsDoc
    }
}
</script>
