<template>
	<AppDoc name="RatingDemo" :sources="sources" github="rating/RatingDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Rating from 'primevue/rating';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/rating/rating.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Two-way value binding is defined using v-model.</p>
<pre v-code><code>
&lt;Rating v-model="val" /&gt;

</code></pre>

		<h5>Number of Stars</h5>
		<p>Number of stars to display is defined with <i>stars</i> property, default is 5.</p>
<pre v-code><code>
&lt;Rating v-model="val" :stars="7"/&gt;

</code></pre>

		<h5>Cancel</h5>
		<p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>
<pre v-code><code>
&lt;Rating v-model="val" :cancel="false" /&gt;

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
                        <td>modelValue</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Value of the rating.</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Name of the element.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the element should be disabled.</td>
                    </tr>
                    <tr>
                        <td>readonly</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that component is read-only.</td>
                    </tr>
                    <tr>
                        <td>stars</td>
                        <td>number</td>
                        <td>5</td>
                        <td>Number of stars.</td>
                    </tr>
                    <tr>
                        <td>cancel</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>When specified a cancel icon is displayed to allow clearing the value.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
		<div class="doc-tablewrapper">
			<table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
				<tbody>
                    <tr>
                        <td>change</td>
                        <td>event.originalEvent: Original event <br />
                        event.value: Selected option value </td>
                        <td>Callback to invoke on value change.</td>
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
                        <td>p-rating</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-rating-star</td>
                        <td>Star element</td>
                    </tr>
                    <tr>
                        <td>p-rating-star-on</td>
                        <td>Selected star element.</td>
                    </tr>
                    <tr>
                        <td>p-rating-cancel</td>
                        <td>Cancel icon.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the <router-link to="/locale">locale</router-link> API via <i>star</i> and <i>stars</i> of the <i>aria</i> property.</p>

        <h6>Keyboard Support</h6>
        <p>Keyboard interaction is derived from the native browser handling of radio buttons in a group.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>tab</i></td>
                        <td>Moves focus to the star representing the value, if there is none then first star receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">left arrow</i>
                                <i>up arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the previous star, if there is none then last radio button receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">right arrow</i>
                                <i>down arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the next star, if there is none then first star receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>If the focused star does not represent the value, changes the value to the star value.</td>
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
        <h5>Basic {{val1}}</h5>
        <Rating v-model="val1" name="basic" />

        <h5>Without Cancel</h5>
        <Rating v-model="val2" :cancel="false" name="cancel" />

        <h5>ReadOnly</h5>
        <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" name="readonly" />

        <h5>Disabled</h5>
        <Rating :modelValue="8" :disabled="true" :stars="10" name="disabled" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            val1: null,
            val2: 3,
        }
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
        <h5>Basic {{val1}}</h5>
        <Rating v-model="val1" name="basic" />

        <h5>Without Cancel</h5>
        <Rating v-model="val2" :cancel="false" name="cancel" />

        <h5>ReadOnly</h5>
        <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" name="readonly" />

        <h5>Disabled</h5>
        <Rating :modelValue="8" :disabled="true" :stars="10" name="disabled" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const val1 = ref();
        const val2 = ref(3);

        return { val1, val2 }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic {{val1}}</h5>
            <p-rating v-model="val1" name="basic"></p-rating>

            <h5>Without Cancel</h5>
            <p-rating v-model="val2" :cancel="false" name="cancel"></p-rating>

            <h5>ReadOnly</h5>
            <p-rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" name="readonly"></p-rating>

            <h5>Disabled</h5>
            <p-rating :modelValue="8" :disabled="true" :stars="10" name="disabled"></p-rating>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const val1 = ref();
                const val2 = ref(3);

                return { val1, val2 }
            },
            components: {
                "p-rating": primevue.rating
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    }
}
</script>