<template>
     <div>
        <div class="content-section documentation">
            <h1>Colors</h1>
            <p>Each PrimeVue theme exports its own color palette.</p>
        
            <h5>Getting Started</h5>
            <p>Colors are exported as CSS variables and used with the standard <i>var</i> syntax such as <i>var(--text-color)</i>.</p>

<pre v-code><code>
&lt;span :style="{color:var(--text-color)}"&gt;&lt;/span&gt;

</code></pre>

            <h5>General Colors</h5>
            <p>These are common variables used throughout the theme.</p>

            <div class="doc-tablewrapper">
                <table class="doc-table">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i>--text-color</i></td>
                            <td>Font text color.</td>
                        </tr>
                        <tr>
                            <td><i>--text-color-secondary</i></td>
                            <td>Muted font text color with a secondary level.</td>
                        </tr>
                        <tr>
                            <td><i>--primary-color</i></td>
                            <td>Primary color of the theme.</td>
                        </tr>
                        <tr>
                            <td><i>--primary-color-text</i></td>
                            <td>Text color when background is primary color.</td>
                        </tr>
                        <tr>
                            <td><i>--font-family</i></td>
                            <td>Font family of the theme.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Color Palette</h5>
            <p>A palette consists of 9 colors where each color provides tints/shades from 50 to 900.</p>

            <pre v-code><code>
&lt;div :style="{backgroundColor:var(--blue-500)}"&gt;&lt;/div&gt;

</code></pre>

            <div class="card"> 
                <div class="p-d-flex p-flex-wrap">
                    <div v-for="color of colors" :key="color" class="color-stack p-mr-6 p-mb-6">
                        <template v-for="shade of shades" :key="shade">
                            <div v-if="shade !== 0" class="color-box"
                                :style="{backgroundColor:`var(--${color}-${shade})`, color: (shade > 500 ? '#fff': '#000')}">
                                {{color}}-{{shade}}
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <h5>Surfaces</h5>
            <p>In addition, a theme brings a special palette called surfaces that can be used as the base when designing the surface layers and separators.</p>
            <div class="card">
                <div class="color-stack">
                    <div v-for="shade in shades" :key="shade" class="color-box" 
                        :style="{backgroundColor:`var(--surface-${shade})`, color: $appState.darkTheme ? '#fff':  (shade > 500 ? '#fff': '#000')}">
                        surface-{{shade}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colors: ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'gray'],
            shades: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    }
}
</script>

<style lang="scss" scoped>
.color-stack {
    display: flex;
    flex-direction: column;
}

.color-box {
    width: 2.5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 250px;
    font-weight: bold;
}

.sample-layout {
    width: 375px;
}
</style>