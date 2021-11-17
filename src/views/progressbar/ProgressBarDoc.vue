<template>
	<AppDoc name="ProgressBarDemo" :sources="sources" github="progressbar/ProgressBarDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import ProgressBar from 'primevue/progressbar';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>ProgressBar has two modes; "determinate" (default) and "indeterminate". In determinate mode, a value between 0 and 100 is required to display the progress.</p>
<pre v-code><code>
&lt;ProgressBar :value="value" /&gt;

</code></pre>
<pre v-code.script><code>
data() {
	return {
		value: 0
	}
}

</code></pre>

		<p>Indeterminate is simplly enabled using <i>mode</i> property.</p>
<pre v-code><code>
&lt;ProgressBar mode="indeterminate"/&gt;

</code></pre>

        <h5>Slot</h5>
        <p>A custom label can be placed inside the progress bar via the default slot.</p>
<pre v-code><code><template v-pre>
&lt;ProgressBar :value="value"&gt;
    Percent Complete: &#123;&#123;value&#125;&#125;%
&lt;/ProgressBar&gt;
</template>
</code></pre>

		<h5>Properties</h5>
		<p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>value</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Current value of the progress.</td>
                    </tr>
                    <tr>
                        <td>mode</td>
                        <td>string</td>
                        <td>determinate</td>
                        <td>Defines the mode of the progress, valid values are "determinate" and "indeterminate".</td>
                    </tr>
                    <tr>
                        <td>showValue</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to display the progress bar value.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Styling</h5>
		<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>p-progressbar</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-progressbar-determinate</td>
                        <td>Container element of a determinate progressbar.</td>
                    </tr>
                    <tr>
                        <td>p-progressbar-indeterminate</td>
                        <td>Container element of an indeterminate progressbar.</td>
                    </tr>
                    <tr>
                        <td>p-progressbar-value</td>
                        <td>Element whose width changes according to value.</td>
                    </tr>
                    <tr>
                        <td>p-progressbar-label</td>
                        <td>Label element that displays the current value.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
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
        <h5>Dynamic</h5>
        <ProgressBar :value="value1" />

        <h5>Static</h5>
        <ProgressBar :value="value2" :showValue="false" />

        <h5>Indeterminate</h5>
        <ProgressBar mode="indeterminate" style="height: .5em" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 50
        }
    },
    interval: null,
    methods: {
        startProgress() {
            this.interval = setInterval(() => {
                let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 100) {
                    newValue = 100;
                }
                this.value1 = newValue;
            }, 2000);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
        }
    },
    mounted() {
        this.startProgress();
    },
    beforeUnmount() {
        this.endProgress();
    }
}
<\\/script>
`
				},
                'composition-api': {
                    tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <h5>Dynamic</h5>
        <ProgressBar :value="value1" />

        <h5>Static</h5>
        <ProgressBar :value="value2" :showValue="false" />

        <h5>Indeterminate</h5>
        <ProgressBar mode="indeterminate" style="height: .5em" />
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        onMounted(() => {
            startProgress();
        })

        onBeforeUnmount(() => {
            endProgress();
        })
        
        const value1 = ref(0);
        const value2 = ref(50);
        const interval = ref(null);
        const startProgress = () => {
            interval.value = setInterval(() => {
                let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 100) {
                    newValue = 100;
                }
                value1.value = newValue;
            }, 2000);
        };
        const endProgress = () => {
            clearInterval(interval.value);
            interval.value = null;
        };

        return { value1, value2 }
    }
}
<\\/script>`

				},
                'browser-source': {
                    tabName: 'Browser Source',
					content: `<div id="app">
            <h5>Dynamic</h5>
            <p-progressbar :value="value1"></p-progressbar>

            <h5>Static</h5>
            <p-progressbar :value="value2" :show-value="false"></p-progressbar>

            <h5>Indeterminate</h5>
            <p-progressbar mode="indeterminate" style="height: .5em"></p-progressbar>
        </div>

        <script type="module">
        const { createApp, ref, onMounted, onBeforeUnmount } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    startProgress();
                })

                onBeforeUnmount(() => {
                    endProgress();
                })
                
                const value1 = ref(0);
                const value2 = ref(50);
                const interval = ref(null);
                const startProgress = () => {
                    interval.value = setInterval(() => {
                        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
                        if (newValue >= 100) {
                            newValue = 100;
                        }
                        value1.value = newValue;
                    }, 2000);
                };
                const endProgress = () => {
                    clearInterval(interval.value);
                    interval.value = null;
                };

                return { value1, value2 }
            },
            components: {
                "p-progressbar": primevue.progressbar
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>`

				}
			}
		}
	}
}
</script>
