<template>
	<AppDoc name="TimelineDemo" :sources="sources" github="timeline/TimelineDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import Timeline from 'primevue/timeline';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/timeline/timeline.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Timeline receives the events with the <i>value</i> property as a collection of arbitrary objects. In addition, <i>content</i> template is required to display the representation of an event.
			Example below is a sample events array that is used throughout the documentation.</p>
<pre v-code.script><code>
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

</code></pre>

<pre v-code><code><template v-pre>
&lt;Timeline :value="events"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</code></pre>

		<h5>Layout</h5>
		<p>Default layout of the timeline is vertical, setting <i>layout</i> to "horizontal" displays the items horizontally.</p>
<pre v-code><code><template v-pre>
&lt;Timeline :value="events"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</code></pre>

		<h5>Alignment</h5>
		<p>Location of the timeline bar is defined using the <i>align</i> property.</p>
<pre v-code><code><template v-pre>
&lt;Timeline :value="events" align="right"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</code></pre>

		<p>In addition, the "alternate" alignment option make the contents take turns around the timeline bar.</p>
<pre v-code><code><template v-pre>
&lt;Timeline :value="events" align="alternate"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</code></pre>

		<h5>Opposite</h5>
		<p>Content to be placed at the other side of the bar is defined with the <i>opposite</i> template.</p>
<pre v-code><code><template v-pre>
&lt;Timeline :value="events"&gt;
	&lt;template #opposite="slotProps"&gt;
		&lt;small class="p-text-secondary"&gt;&#123;&#123;slotProps.item.date&#125;&#125;&lt;/small&gt;
	&lt;/template&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</code></pre>

		<h5>Custom Markers</h5>
		<p><i>marker</i> template allows placing a custom event marker instead of the default one. Below is an example with custom markers and content.</p>
<pre v-code><code><template v-pre>
&lt;Timeline :value="events" align="alternate" class="customized-timeline"&gt;
	&lt;template #marker="slotProps"&gt;
		&lt;span class="custom-marker shadow-2" :style="&#123;backgroundColor: slotProps.item.color&#125;"&gt;
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
				&lt;img v-if="slotProps.item.image" :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2" /&gt;
				&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
					quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
				&lt;Button label="Read more" class="p-button-text"&gt;&lt;/Button&gt;
			&lt;/template&gt;
		&lt;/Card&gt;
	&lt;/template&gt;
&lt;/Timeline&gt;
</template>
</code></pre>

        <h5>Custom Connectors</h5>
        <p>Connector is an element that binds two events together, use the <i>connector</i> slot to use your own element instead of the default one. If you just require to customize simple properties like the 
        color and width, apply the "p-timeline-event-connector" class to your element to use the built-in positioning.</p>
<pre v-code><code><template v-pre>
&lt;Timeline :value="events"&gt;
	&lt;template #content="slotProps"&gt;
		&#123;&#123;slotProps.item.status&#125;&#125;
	&lt;/template&gt;
    &lt;template #connector&gt;
		&lt;div class="p-timeline-event-connector" style="width:4px; color: blue"&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/Timeline&gt;
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
						<td>array</td>
						<td>null</td>
						<td>An array of events to display.</td>
					</tr>
					<tr>
						<td>align</td>
						<td>string</td>
						<td>left</td>
						<td>Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.</td>
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

		<h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>opposite</td>
                        <td>item: Position of the event<br />
							index: Index of the event</td>
                    </tr>
                    <tr>
                        <td>marker</td>
                        <td>item: Custom marker of the event<br />
							index: Index of the event</td>
                    </tr>
					<tr>
                        <td>content</td>
                        <td>item: Content of the event<br />
							index: Index of the event</td>
                    </tr>
                    <tr>
                        <td>connector</td>
                        <td>-</td>
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
        <div class="card">
            <h5>Left Align</h5>
            <Timeline :value="events1">
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Right Align</h5>
            <Timeline :value="events1" align="right">
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Alternate Align</h5>
            <Timeline :value="events1" align="alternate">
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Opposite Content</h5>
            <Timeline :value="events1">
                <template #opposite="slotProps">
                    <small class="p-text-secondary">{{slotProps.item.date}}</small>
                </template>
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

		<div class="card">
            <h5>Customized</h5>
            <Timeline :value="events1" align="alternate" class="customized-timeline">
                <template #marker="slotProps">
                    <span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>
                <template #content="slotProps">
                    <Card>
                        <template #title>
                            {{slotProps.item.status}}
                        </template>
                        <template #subtitle>
                            {{slotProps.item.date}}
                        </template>
                        <template #content>
                            <img v-if="slotProps.item.image" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.name" width="200" class="shadow-2" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="Read more" class="p-button-text"></Button>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Horizontal</h5>
            <h6>Top Align</h6>
            <Timeline :value="events2" layout="horizontal" align="top">
                <template #content="slotProps">
                    {{slotProps.item}}
                </template>
            </Timeline>

            <h6>Bottom Align</h6>
            <Timeline :value="events2" layout="horizontal" align="bottom">
                <template #content="slotProps">
                    {{slotProps.item}}
                </template>
            </Timeline>

            <h6>Alternate Align</h6>
            <Timeline :value="events2" layout="horizontal" align="alternate">
                <template #opposite>
                    &nbsp;
                </template>
                <template #content="slotProps">
                    {{slotProps.item}}
                </template>
            </Timeline>
        </div>
    </div>
</template>

<script>
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
<\\/script>

<style lang="scss" scoped>
.custom-marker {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 50%;
    z-index: 1;
}

::v-deep(.p-timeline-event-content)
::v-deep(.p-timeline-event-opposite) {
    line-height: 1;
}

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
            .p-timeline-event:nth-child(even) {
                flex-direction: row !important;
                
                .p-timeline-event-content {
                    text-align: left !important;
                }
            }

            .p-timeline-event-opposite {
                flex: 0;
            }

            .p-card {
                margin-top: 1rem;
            }
        }
}
</style>`
				},
				'composition-api': {
					tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <div class="card">
            <h5>Left Align</h5>
            <Timeline :value="events1">
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Right Align</h5>
            <Timeline :value="events1" align="right">
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Alternate Align</h5>
            <Timeline :value="events1" align="alternate">
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Opposite Content</h5>
            <Timeline :value="events1">
                <template #opposite="slotProps">
                    <small class="p-text-secondary">{{slotProps.item.date}}</small>
                </template>
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline>
        </div>

		<div class="card">
            <h5>Customized</h5>
            <Timeline :value="events1" align="alternate" class="customized-timeline">
                <template #marker="slotProps">
                    <span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>
                <template #content="slotProps">
                    <Card>
                        <template #title>
                            {{slotProps.item.status}}
                        </template>
                        <template #subtitle>
                            {{slotProps.item.date}}
                        </template>
                        <template #content>
                            <img v-if="slotProps.item.image" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.name" width="200" class="shadow-2" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="Read more" class="p-button-text"></Button>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </div>

        <div class="card">
            <h5>Horizontal</h5>
            <h6>Top Align</h6>
            <Timeline :value="events2" layout="horizontal" align="top">
                <template #content="slotProps">
                    {{slotProps.item}}
                </template>
            </Timeline>

            <h6>Bottom Align</h6>
            <Timeline :value="events2" layout="horizontal" align="bottom">
                <template #content="slotProps">
                    {{slotProps.item}}
                </template>
            </Timeline>

            <h6>Alternate Align</h6>
            <Timeline :value="events2" layout="horizontal" align="alternate">
                <template #opposite>
                    &nbsp;
                </template>
                <template #content="slotProps">
                    {{slotProps.item}}
                </template>
            </Timeline>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const events1 = ref([
            {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
            {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
        ]);
        const events2 = ref([
            "2020", "2021", "2022", "2023"
        ]);

		return { events1, events2 }
    }
}
<\\/script>

<style lang="scss" scoped>
.custom-marker {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 50%;
    z-index: 1;
}

::v-deep(.p-timeline-event-content)
::v-deep(.p-timeline-event-opposite) {
    line-height: 1;
}

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
            .p-timeline-event:nth-child(even) {
                flex-direction: row !important;
                
                .p-timeline-event-content {
                    text-align: left !important;
                }
            }

            .p-timeline-event-opposite {
                flex: 0;
            }

            .p-card {
                margin-top: 1rem;
            }
        }
}
</style>`
				},
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/timeline/timeline.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/card/card.min.js"><\\/script>`,
					content: `<div id="app">
            <div class="card">
                <h5>Left Align</h5>
                <p-timeline :value="events1">
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </p-timeline>
            </div>

            <div class="card">
                <h5>Right Align</h5>
                <p-timeline :value="events1" align="right">
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </p-timeline>
            </div>

            <div class="card">
                <h5>Alternate Align</h5>
                <p-timeline :value="events1" align="alternate">
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </p-timeline>
            </div>

            <div class="card">
                <h5>Opposite Content</h5>
                <p-timeline :value="events1">
                    <template #opposite="slotProps">
                        <small class="p-text-secondary">{{slotProps.item.date}}</small>
                    </template>
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </p-timeline>
            </div>

            <div class="card">
                <h5>Customized</h5>
                <p-timeline :value="events1" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <p-card>
                            <template #title>
                                {{slotProps.item.status}}
                            </template>
                            <template #subtitle>
                                {{slotProps.item.date}}
                            </template>
                            <template #content>
                                <img v-if="slotProps.item.image" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.name" width="200" class="shadow-2" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                <p-button label="Read more" class="p-button-text"></p-button>
                            </template>
                        </p-card>
                    </template>
                </p-timeline>
            </div>

            <div class="card">
                <h5>Horizontal</h5>
                <h6>Top Align</h6>
                <p-timeline :value="events2" layout="horizontal" align="top">
                    <template #content="slotProps">
                        {{slotProps.item}}
                    </template>
                </p-timeline>

                <h6>Bottom Align</h6>
                <p-timeline :value="events2" layout="horizontal" align="bottom">
                    <template #content="slotProps">
                        {{slotProps.item}}
                    </template>
                </p-timeline>

                <h6>Alternate Align</h6>
                <p-timeline :value="events2" layout="horizontal" align="alternate">
                    <template #opposite>
                        &nbsp;
                    </template>
                    <template #content="slotProps">
                        {{slotProps.item}}
                    </template>
                </p-timeline>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const events1 = ref([
                    {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                    {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                    {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                    {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
                ]);
                const events2 = ref([
                    "2020", "2021", "2022", "2023"
                ]);

                return { events1, events2 }
            },
            components: {
                "p-timeline": primevue.timeline,
                "p-card": primevue.card,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .custom-marker {
            display: flex;
            width: 2rem;
            height: 2rem;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            border-radius: 50%;
            z-index: 1;
        }

        .p-timeline-event-content,
        .p-timeline-event-opposite, {
            line-height: 1;
        }

        @media screen and (max-width: 960px) {
            .customized-timeline .p-timeline-event:nth-child(even) {
                flex-direction: row !important;
            }
                    
            .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
                text-align: left !important;
            }

            .customized-timeline .p-timeline-event-opposite {
                flex: 0;
            }

            .customized-timeline .p-card {
                margin-top: 1rem;
            }
        }
        </style>`
				}
			}
		}
	}
}
</script>
