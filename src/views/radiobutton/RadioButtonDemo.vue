<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>RadioButton</h1>
                <p>RadioButton is an extension to standard radio button element with theming.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <p-radioButton inputId="rb1" name="city" value="New York" v-model="city" />
                    <label for="rb1" class="p-radiobutton-label">New York</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="rb2" name="city" value="San Francisco" v-model="city" />
                    <label for="rb2" class="p-radiobutton-label">San Francisco</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="rb3" name="city" value="Los Angeles" v-model="city" />
                    <label for="rb3" class="p-radiobutton-label">Los Angeles</label>
                </div>
            </div>
            Selected City : {{this.city}}

            <h3>Advanced with Preselection, Value Binding and Disabled Option</h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <p-radioButton inputId="rb1" name="template" :value="{brand: 'Ultima', key: 'U'}" v-model="theme" />
                    <label for="rb1" class="p-radiobutton-label">Ultima</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="rb2" name="template" :value="{brand: 'Serenity', key: 'S'}" v-model="theme" />
                    <label for="rb2" class="p-radiobutton-label">Serenity</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="rb3" name="template" :value="{brand: 'Apollo', key: 'A'}" v-model="theme" />
                    <label for="rb3" class="p-radiobutton-label">Apollo</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="rb4" name="template" :value="{brand: 'Babylon', key: 'B'}" v-model="theme" :disabled="true"/>
                    <label for="rb3" class="p-radiobutton-label">Babylon</label>
                </div>
            </div>
            Selected Template : {{this.theme}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: 'null',
            theme: {brand: 'Serenity', key: 'S'}
        }
    },
    methods: {
        onChange() {
            console.log('change');
        }
    }
}
</script>

<style>

</style>
