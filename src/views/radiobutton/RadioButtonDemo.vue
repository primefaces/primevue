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
                    <p-radioButton inputId="city1" name="city" value="Chicago" v-model="city" />
                    <label for="city1" class="p-radiobutton-label">Chicago</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="city2" name="city" value="Los Angeles" v-model="city" />
                    <label for="city2" class="p-radiobutton-label">Los Angeles</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="city3" name="city" value="New York" v-model="city" />
                    <label for="city3" class="p-radiobutton-label">New York</label>
                </div>
                <div class="p-col-12">
                    <p-radioButton inputId="city4" name="city" value="San Francisco" v-model="city" />
                    <label for="city4" class="p-radiobutton-label">San Francisco</label>
                </div>
            </div>
            <p>Selected City: <span style="font-weight: bold">{{this.city}}</span></p>

            <h3>Dynamic Values, Preselection, Value Binding and Disabled Option</h3>
            <div class="p-grid">
                <div v-for="theme of themes" :key="theme.key" class="p-col-12">
                    <p-radioButton :inputId="theme.key" name="theme" :value="theme" v-model="selectedTheme" :disabled="theme.key === 'U'"/>
                    <label :for="theme.key" class="p-radiobutton-label">{{theme.name}}</label>
                </div>
            </div>
           <p>Selected Theme: <span style="font-weight: bold">{{this.selectedTheme}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: null,
            themes: [{name: 'Apollo', key: 'A'}, {name: 'Babylon', key: 'B'}, {name: 'Serenity', key: 'S'}, {name: 'Ultima', key: 'U'}],
            selectedTheme: null
        }
    },
    created() {
        this.selectedTheme = this.themes[1];
    }
}
</script>

<style>

</style>
