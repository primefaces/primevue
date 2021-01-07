<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import Textarea from 'primevue/textarea';

</code></pre>

				<h5>Getting Started</h5>
				<p>A model can be bound using the standard v-model directive.</p>
<pre v-code>
<code>
&lt;Textarea v-model="value" rows="5" cols="30" /&gt;

</code></pre>

				<h5>AutoResize</h5>
				<p>In auto resize mode, textarea grows instead of displaying a scrollbar.</p>
<pre v-code>
<code>
&lt;Textarea v-model="value" :autoResize="true" rows="5" cols="30" /&gt;

</code></pre>

				<h5>Properties</h5>
				<p>Textarea passes any attribute to the underlying textarea element, additional attributes are the following.</p>
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
                                <td>modelValue</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>autoResize</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, height of textarea changes as being typed.</td>
                            </tr>
						</tbody>
					</table>
				</div>

                <h5>Events</h5>
                <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

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
                                <td>p-inputtextarea</td>
                                <td>Textarea element</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<div class="p-d-flex p-jc-between">
					<a href="https://github.com/primefaces/primevue/tree/master/src/views/textarea" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
						<span>View on GitHub</span>
					</a>
					<LiveEditor name="TextareaDemo" :sources="sources"/>
                </div>
<pre v-code>
<code><template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;Textarea v-model="value1" rows="5" cols="30" /&gt;

&lt;h3&gt;Auto Resize&lt;/h3&gt;
&lt;Textarea v-model="value2" :autoResize="true" rows="5" cols="30" /&gt;

&lt;h3&gt;Disabled&lt;/h3&gt;
&lt;Textarea v-model="value3" disabled rows="5" cols="30" /&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
	data() {
		return {
			value1: '',
			value2: '',
			value3: ''
		}
	}
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
    data() {
		return {
			sources: {
				'template': {
					content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Textarea v-model="value1" rows="5" cols="30" />

                <h5>Auto Resize</h5>
                <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />

                <h5>Disabled</h5>
                <Textarea v-model="value3" disabled rows="5" cols="30" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        }
    }
}`
				}
			}
		}
	},
	components: {
		LiveEditor
	}
}
</script>