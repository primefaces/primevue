<template>
	<AppDoc name="TooltipDemo" :sources="sources" github="tooltip/TooltipDemo.vue" >
        <h5>Getting Started</h5>
		<p>Tooltip is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the <i>app.directive</i> function.</p>
<pre v-code.script><code>
import Tooltip from 'primevue/tooltip';

app.directive('tooltip', Tooltip);

</code></pre>

        <p>Tooltip can also be configured locally using the directives property of your component.</p>
<pre v-code.script><code>
directives: {
    'tooltip': Tooltip
}

</code></pre>

        <p>Once the tooltip is configured, it can be attached to a target using the v- prefix.</p>
<pre v-code><code><template v-pre>
&lt;InputText type="text" v-tooltip="'Enter your username'" /&gt;
</template>
</code></pre>

        <p>Also, more than one value can be used.</p>
<pre v-code><code><template v-pre>
&lt;InputText type="text" v-tooltip="{ value: 'Enter your username', disabled: true }" /&gt;
</template>
</code></pre>

		<h5>Positions</h5>
		<p>There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is specified using a modifier.</p>
<pre v-code><code><template v-pre>
&lt;InputText type="text" v-tooltip.right="'Enter your username'" /&gt;
&lt;InputText type="text" v-tooltip.top="'Enter your username'" /&gt;
&lt;InputText type="text" v-tooltip.bottom="'Enter your username'" /&gt;
&lt;InputText type="text" v-tooltip.left="'Enter your username'" /&gt;
</template>
</code></pre>

        <h5>Events</h5>
        <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>
<pre v-code><code><template v-pre>
&lt;InputText type="text" v-tooltip.focus="'Enter your username'" /&gt;
</template>
</code></pre>

        <h5>Modifiers</h5>
        <p>As seen in positions and event sections, tooltip is configured via modifiers that can be chained. Tooltip below,
            gets displayed at the top of the input at focus event.
        </p>
<pre v-code><code><template v-pre>
&lt;InputText type="text" v-tooltip.top.focus="'Enter your username'" /&gt;
</template>
</code></pre>

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
                        <td>string</td>
                        <td>null</td>
                        <td>Text of the tooltip</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the component should be disabled.</td>
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
        <h5>Positions</h5>
        <div class="p-grid p-fluid">
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Right" v-tooltip.right="'Enter your username'" />
            </div>
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Top" v-tooltip.top="'Enter your username'" />
            </div>
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Bottom" v-tooltip.bottom="'Enter your username'" />
            </div>
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Left" v-tooltip.left="'Enter your username'" />
            </div>
        </div>

        <h5>Focus and Blur</h5>
        <InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="'Enter your username'" />

        <h5>Button</h5>
        <Button type="button" label="Save" icon="pi pi-check" v-tooltip="'Click to proceed'" />
    </div>
</template>

<script>
export default {
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Positions</h5>
        <div class="p-grid p-fluid">
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Right" v-tooltip.right="'Enter your username'" />
            </div>
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Top" v-tooltip.top="'Enter your username'" />
            </div>
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Bottom" v-tooltip.bottom="'Enter your username'" />
            </div>
            <div class="p-col-12 p-md-3">
                <InputText type="text" placeholder="Left" v-tooltip.left="'Enter your username'" />
            </div>
        </div>

        <h5>Focus and Blur</h5>
        <InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="'Enter your username'" />

        <h5>Button</h5>
        <Button type="button" label="Save" icon="pi pi-check" v-tooltip="'Click to proceed'" />
    </div>
</template>

<script>
export default {
}
<\\/script>
`
                }
            }
        }
    }
}
</script>