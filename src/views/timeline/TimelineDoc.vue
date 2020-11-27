<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="js">
import Timeline from 'primevue/timeline';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Timeline receives the events with the <i>value</i> property as a collection of arbitrary objects. In addition, <i>content</i> template is required to display the representation of an event.
					Example below is a sample events array that is used throughout the documentation.</p>
<CodeHighlight lang="js">
export default {
    data() {
        return {
            events: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
            events2: [
                "2020", "2021", "2022", "2023"
            ]
        }
    }
}
</CodeHighlight>

<CodeHighlight>
<template v-pre>
&lt;Timeline :value="events"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</CodeHighlight>

				<h5>Layout</h5>
				<p>Default layout of the timeline is vertical, setting <i>layout</i> to "horizontal" displays the items horizontally.</p>
<CodeHighlight>
<template v-pre>
&lt;Timeline :value="events"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</CodeHighlight>

				<h5>Alignment</h5>
				<p>Location of the timeline bar is defined using the <i>align</i> property.</p>
<CodeHighlight>
<template v-pre>
&lt;Timeline :value="events" align="right"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</CodeHighlight>

				<p>In addition, the "alternate" alignment option make the contents take turns around the timeline bar.</p>
<CodeHighlight>
<template v-pre>
&lt;Timeline :value="events" align="alternate"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</CodeHighlight>

				<h5>Opposite</h5>
				<p>Content to be placed at the other side of the bar is defined with the <i>opposite</i> template.</p>
<CodeHighlight>
<template v-pre>
&lt;Timeline :value="events"&gt;
	&lt;template #opposite="slotProps"&gt;
		&lt;small class="p-text-secondary"&gt;&#123;&#123;slotProps.item.date&#125;&#125;&lt;/small&gt;
	&lt;/template&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</CodeHighlight>

				<h5>Custom Markers</h5>
				<p><i>marker</i> template allows placing a custom event marker instead of the default one. Below is an example with custom markers and content.</p>
<CodeHighlight>
<template v-pre>
&lt;Timeline :value="events" align="alternate" class="customized-timeline"&gt;
	&lt;template #marker="slotProps"&gt;
		&lt;span class="custom-marker p-shadow-2" :style="&#123;backgroundColor: slotProps.item.color&#125;"&gt;
			&lt;i :class="slotProps.item.icon"&gt;&lt;/i&gt;
		&lt;/span&gt;
	&lt;/template&gt;
	&lt;template #content="slotProps"&gt;
		&lt;Card&gt;
			&lt;template #title&gt;
				&#123;&#123;slotProps.item.status&#125;&#125;
			&lt;/template&gt;
			&lt;template #subtitle&gt;
				&#123;&#123;slotProps.item.date&#125;&#125;
			&lt;/template&gt;
			&lt;template #content&gt;
				&lt;img v-if="slotProps.item.image" :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="p-shadow-2" /&gt;
				&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
					quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
				&lt;Button label="Read more" class="p-button-text"&gt;&lt;/Button&gt;
			&lt;/template&gt;
		&lt;/Card&gt;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
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
								<td>array</td>
								<td>null</td>
								<td>An array of events to display.</td>
							</tr>
							<tr>
								<td>align</td>
								<td>string</td>
								<td>left</td>
								<td>Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.</td>
							</tr>
							<tr>
								<td>layout</td>
								<td>string</td>
								<td>vertical</td>
								<td>Orientation of the timeline, valid values are "vertical" and "horizontal".</td>
							</tr>
							<tr>
								<td>dataKey</td>
								<td>string</td>
								<td>null</td>
								<td>Name of the field that uniquely identifies the a record in the data.</td>
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
								<td>p-timeline</td>
								<td>Container element.</td>
							</tr>
							<tr>
								<td>p-timeline-left</td>
								<td>Container element when alignment is left.</td>
							</tr>
							<tr>
								<td>p-timeline-right</td>
								<td>Container element when alignment is right.</td>
							</tr>
							<tr>
								<td>p-timeline-top</td>
								<td>Container element when alignment is top.</td>
							</tr>
							<tr>
								<td>p-timeline-bottom</td>
								<td>Container element when alignment is bottom.</td>
							</tr>
							<tr>
								<td>p-timeline-alternate</td>
								<td>Container element when alignment is alternating.</td>
							</tr>
							<tr>
								<td>p-timeline-vertical</td>
								<td>Container element of a vertical timeline.</td>
							</tr>
							<tr>
								<td>p-timeline-horizontal</td>
								<td>Container element of a horizontal timeline.</td>
							</tr>
							<tr>
								<td>p-timeline-event</td>
								<td>Event element.</td>
							</tr>
							<tr>
								<td>p-timeline-event-opposite</td>
								<td>Opposite of an event content.</td>
							</tr>
							<tr>
								<td>p-timeline-event-content</td>
								<td>Event content.</td>
							</tr>
							<tr>
								<td>p-timeline-event-separator</td>
								<td>Separator element of an event.</td>
							</tr>
							<tr>
								<td>p-timeline-event-marker</td>
								<td>Marker element of an event.</td>
							</tr>
							<tr>
								<td>p-timeline-event-connector</td>
								<td>Connector element of an event.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/timeline" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
	&lt;h5&gt;Left Align&lt;/h5&gt;
	&lt;Timeline :value="events1"&gt;
		&lt;template #content="slotProps"&gt;
			&#123;&#123;slotProps.item.status&#125;&#125;
		&lt;/template&gt;
	&lt;/Timeline&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
	&lt;h5&gt;Right Align&lt;/h5&gt;
	&lt;Timeline :value="events1" align="right"&gt;
		&lt;template #content="slotProps"&gt;
			&#123;&#123;slotProps.item.status&#125;&#125;
		&lt;/template&gt;
	&lt;/Timeline&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
	&lt;h5&gt;Alternate Align&lt;/h5&gt;
	&lt;Timeline :value="events1" align="alternate"&gt;
		&lt;template #content="slotProps"&gt;
			&#123;&#123;slotProps.item.status&#125;&#125;
		&lt;/template&gt;
	&lt;/Timeline&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
	&lt;h5&gt;Opposite Content&lt;/h5&gt;
	&lt;Timeline :value="events1"&gt;
		&lt;template #opposite="slotProps"&gt;
			&lt;small class="p-text-secondary"&gt;&#123;&#123;slotProps.item.date&#125;&#125;&lt;/small&gt;
		&lt;/template&gt;
		&lt;template #content="slotProps"&gt;
			&#123;&#123;slotProps.item.status&#125;&#125;
		&lt;/template&gt;
	&lt;/Timeline&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
	&lt;h5&gt;Customized&lt;/h5&gt;
	&lt;Timeline :value="events1" align="alternate" class="customized-timeline"&gt;
		&lt;template #marker="slotProps"&gt;
			&lt;span class="custom-marker p-shadow-2" :style="&#123;backgroundColor: slotProps.item.color&#125;"&gt;
				&lt;i :class="slotProps.item.icon"&gt;&lt;/i&gt;
			&lt;/span&gt;
		&lt;/template&gt;
		&lt;template #content="slotProps"&gt;
			&lt;Card&gt;
				&lt;template #title&gt;
					&#123;&#123;slotProps.item.status&#125;&#125;
				&lt;/template&gt;
				&lt;template #subtitle&gt;
					&#123;&#123;slotProps.item.date&#125;&#125;
				&lt;/template&gt;
				&lt;template #content&gt;
					&lt;img v-if="slotProps.item.image" :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="p-shadow-2" /&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
						quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
					&lt;Button label="Read more" class="p-button-text"&gt;&lt;/Button&gt;
				&lt;/template&gt;
			&lt;/Card&gt;
		&lt;/template&gt;
	&lt;/Timeline&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
	&lt;h5&gt;Horizontal&lt;/h5&gt;
	&lt;h6&gt;Top Align&lt;/h6&gt;
	&lt;Timeline :value="events2" layout="horizontal" align="top"&gt;
		&lt;template #content="slotProps"&gt;
			&#123;&#123;slotProps.item&#125;&#125;
		&lt;/template&gt;
	&lt;/Timeline&gt;

	&lt;h6&gt;Bottom Align&lt;/h6&gt;
	&lt;Timeline :value="events2" layout="horizontal" align="bottom"&gt;
		&lt;template #content="slotProps"&gt;
			&#123;&#123;slotProps.item&#125;&#125;
		&lt;/template&gt;
	&lt;/Timeline&gt;

	&lt;h6&gt;Alternate Align&lt;/h6&gt;
	&lt;Timeline :value="events2" layout="horizontal" align="alternate"&gt;
		&lt;template #content="slotProps"&gt;
			&#123;&#123;slotProps.item&#125;&#125;
		&lt;/template&gt;
	&lt;/Timeline&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="js">
export default {
    data() {
        return {
            events1: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
            events2: [
                "2020", "2021", "2022", "2023"
            ]
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
