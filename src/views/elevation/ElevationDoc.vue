<template>
	<AppDoc name="ElevationDemo" :sources="sources" github="elevation/ElevationDemo.vue">
		<h5>Getting Started</h5>
		<p>Elevation is added to an element using the <i>.shadow-{level}</i> class.</p>
<pre v-code><code>
&lt;div class="shadow-1" /&gt;

</code></pre>

        <h5>Levels</h5>
        <p>There are 8 depths available varying from 1 to 8.</p>
<pre v-code><code>
&lt;div class="shadow-1" /&gt;
&lt;div class="shadow-8" /&gt;

</code></pre>

        <h5>Dependencies</h5>
        <p>PrimeFlex 3.1.2.</p>
	</AppDoc>
</template>

<script>
export default {
	data() {
		return {
			sources: {
				'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="grid">
            <div class="p-col">
                    <div class="shadow-box shadow-none">shadow-none</div>
                </div>
            <div class="p-col" v-for="index in 8" :key="index">
                <div :class="['shadow-box', 'shadow-' + index]">
                    shadow-{{index}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
.shadow-box {
    min-height: 100px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 2rem;
    border-radius: 4px;
    background-color: var(--surface-e);
}
</style>                    
`
                },
				'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="grid">
            <div class="p-col">
                    <div class="shadow-box shadow-none">shadow-none</div>
                </div>
            <div class="p-col" v-for="index in 8" :key="index">
                <div :class="['shadow-box', 'shadow-' + index]">
                    shadow-{{index}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
.shadow-box {
    min-height: 100px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 2rem;
    border-radius: 4px;
    background-color: var(--surface-e);
}
</style>                    
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    content: `<div id="app">
            <div class="grid">
                <div class="p-col">
                    <div class="shadow-box shadow-none">shadow-none</div>
                </div>
                <div class="p-col" v-for="index in 8" :key="index">
                    <div :class="['shadow-box', 'shadow-' + index]">
                        shadow-{{index}}
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp } = Vue;
        
        const App = {};

        createApp(App).mount("#app");
        <\\/script>

        <style lang="scss" scoped>
        .shadow-box {
            min-height: 100px;
            min-width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin: 2rem;
            border-radius: 4px;
            background-color: var(--surface-e);
        }
        </style>                    
`
                }
			}
		}
	}
}
</script>