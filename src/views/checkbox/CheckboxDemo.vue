<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Checkbox</h1>
                <p>Checkbox is an extension to standard checkbox element with theming.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <p-checkbox inputId="binary" v-model="checked" />
            <label for="binary" class="p-checkbox-label">{{checked}}</label>

            <h3>Multiple</h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <p-checkbox inputId="city1" name="city" value="Chicago" v-model="cities" />
                    <label for="city1" class="p-checkbox-label">Chicago</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="city2" name="city" value="Los Angeles" v-model="cities" />
                    <label for="city2" class="p-checkbox-label">Los Angeles</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="city3" name="city" value="New York" v-model="cities" />
                    <label for="city3" class="p-checkbox-label">New York</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="city4" name="city" value="San Francisco" v-model="cities" />
                    <label for="city4" class="p-checkbox-label">San Francisco</label>
                </div>
            </div>
            Selected Cities : {{cities}}

            <h3>Dynamic Values, Preselection, Value Binding and Disabled Option</h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <p-checkbox inputId="theme1" name="template" :value="{brand: 'Ultima', key: 'U'}" v-model="themes" />
                    <label for="theme1" class="p-checkbox-label">Ultima</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="theme2" name="template" :value="{brand: 'Serenity', key: 'S'}" v-model="themes" />
                    <label for="theme2" class="p-checkbox-label">Serenity</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="theme3" name="template" :value="{brand: 'Apollo', key: 'A'}" v-model="themes" />
                    <label for="theme3" class="p-checkbox-label">Apollo</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="theme4" name="template" :value="{brand: 'Babylon', key: 'B'}" v-model="themes" :disabled="true"/>
                    <label for="theme4" class="p-checkbox-label">Babylon</label>
                </div>
            </div>
            Selected Themes : {{this.themes}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            cities: [],
            themes: [{brand: 'Serenity', key: 'S'}, {brand: 'Apollo', key: 'A'}]
        }
    }
}
</script>

<style>

</style>
