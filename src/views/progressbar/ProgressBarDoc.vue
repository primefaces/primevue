<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import ProgressBar from 'primevue/progressbar';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>ProgressBar has two modes; "determinate" (default) and "indeterminate". In determinate mode, a value between 0 and 100 is required to display the progress.</p>
<CodeHighlight>
&lt;ProgressBar :value="value" /&gt;
</CodeHighlight>
<CodeHighlight lang="js">
data() {
	return {
		value: 0
	}
}
</CodeHighlight>

				<p>Indeterminate is simplly enabled using <i>mode</i> property.</p>
<CodeHighlight>
&lt;ProgressBar mode="indeterminate"/&gt;
</CodeHighlight>

				<h5>Properties</h5>
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
                                <td>Whether to displau the progress bar value.</td>
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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/prograssbar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Dynamic&lt;/h3&gt;
&lt;ProgressBar :value="value1" /&gt;

&lt;h3&gt;Static&lt;/h3&gt;
&lt;ProgressBar :value="value2" :showValue="false" /&gt;

&lt;h3&gt;Indeterminate&lt;/h3&gt;
&lt;ProgressBar mode="indeterminate" style="height: .5em" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
	beforeDestroy() {
		this.endProgress();
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>