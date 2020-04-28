<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Getting Started</h3>
				<p>Tooltip is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the <i>Vue.directive</i> function.</p>
<CodeHighlight lang="js">
import Tooltip from 'primevue/tooltip';

Vue.directive('tooltip', Tooltip);
</CodeHighlight>

                <p>Tooltip can also be configured locally using the directives property of your component.</p>
<CodeHighlight lang="js">
directives: {
    tooltip: Tooltip
}
</CodeHighlight>

                <p>Once the tooltip is configured, it can be attached to a target using the v- prefix.</p>
<CodeHighlight>
<template v-pre>
&lt;InputText type="text" v-tooltip="'Enter your username'" /&gt;
</template>
</CodeHighlight>

				<h3>Positions</h3>
				<p>There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is specified using a modifier.</p>
<CodeHighlight>
<template v-pre>
&lt;InputText type="text" v-tooltip.right="'Enter your username'" /&gt;
&lt;InputText type="text" v-tooltip.top="'Enter your username'" /&gt;
&lt;InputText type="text" v-tooltip.bottom="'Enter your username'" /&gt;
&lt;InputText type="text" v-tooltip.top="'Enter your username'" /&gt;
</template>
</CodeHighlight>

                <h3>Events</h3>
                <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>
<CodeHighlight>
<template v-pre>
&lt;InputText type="text" v-tooltip.focus="'Enter your username'" /&gt;
</template>
</CodeHighlight>

                <h3>Modifiers</h3>
                <p>As seen in positions and event sections, tooltip is configured via modifiers that can be chained. Tooltip below,
                    gets displayed at the top of the input at focus event.
                </p>
<CodeHighlight>
<template v-pre>
&lt;InputText type="text" v-tooltip.top.focus="'Enter your username'" /&gt;
</template>
</CodeHighlight>

				<h3>Styling</h3>
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
                                <td>p-tooltip</td>
                                <td>Input element.</td>
                            </tr>
                            <tr>
                                <td>p-tooltip-arrow</td>
                                <td>Arrow of the tooltip.</td>
                            </tr>
                            <tr>
                                <td>p-tooltip-text</td>
                                <td>Text of the tooltip</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/tooltip" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Positions&lt;/h3&gt;
&lt;div class="p-grid p-fluid"&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;InputText type="text" placeholder="Right" v-tooltip.right="'Enter your username'" /&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;InputText type="text" placeholder="Top" v-tooltip.top="'Enter your username'" /&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;InputText type="text" placeholder="Bottom" v-tooltip.bottom="'Enter your username'" /&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;InputText type="text" placeholder="Left" v-tooltip.left="'Enter your username'" /&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Focus and Blur&lt;/h3&gt;
&lt;InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="'Enter your username'" /&gt;

&lt;h3&gt;Button&lt;/h3&gt;
&lt;Button type="button" label="Save" icon="pi pi-check" v-tooltip="'Click to proceed'" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>