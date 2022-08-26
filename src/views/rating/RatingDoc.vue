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
                    <tr>
                        <td>onIcon</td>
                        <td>string</td>
                        <td>pi pi-star</td>
                        <td>Can be used to add different icon</td>
                    </tr>
                     <tr>
                        <td>offIcon</td>
                        <td>string</td>
                        <td>pi pi-star-fill</td>
                        <td>Can be used to add different icon</td>
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

        <h5>Templating</h5>
        <Rating :cancel="false">
            <template #default="{key}">
                <img v-if="key < 3" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik00MDAuMTczLDI0Mi43NzdsNTUuMjcxLTUzLjg3NmM3LjcxNC03LjUyLDEwLjQzOS0xOC41NTYsNy4xMDktMjguODAzYy0zLjMyOS0xMC4yNDYtMTIuMDE5LTE3LjU3My0yMi42ODItMTkuMTIzDQoJCQkJbC0xMTkuMTgtMTcuMzE4TDI2Ny4zOTQsMTUuNjYzQzI2Mi42MjYsNi4wMDIsMjUyLjk3MSwwLDI0Mi4xOTgsMGMtMTAuNzc1LDAtMjAuNDI5LDYuMDAyLTI1LjE5NywxNS42NjJsLTUzLjI5OCwxMDcuOTk0DQoJCQkJbC0xMTkuMTgsMTcuMzE4Yy0xMC42NjEsMS41NS0xOS4zNTMsOC44NzgtMjIuNjgyLDE5LjEyNGMtMy4zMywxMC4yNDYtMC42MDUsMjEuMjgyLDcuMTA5LDI4LjgwMmw4Ni4yMzksODQuMDYyTDk0LjgzMiwzOTEuNjYxDQoJCQkJYy0xLjgyLDEwLjYxOCwyLjQ2MiwyMS4xNDksMTEuMTc4LDI3LjQ4MWM0LjkyNiwzLjU3OCwxMC42ODgsNS4zOTYsMTYuNDg4LDUuMzk2YzQuNDY1LDAsOC45NTQtMS4wNzcsMTMuMTAxLTMuMjU4bDc4LjU2LTQxLjMwMQ0KCQkJCUMyMTcuNjk3LDQ1My4zNzYsMjc4LjUxNyw1MTIsMzUyLjc3NSw1MTJjNzYuNTIzLDAsMTM4Ljc4LTYyLjI1NywxMzguNzgtMTM4Ljc4MQ0KCQkJCUM0OTEuNTU1LDMxMy4zMzMsNDUzLjQyNywyNjIuMTg4LDQwMC4xNzMsMjQyLjc3N3ogTTIxNS4wNzQsMzU1Ljg5bC04OS4xOTgsNDYuODkzYy0zLjU3NywxLjg3OS02LjQ5NCwwLjI0Mi03LjU4Mi0wLjU0OQ0KCQkJCWMtMS4wODktMC43OTEtMy41NDctMy4wNjEtMi44NjQtNy4wNDJsMjEuMjg3LTEyNC4xMTJjMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OGwtOTAuMTczLTg3Ljg5Nw0KCQkJCWMtMi44OTMtMi44MTktMi4yMzgtNi4xLTEuODIxLTcuMzhjMC40MTUtMS4yOCwxLjgxNC00LjMyLDUuODEyLTQuOTAxbDEyNC42MTYtMTguMTA4YzMuNDA0LTAuNDk0LDYuMzQ2LTIuNjMyLDcuODY4LTUuNzE2DQoJCQkJTDIzNS43NDIsMjQuOTFjMS43ODctMy42MjIsNS4xMTEtNC4wMTIsNi40NTYtNC4wMTJjMS4zNDUsMCw0LjY2OSwwLjM5MSw2LjQ1NSw0LjAxM2w1NS43MywxMTIuOTIxDQoJCQkJYzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY3LDUuNzE2bDEyNC42MTcsMTguMTA4YzMuOTk4LDAuNTgxLDUuMzk2LDMuNjIxLDUuODEzLDQuOWMwLjQxNSwxLjI4LDEuMDcsNC41NjEtMS44MjIsNy4zOA0KCQkJCWwtNjQuMTg2LDYyLjU2NmMtNy43NjYtMS4zNTMtMTUuNzQ5LTIuMDY2LTIzLjg5Ni0yLjA2NmMtMS4zMzMsMC0yLjY2MiwwLjAyMy0zLjk4NywwLjA2MWw0Mi40NDYtNDEuMzc0DQoJCQkJYzIuODQ4LTIuNzc2LDMuODcyLTYuOTI5LDIuNjQ0LTEwLjcxMWMtMS4yMy0zLjc4My00LjQ5OS02LjUzOS04LjQzNS03LjExMmwtOTIuNTA1LTEzLjQ0MmwtNDEuMzY5LTgzLjgyNA0KCQkJCWMtMS43NjEtMy41NjYtNS4zOTMtNS44MjQtOS4zNzEtNS44MjRjLTMuOTc4LDAtNy42MDksMi4yNTgtOS4zNzEsNS44MjRsLTQxLjM3LDgzLjgyNGwtOTIuNTA2LDEzLjQ0Mw0KCQkJCWMtMy45MzYsMC41NzItNy4yMDYsMy4zMjktOC40MzQsNy4xMTJjLTEuMjI5LDMuNzg0LTAuMjA0LDcuOTM1LDIuNjQ0LDEwLjcxMWw2Ni45MzgsNjUuMjQ3bC0xNS44MDIsOTIuMTMyDQoJCQkJYy0wLjY3MywzLjkxOSwwLjkzOSw3Ljg4Miw0LjE1OCwxMC4yMmMxLjgyLDEuMzIzLDMuOTc3LDEuOTk2LDYuMTQzLDEuOTk2YzEuNjYzLDAsMy4zMzItMC4zOTYsNC44NjEtMS4ybDYxLjc0LTMyLjQ1OQ0KCQkJCUMyMTguMzA1LDMzNy42NjEsMjE2LjIzMywzNDYuNjM1LDIxNS4wNzQsMzU1Ljg5eiBNMTc4LjYyLDI0Ny4yNGwtNTUuNzExLTU0LjMwM2w3Ni45OTEtMTEuMTg4DQoJCQkJYzMuNDAzLTAuNDk0LDYuMzQ1LTIuNjMyLDcuODY3LTUuNzE2bDM0LjQzLTY5Ljc2NGwzNC40MjksNjkuNzY1YzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY4LDUuNzE2bDc2Ljk4OSwxMS4xODgNCgkJCQlsLTQ4LjU2OSw0Ny4zNDJjLTMxLjYzMyw5LjUwMi01OC41NDcsMzAuMDA2LTc2LjI3OSw1Ny4wNTNsLTY4LjE2NCwzNS44MzZsMTMuMTUyLTc2LjY3OQ0KCQkJCUMxODIuMjA2LDI1My4wOTksMTgxLjA4MiwyNDkuNjQxLDE3OC42MiwyNDcuMjR6IE0zNTIuNzc1LDQ5MS4xMDJjLTY1LjAwMSwwLTExNy44ODMtNTIuODgyLTExNy44ODMtMTE3Ljg4Mw0KCQkJCXM1Mi44ODItMTE3Ljg4MywxMTcuODgzLTExNy44ODNzMTE3Ljg4Miw1Mi44ODIsMTE3Ljg4MiwxMTcuODgzUzQxNy43NzYsNDkxLjEwMiwzNTIuNzc1LDQ5MS4xMDJ6Ii8+DQoJCQk8cGF0aCBkPSJNMzg3LjgzOSwzMTEuODczYy0xMy41NzcsMC0yNi4yMDYsNi4yMjItMzUuMDY1LDE2LjUyNGMtOC44Ni0xMC4zMDItMjEuNDg3LTE2LjUyNC0zNS4wNjYtMTYuNTI0DQoJCQkJYy0yNi4zMTQsMC00Ny43MjEsMjMuMDQzLTQ3LjcyMSw1MS4zNjdjMCwyMC45ODUsMTMuNTIzLDQyLjE2NSw0MC4xOTUsNjIuOTUxYzE4LjczNiwxNC42MDEsMzcuMjQ1LDIzLjY2MiwzOC4wMjUsMjQuMDQNCgkJCQljMS40NDIsMC43LDMuMDA0LDEuMDUxLDQuNTY3LDEuMDUxczMuMTI1LTAuMzUsNC41NjctMS4wNTFjMC43NzktMC4zNzgsMTkuMjg5LTkuNDM5LDM4LjAyNS0yNC4wNA0KCQkJCWMyNi42Ny0yMC43ODYsNDAuMTk0LTQxLjk2Niw0MC4xOTQtNjIuOTUxQzQzNS41NiwzMzQuOTE2LDQxNC4xNTIsMzExLjg3MywzODcuODM5LDMxMS44NzN6IE0zNTIuNzc1LDQyOS4wOTUNCgkJCQljLTIwLjc3Mi0xMS4wOTYtNjEuODg4LTM4LjY3Mi02MS44ODgtNjUuODU1YzAtMTYuODAxLDEyLjAzMy0zMC40NjksMjYuODI0LTMwLjQ2OWMxMS4xMzIsMCwyMS4yMzUsNy45NjksMjUuMTQsMTkuODMxDQoJCQkJYzEuNDEyLDQuMjg2LDUuNDE0LDcuMTgzLDkuOTI1LDcuMTgzYzQuNTEyLDAsOC41MTUtMi44OTYsOS45MjUtNy4xODRjMy45MDMtMTEuODYyLDE0LjAwNS0xOS44MzEsMjUuMTM5LTE5LjgzMQ0KCQkJCWMxNC43OTEsMCwyNi44MjQsMTMuNjY4LDI2LjgyNCwzMC40NjlDNDE0LjY2MiwzOTAuNDI1LDM3My41NCw0MTguMDAzLDM1Mi43NzUsNDI5LjA5NXoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" height="24" width="24" :class="{'ml-2': key > 1}"  />
                <img v-else src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGOEM2NjA7IiBkPSJNMjQyLjE5NywzNTMuNDM0bC0xMTEuNDU5LDU4LjU5OGMtMTIuOTQ3LDYuODA2LTI4LjA4LTQuMTg4LTI1LjYwNy0xOC42MDRsMjEuMjg3LTEyNC4xMTINCglsLTkwLjE3My04Ny44OTdjLTEwLjQ3NS0xMC4yMTEtNC42OTUtMjgsOS43ODEtMzAuMTA0bDEyNC42MTYtMTguMTA4bDU1LjczLTExMi45MjFjNi40NzQtMTMuMTE4LDI1LjE3OS0xMy4xMTgsMzEuNjUyLDANCglsNTUuNzMsMTEyLjkyMWwxMjQuNjE2LDE4LjEwOGMxNC40NzYsMi4xMDMsMjAuMjU1LDE5Ljg5Myw5Ljc4MSwzMC4xMDRsLTkwLjE3Myw4Ny44OTdsMjEuMjg3LDEyNC4xMTINCgljMi40NzIsMTQuNDE4LTEyLjY2LDI1LjQxMi0yNS42MDcsMTguNjA0TDI0Mi4xOTcsMzUzLjQzNHoiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFQ0YwRjE7IiBwb2ludHM9IjE3MS4zMjcsMjU0LjcyMyAxMDAuNDU1LDE4NS42NDIgMTk4LjM5NywxNzEuNDA5IDI0Mi4xOTgsODIuNjYgMjg1Ljk5OCwxNzEuNDA5IA0KCTM4My45NCwxODUuNjQyIDMxMy4wNjgsMjU0LjcyMyAzMjkuNzk5LDM1Mi4yNjkgMjQyLjE5OCwzMDYuMjE0IDE1NC41OTYsMzUyLjI2OSAiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzNFQkQ5MTsiIGN4PSIzNTIuNzc5IiBjeT0iMzczLjIxNyIgcj0iMTI4LjMzNCIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik00MDAuMTczLDI0Mi43NzdsNTUuMjcxLTUzLjg3NmM3LjcxNC03LjUyLDEwLjQzOS0xOC41NTYsNy4xMDktMjguODAzDQoJCWMtMy4zMjktMTAuMjQ2LTEyLjAxOS0xNy41NzMtMjIuNjgyLTE5LjEyM2wtMTE5LjE4LTE3LjMxOEwyNjcuMzk0LDE1LjY2M0MyNjIuNjI2LDYuMDAyLDI1Mi45NzEsMCwyNDIuMTk4LDANCgkJYy0xMC43NzUsMC0yMC40MjksNi4wMDItMjUuMTk3LDE1LjY2MmwtNTMuMjk4LDEwNy45OTRsLTExOS4xOCwxNy4zMThjLTEwLjY2MSwxLjU1LTE5LjM1Myw4Ljg3Ny0yMi42ODIsMTkuMTI0DQoJCWMtMy4zMywxMC4yNDYtMC42MDUsMjEuMjgyLDcuMTA5LDI4LjgwMmw4Ni4yMzksODQuMDYyTDk0LjgzMiwzOTEuNjYxYy0xLjgyLDEwLjYxOCwyLjQ2MiwyMS4xNDksMTEuMTc4LDI3LjQ4MQ0KCQljNC45MjYsMy41NzgsMTAuNjg4LDUuMzk2LDE2LjQ4OCw1LjM5NmM0LjQ2NSwwLDguOTU0LTEuMDc3LDEzLjEwMS0zLjI1OGw3OC41Ni00MS4zMDFDMjE3LjY5Nyw0NTMuMzc2LDI3OC41MTcsNTEyLDM1Mi43NzUsNTEyDQoJCWM3Ni41MjMsMCwxMzguNzgtNjIuMjU3LDEzOC43OC0xMzguNzgxQzQ5MS41NTUsMzEzLjMzMiw0NTMuNDI3LDI2Mi4xODgsNDAwLjE3MywyNDIuNzc3eiBNMTI1Ljg3Niw0MDIuNzgzDQoJCWMtMy41NzcsMS44OC02LjQ5NCwwLjI0MS03LjU4Mi0wLjU0OWMtMS4wODktMC43OTEtMy41NDctMy4wNjEtMi44NjQtNy4wNDJsMjEuMjg3LTEyNC4xMTJjMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OA0KCQlsLTkwLjE3My04Ny44OTdjLTIuODkzLTIuODE5LTIuMjM4LTYuMS0xLjgyMS03LjM4YzAuNDE1LTEuMjgsMS44MTQtNC4zMiw1LjgxMi00LjkwMWwxMjQuNjE2LTE4LjEwOA0KCQljMy40MDQtMC40OTQsNi4zNDYtMi42MzIsNy44NjgtNS43MTZMMjM1Ljc0MiwyNC45MWMxLjc4Ny0zLjYyMiw1LjExMS00LjAxMiw2LjQ1Ni00LjAxMmMxLjM0NSwwLDQuNjY5LDAuMzkxLDYuNDU1LDQuMDEzDQoJCWw1NS43MywxMTIuOTIxYzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY3LDUuNzE2bDEyNC42MTcsMTguMTA4YzMuOTk4LDAuNTgxLDUuMzk2LDMuNjIxLDUuODEzLDQuOQ0KCQljMC40MTUsMS4yOCwxLjA3LDQuNTYxLTEuODIyLDcuMzhsLTY0LjE4Niw2Mi41NjZjLTcuNzY2LTEuMzUzLTE1Ljc0OS0yLjA2Ni0yMy44OTYtMi4wNjZjLTEuMzMzLDAtMi42NjIsMC4wMjMtMy45ODcsMC4wNjENCgkJbDQyLjQ0Ni00MS4zNzRjMi44NDgtMi43NzYsMy44NzItNi45MjksMi42NDQtMTAuNzExYy0xLjIzLTMuNzgzLTQuNDk5LTYuNTM5LTguNDM1LTcuMTEybC05Mi41MDUtMTMuNDQybC00MS4zNjktODMuODI0DQoJCWMtMS43NjEtMy41NjYtNS4zOTMtNS44MjQtOS4zNzEtNS44MjRzLTcuNjA5LDIuMjU4LTkuMzcxLDUuODI0bC00MS4zNyw4My44MjRsLTkyLjUwNiwxMy40NDMNCgkJYy0zLjkzNiwwLjU3Mi03LjIwNiwzLjMyOS04LjQzNCw3LjExMmMtMS4yMjksMy43ODQtMC4yMDQsNy45MzUsMi42NDQsMTAuNzExbDY2LjkzOCw2NS4yNDdsLTE1LjgwMiw5Mi4xMzINCgkJYy0wLjY3MywzLjkxOSwwLjkzOSw3Ljg4Miw0LjE1OCwxMC4yMmMxLjgyLDEuMzIzLDMuOTc3LDEuOTk2LDYuMTQzLDEuOTk2YzEuNjYzLDAsMy4zMzItMC4zOTYsNC44NjEtMS4ybDYxLjc0LTMyLjQ1OQ0KCQljLTIuODk0LDguNjAxLTQuOTY2LDE3LjU3NS02LjEyNCwyNi44M0wxMjUuODc2LDQwMi43ODN6IE0yMzYuNjM3LDI5Ny4zMzJsLTY4LjE2NCwzNS44MzZsMTMuMTUyLTc2LjY3OQ0KCQljMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OWwtNTUuNzExLTU0LjMwM2w3Ni45OTEtMTEuMTg4YzMuNDAzLTAuNDk0LDYuMzQ1LTIuNjMyLDcuODY3LTUuNzE2bDM0LjQzLTY5Ljc2NA0KCQlsMzQuNDI5LDY5Ljc2NWMxLjUyMiwzLjA4Myw0LjQ2NCw1LjIyMSw3Ljg2OCw1LjcxNmw3Ni45ODksMTEuMTg4bC00OC41NjksNDcuMzQyDQoJCUMyODEuMjgzLDI0OS43ODIsMjU0LjM2OSwyNzAuMjg2LDIzNi42MzcsMjk3LjMzMnogTTM1Mi43NzUsNDkxLjEwMmMtNjUuMDAxLDAtMTE3Ljg4My01Mi44ODItMTE3Ljg4My0xMTcuODgzDQoJCXM1Mi44ODItMTE3Ljg4MywxMTcuODgzLTExNy44ODNzMTE3Ljg4Miw1Mi44ODIsMTE3Ljg4MiwxMTcuODgzUzQxNy43NzYsNDkxLjEwMiwzNTIuNzc1LDQ5MS4xMDJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik00MzYuNzU1LDMyNi43MTljLTQuMDc5LTQuMDc5LTEwLjY5Ni00LjA4LTE0Ljc3OCwwbC04Mi42NDgsODIuNjQ4bC00MS45MDctNDEuOTA4DQoJCWMtNC4wODEtNC4wNzktMTAuNjk2LTQuMDc5LTE0Ljc3OCwwYy00LjA4LDQuMDgtNC4wOCwxMC42OTcsMCwxNC43NzhsNDkuMjk2LDQ5LjI5NmMyLjA0MSwyLjA0MSw0LjcxNSwzLjA2MSw3LjM4OCwzLjA2MQ0KCQlzNS4zNDgtMS4wMiw3LjM4OC0zLjA2MWw5MC4wMzctOTAuMDM2QzQ0MC44MzUsMzM3LjQxNSw0NDAuODM1LDMzMC43OTksNDM2Ljc1NSwzMjYuNzE5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" height="24" width="24" class="ml-2" />
            </template>
        </Rating>
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

        <h5>Templating</h5>
        <Rating :cancel="false">
            <template #default="{key}">
                <img v-if="key < 3" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik00MDAuMTczLDI0Mi43NzdsNTUuMjcxLTUzLjg3NmM3LjcxNC03LjUyLDEwLjQzOS0xOC41NTYsNy4xMDktMjguODAzYy0zLjMyOS0xMC4yNDYtMTIuMDE5LTE3LjU3My0yMi42ODItMTkuMTIzDQoJCQkJbC0xMTkuMTgtMTcuMzE4TDI2Ny4zOTQsMTUuNjYzQzI2Mi42MjYsNi4wMDIsMjUyLjk3MSwwLDI0Mi4xOTgsMGMtMTAuNzc1LDAtMjAuNDI5LDYuMDAyLTI1LjE5NywxNS42NjJsLTUzLjI5OCwxMDcuOTk0DQoJCQkJbC0xMTkuMTgsMTcuMzE4Yy0xMC42NjEsMS41NS0xOS4zNTMsOC44NzgtMjIuNjgyLDE5LjEyNGMtMy4zMywxMC4yNDYtMC42MDUsMjEuMjgyLDcuMTA5LDI4LjgwMmw4Ni4yMzksODQuMDYyTDk0LjgzMiwzOTEuNjYxDQoJCQkJYy0xLjgyLDEwLjYxOCwyLjQ2MiwyMS4xNDksMTEuMTc4LDI3LjQ4MWM0LjkyNiwzLjU3OCwxMC42ODgsNS4zOTYsMTYuNDg4LDUuMzk2YzQuNDY1LDAsOC45NTQtMS4wNzcsMTMuMTAxLTMuMjU4bDc4LjU2LTQxLjMwMQ0KCQkJCUMyMTcuNjk3LDQ1My4zNzYsMjc4LjUxNyw1MTIsMzUyLjc3NSw1MTJjNzYuNTIzLDAsMTM4Ljc4LTYyLjI1NywxMzguNzgtMTM4Ljc4MQ0KCQkJCUM0OTEuNTU1LDMxMy4zMzMsNDUzLjQyNywyNjIuMTg4LDQwMC4xNzMsMjQyLjc3N3ogTTIxNS4wNzQsMzU1Ljg5bC04OS4xOTgsNDYuODkzYy0zLjU3NywxLjg3OS02LjQ5NCwwLjI0Mi03LjU4Mi0wLjU0OQ0KCQkJCWMtMS4wODktMC43OTEtMy41NDctMy4wNjEtMi44NjQtNy4wNDJsMjEuMjg3LTEyNC4xMTJjMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OGwtOTAuMTczLTg3Ljg5Nw0KCQkJCWMtMi44OTMtMi44MTktMi4yMzgtNi4xLTEuODIxLTcuMzhjMC40MTUtMS4yOCwxLjgxNC00LjMyLDUuODEyLTQuOTAxbDEyNC42MTYtMTguMTA4YzMuNDA0LTAuNDk0LDYuMzQ2LTIuNjMyLDcuODY4LTUuNzE2DQoJCQkJTDIzNS43NDIsMjQuOTFjMS43ODctMy42MjIsNS4xMTEtNC4wMTIsNi40NTYtNC4wMTJjMS4zNDUsMCw0LjY2OSwwLjM5MSw2LjQ1NSw0LjAxM2w1NS43MywxMTIuOTIxDQoJCQkJYzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY3LDUuNzE2bDEyNC42MTcsMTguMTA4YzMuOTk4LDAuNTgxLDUuMzk2LDMuNjIxLDUuODEzLDQuOWMwLjQxNSwxLjI4LDEuMDcsNC41NjEtMS44MjIsNy4zOA0KCQkJCWwtNjQuMTg2LDYyLjU2NmMtNy43NjYtMS4zNTMtMTUuNzQ5LTIuMDY2LTIzLjg5Ni0yLjA2NmMtMS4zMzMsMC0yLjY2MiwwLjAyMy0zLjk4NywwLjA2MWw0Mi40NDYtNDEuMzc0DQoJCQkJYzIuODQ4LTIuNzc2LDMuODcyLTYuOTI5LDIuNjQ0LTEwLjcxMWMtMS4yMy0zLjc4My00LjQ5OS02LjUzOS04LjQzNS03LjExMmwtOTIuNTA1LTEzLjQ0MmwtNDEuMzY5LTgzLjgyNA0KCQkJCWMtMS43NjEtMy41NjYtNS4zOTMtNS44MjQtOS4zNzEtNS44MjRjLTMuOTc4LDAtNy42MDksMi4yNTgtOS4zNzEsNS44MjRsLTQxLjM3LDgzLjgyNGwtOTIuNTA2LDEzLjQ0Mw0KCQkJCWMtMy45MzYsMC41NzItNy4yMDYsMy4zMjktOC40MzQsNy4xMTJjLTEuMjI5LDMuNzg0LTAuMjA0LDcuOTM1LDIuNjQ0LDEwLjcxMWw2Ni45MzgsNjUuMjQ3bC0xNS44MDIsOTIuMTMyDQoJCQkJYy0wLjY3MywzLjkxOSwwLjkzOSw3Ljg4Miw0LjE1OCwxMC4yMmMxLjgyLDEuMzIzLDMuOTc3LDEuOTk2LDYuMTQzLDEuOTk2YzEuNjYzLDAsMy4zMzItMC4zOTYsNC44NjEtMS4ybDYxLjc0LTMyLjQ1OQ0KCQkJCUMyMTguMzA1LDMzNy42NjEsMjE2LjIzMywzNDYuNjM1LDIxNS4wNzQsMzU1Ljg5eiBNMTc4LjYyLDI0Ny4yNGwtNTUuNzExLTU0LjMwM2w3Ni45OTEtMTEuMTg4DQoJCQkJYzMuNDAzLTAuNDk0LDYuMzQ1LTIuNjMyLDcuODY3LTUuNzE2bDM0LjQzLTY5Ljc2NGwzNC40MjksNjkuNzY1YzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY4LDUuNzE2bDc2Ljk4OSwxMS4xODgNCgkJCQlsLTQ4LjU2OSw0Ny4zNDJjLTMxLjYzMyw5LjUwMi01OC41NDcsMzAuMDA2LTc2LjI3OSw1Ny4wNTNsLTY4LjE2NCwzNS44MzZsMTMuMTUyLTc2LjY3OQ0KCQkJCUMxODIuMjA2LDI1My4wOTksMTgxLjA4MiwyNDkuNjQxLDE3OC42MiwyNDcuMjR6IE0zNTIuNzc1LDQ5MS4xMDJjLTY1LjAwMSwwLTExNy44ODMtNTIuODgyLTExNy44ODMtMTE3Ljg4Mw0KCQkJCXM1Mi44ODItMTE3Ljg4MywxMTcuODgzLTExNy44ODNzMTE3Ljg4Miw1Mi44ODIsMTE3Ljg4MiwxMTcuODgzUzQxNy43NzYsNDkxLjEwMiwzNTIuNzc1LDQ5MS4xMDJ6Ii8+DQoJCQk8cGF0aCBkPSJNMzg3LjgzOSwzMTEuODczYy0xMy41NzcsMC0yNi4yMDYsNi4yMjItMzUuMDY1LDE2LjUyNGMtOC44Ni0xMC4zMDItMjEuNDg3LTE2LjUyNC0zNS4wNjYtMTYuNTI0DQoJCQkJYy0yNi4zMTQsMC00Ny43MjEsMjMuMDQzLTQ3LjcyMSw1MS4zNjdjMCwyMC45ODUsMTMuNTIzLDQyLjE2NSw0MC4xOTUsNjIuOTUxYzE4LjczNiwxNC42MDEsMzcuMjQ1LDIzLjY2MiwzOC4wMjUsMjQuMDQNCgkJCQljMS40NDIsMC43LDMuMDA0LDEuMDUxLDQuNTY3LDEuMDUxczMuMTI1LTAuMzUsNC41NjctMS4wNTFjMC43NzktMC4zNzgsMTkuMjg5LTkuNDM5LDM4LjAyNS0yNC4wNA0KCQkJCWMyNi42Ny0yMC43ODYsNDAuMTk0LTQxLjk2Niw0MC4xOTQtNjIuOTUxQzQzNS41NiwzMzQuOTE2LDQxNC4xNTIsMzExLjg3MywzODcuODM5LDMxMS44NzN6IE0zNTIuNzc1LDQyOS4wOTUNCgkJCQljLTIwLjc3Mi0xMS4wOTYtNjEuODg4LTM4LjY3Mi02MS44ODgtNjUuODU1YzAtMTYuODAxLDEyLjAzMy0zMC40NjksMjYuODI0LTMwLjQ2OWMxMS4xMzIsMCwyMS4yMzUsNy45NjksMjUuMTQsMTkuODMxDQoJCQkJYzEuNDEyLDQuMjg2LDUuNDE0LDcuMTgzLDkuOTI1LDcuMTgzYzQuNTEyLDAsOC41MTUtMi44OTYsOS45MjUtNy4xODRjMy45MDMtMTEuODYyLDE0LjAwNS0xOS44MzEsMjUuMTM5LTE5LjgzMQ0KCQkJCWMxNC43OTEsMCwyNi44MjQsMTMuNjY4LDI2LjgyNCwzMC40NjlDNDE0LjY2MiwzOTAuNDI1LDM3My41NCw0MTguMDAzLDM1Mi43NzUsNDI5LjA5NXoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" height="24" width="24" :class="{'ml-2': key > 1}"  />
                <img v-else src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGOEM2NjA7IiBkPSJNMjQyLjE5NywzNTMuNDM0bC0xMTEuNDU5LDU4LjU5OGMtMTIuOTQ3LDYuODA2LTI4LjA4LTQuMTg4LTI1LjYwNy0xOC42MDRsMjEuMjg3LTEyNC4xMTINCglsLTkwLjE3My04Ny44OTdjLTEwLjQ3NS0xMC4yMTEtNC42OTUtMjgsOS43ODEtMzAuMTA0bDEyNC42MTYtMTguMTA4bDU1LjczLTExMi45MjFjNi40NzQtMTMuMTE4LDI1LjE3OS0xMy4xMTgsMzEuNjUyLDANCglsNTUuNzMsMTEyLjkyMWwxMjQuNjE2LDE4LjEwOGMxNC40NzYsMi4xMDMsMjAuMjU1LDE5Ljg5Myw5Ljc4MSwzMC4xMDRsLTkwLjE3Myw4Ny44OTdsMjEuMjg3LDEyNC4xMTINCgljMi40NzIsMTQuNDE4LTEyLjY2LDI1LjQxMi0yNS42MDcsMTguNjA0TDI0Mi4xOTcsMzUzLjQzNHoiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFQ0YwRjE7IiBwb2ludHM9IjE3MS4zMjcsMjU0LjcyMyAxMDAuNDU1LDE4NS42NDIgMTk4LjM5NywxNzEuNDA5IDI0Mi4xOTgsODIuNjYgMjg1Ljk5OCwxNzEuNDA5IA0KCTM4My45NCwxODUuNjQyIDMxMy4wNjgsMjU0LjcyMyAzMjkuNzk5LDM1Mi4yNjkgMjQyLjE5OCwzMDYuMjE0IDE1NC41OTYsMzUyLjI2OSAiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzNFQkQ5MTsiIGN4PSIzNTIuNzc5IiBjeT0iMzczLjIxNyIgcj0iMTI4LjMzNCIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik00MDAuMTczLDI0Mi43NzdsNTUuMjcxLTUzLjg3NmM3LjcxNC03LjUyLDEwLjQzOS0xOC41NTYsNy4xMDktMjguODAzDQoJCWMtMy4zMjktMTAuMjQ2LTEyLjAxOS0xNy41NzMtMjIuNjgyLTE5LjEyM2wtMTE5LjE4LTE3LjMxOEwyNjcuMzk0LDE1LjY2M0MyNjIuNjI2LDYuMDAyLDI1Mi45NzEsMCwyNDIuMTk4LDANCgkJYy0xMC43NzUsMC0yMC40MjksNi4wMDItMjUuMTk3LDE1LjY2MmwtNTMuMjk4LDEwNy45OTRsLTExOS4xOCwxNy4zMThjLTEwLjY2MSwxLjU1LTE5LjM1Myw4Ljg3Ny0yMi42ODIsMTkuMTI0DQoJCWMtMy4zMywxMC4yNDYtMC42MDUsMjEuMjgyLDcuMTA5LDI4LjgwMmw4Ni4yMzksODQuMDYyTDk0LjgzMiwzOTEuNjYxYy0xLjgyLDEwLjYxOCwyLjQ2MiwyMS4xNDksMTEuMTc4LDI3LjQ4MQ0KCQljNC45MjYsMy41NzgsMTAuNjg4LDUuMzk2LDE2LjQ4OCw1LjM5NmM0LjQ2NSwwLDguOTU0LTEuMDc3LDEzLjEwMS0zLjI1OGw3OC41Ni00MS4zMDFDMjE3LjY5Nyw0NTMuMzc2LDI3OC41MTcsNTEyLDM1Mi43NzUsNTEyDQoJCWM3Ni41MjMsMCwxMzguNzgtNjIuMjU3LDEzOC43OC0xMzguNzgxQzQ5MS41NTUsMzEzLjMzMiw0NTMuNDI3LDI2Mi4xODgsNDAwLjE3MywyNDIuNzc3eiBNMTI1Ljg3Niw0MDIuNzgzDQoJCWMtMy41NzcsMS44OC02LjQ5NCwwLjI0MS03LjU4Mi0wLjU0OWMtMS4wODktMC43OTEtMy41NDctMy4wNjEtMi44NjQtNy4wNDJsMjEuMjg3LTEyNC4xMTJjMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OA0KCQlsLTkwLjE3My04Ny44OTdjLTIuODkzLTIuODE5LTIuMjM4LTYuMS0xLjgyMS03LjM4YzAuNDE1LTEuMjgsMS44MTQtNC4zMiw1LjgxMi00LjkwMWwxMjQuNjE2LTE4LjEwOA0KCQljMy40MDQtMC40OTQsNi4zNDYtMi42MzIsNy44NjgtNS43MTZMMjM1Ljc0MiwyNC45MWMxLjc4Ny0zLjYyMiw1LjExMS00LjAxMiw2LjQ1Ni00LjAxMmMxLjM0NSwwLDQuNjY5LDAuMzkxLDYuNDU1LDQuMDEzDQoJCWw1NS43MywxMTIuOTIxYzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY3LDUuNzE2bDEyNC42MTcsMTguMTA4YzMuOTk4LDAuNTgxLDUuMzk2LDMuNjIxLDUuODEzLDQuOQ0KCQljMC40MTUsMS4yOCwxLjA3LDQuNTYxLTEuODIyLDcuMzhsLTY0LjE4Niw2Mi41NjZjLTcuNzY2LTEuMzUzLTE1Ljc0OS0yLjA2Ni0yMy44OTYtMi4wNjZjLTEuMzMzLDAtMi42NjIsMC4wMjMtMy45ODcsMC4wNjENCgkJbDQyLjQ0Ni00MS4zNzRjMi44NDgtMi43NzYsMy44NzItNi45MjksMi42NDQtMTAuNzExYy0xLjIzLTMuNzgzLTQuNDk5LTYuNTM5LTguNDM1LTcuMTEybC05Mi41MDUtMTMuNDQybC00MS4zNjktODMuODI0DQoJCWMtMS43NjEtMy41NjYtNS4zOTMtNS44MjQtOS4zNzEtNS44MjRzLTcuNjA5LDIuMjU4LTkuMzcxLDUuODI0bC00MS4zNyw4My44MjRsLTkyLjUwNiwxMy40NDMNCgkJYy0zLjkzNiwwLjU3Mi03LjIwNiwzLjMyOS04LjQzNCw3LjExMmMtMS4yMjksMy43ODQtMC4yMDQsNy45MzUsMi42NDQsMTAuNzExbDY2LjkzOCw2NS4yNDdsLTE1LjgwMiw5Mi4xMzINCgkJYy0wLjY3MywzLjkxOSwwLjkzOSw3Ljg4Miw0LjE1OCwxMC4yMmMxLjgyLDEuMzIzLDMuOTc3LDEuOTk2LDYuMTQzLDEuOTk2YzEuNjYzLDAsMy4zMzItMC4zOTYsNC44NjEtMS4ybDYxLjc0LTMyLjQ1OQ0KCQljLTIuODk0LDguNjAxLTQuOTY2LDE3LjU3NS02LjEyNCwyNi44M0wxMjUuODc2LDQwMi43ODN6IE0yMzYuNjM3LDI5Ny4zMzJsLTY4LjE2NCwzNS44MzZsMTMuMTUyLTc2LjY3OQ0KCQljMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OWwtNTUuNzExLTU0LjMwM2w3Ni45OTEtMTEuMTg4YzMuNDAzLTAuNDk0LDYuMzQ1LTIuNjMyLDcuODY3LTUuNzE2bDM0LjQzLTY5Ljc2NA0KCQlsMzQuNDI5LDY5Ljc2NWMxLjUyMiwzLjA4Myw0LjQ2NCw1LjIyMSw3Ljg2OCw1LjcxNmw3Ni45ODksMTEuMTg4bC00OC41NjksNDcuMzQyDQoJCUMyODEuMjgzLDI0OS43ODIsMjU0LjM2OSwyNzAuMjg2LDIzNi42MzcsMjk3LjMzMnogTTM1Mi43NzUsNDkxLjEwMmMtNjUuMDAxLDAtMTE3Ljg4My01Mi44ODItMTE3Ljg4My0xMTcuODgzDQoJCXM1Mi44ODItMTE3Ljg4MywxMTcuODgzLTExNy44ODNzMTE3Ljg4Miw1Mi44ODIsMTE3Ljg4MiwxMTcuODgzUzQxNy43NzYsNDkxLjEwMiwzNTIuNzc1LDQ5MS4xMDJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik00MzYuNzU1LDMyNi43MTljLTQuMDc5LTQuMDc5LTEwLjY5Ni00LjA4LTE0Ljc3OCwwbC04Mi42NDgsODIuNjQ4bC00MS45MDctNDEuOTA4DQoJCWMtNC4wODEtNC4wNzktMTAuNjk2LTQuMDc5LTE0Ljc3OCwwYy00LjA4LDQuMDgtNC4wOCwxMC42OTcsMCwxNC43NzhsNDkuMjk2LDQ5LjI5NmMyLjA0MSwyLjA0MSw0LjcxNSwzLjA2MSw3LjM4OCwzLjA2MQ0KCQlzNS4zNDgtMS4wMiw3LjM4OC0zLjA2MWw5MC4wMzctOTAuMDM2QzQ0MC44MzUsMzM3LjQxNSw0NDAuODM1LDMzMC43OTksNDM2Ljc1NSwzMjYuNzE5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" height="24" width="24" class="ml-2" />
            </template>
        </Rating>
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

            <h5>Templating</h5>
            <p-rating :cancel="false">
                <template #default="{key}">
                    <img v-if="key < 3" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik00MDAuMTczLDI0Mi43NzdsNTUuMjcxLTUzLjg3NmM3LjcxNC03LjUyLDEwLjQzOS0xOC41NTYsNy4xMDktMjguODAzYy0zLjMyOS0xMC4yNDYtMTIuMDE5LTE3LjU3My0yMi42ODItMTkuMTIzDQoJCQkJbC0xMTkuMTgtMTcuMzE4TDI2Ny4zOTQsMTUuNjYzQzI2Mi42MjYsNi4wMDIsMjUyLjk3MSwwLDI0Mi4xOTgsMGMtMTAuNzc1LDAtMjAuNDI5LDYuMDAyLTI1LjE5NywxNS42NjJsLTUzLjI5OCwxMDcuOTk0DQoJCQkJbC0xMTkuMTgsMTcuMzE4Yy0xMC42NjEsMS41NS0xOS4zNTMsOC44NzgtMjIuNjgyLDE5LjEyNGMtMy4zMywxMC4yNDYtMC42MDUsMjEuMjgyLDcuMTA5LDI4LjgwMmw4Ni4yMzksODQuMDYyTDk0LjgzMiwzOTEuNjYxDQoJCQkJYy0xLjgyLDEwLjYxOCwyLjQ2MiwyMS4xNDksMTEuMTc4LDI3LjQ4MWM0LjkyNiwzLjU3OCwxMC42ODgsNS4zOTYsMTYuNDg4LDUuMzk2YzQuNDY1LDAsOC45NTQtMS4wNzcsMTMuMTAxLTMuMjU4bDc4LjU2LTQxLjMwMQ0KCQkJCUMyMTcuNjk3LDQ1My4zNzYsMjc4LjUxNyw1MTIsMzUyLjc3NSw1MTJjNzYuNTIzLDAsMTM4Ljc4LTYyLjI1NywxMzguNzgtMTM4Ljc4MQ0KCQkJCUM0OTEuNTU1LDMxMy4zMzMsNDUzLjQyNywyNjIuMTg4LDQwMC4xNzMsMjQyLjc3N3ogTTIxNS4wNzQsMzU1Ljg5bC04OS4xOTgsNDYuODkzYy0zLjU3NywxLjg3OS02LjQ5NCwwLjI0Mi03LjU4Mi0wLjU0OQ0KCQkJCWMtMS4wODktMC43OTEtMy41NDctMy4wNjEtMi44NjQtNy4wNDJsMjEuMjg3LTEyNC4xMTJjMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OGwtOTAuMTczLTg3Ljg5Nw0KCQkJCWMtMi44OTMtMi44MTktMi4yMzgtNi4xLTEuODIxLTcuMzhjMC40MTUtMS4yOCwxLjgxNC00LjMyLDUuODEyLTQuOTAxbDEyNC42MTYtMTguMTA4YzMuNDA0LTAuNDk0LDYuMzQ2LTIuNjMyLDcuODY4LTUuNzE2DQoJCQkJTDIzNS43NDIsMjQuOTFjMS43ODctMy42MjIsNS4xMTEtNC4wMTIsNi40NTYtNC4wMTJjMS4zNDUsMCw0LjY2OSwwLjM5MSw2LjQ1NSw0LjAxM2w1NS43MywxMTIuOTIxDQoJCQkJYzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY3LDUuNzE2bDEyNC42MTcsMTguMTA4YzMuOTk4LDAuNTgxLDUuMzk2LDMuNjIxLDUuODEzLDQuOWMwLjQxNSwxLjI4LDEuMDcsNC41NjEtMS44MjIsNy4zOA0KCQkJCWwtNjQuMTg2LDYyLjU2NmMtNy43NjYtMS4zNTMtMTUuNzQ5LTIuMDY2LTIzLjg5Ni0yLjA2NmMtMS4zMzMsMC0yLjY2MiwwLjAyMy0zLjk4NywwLjA2MWw0Mi40NDYtNDEuMzc0DQoJCQkJYzIuODQ4LTIuNzc2LDMuODcyLTYuOTI5LDIuNjQ0LTEwLjcxMWMtMS4yMy0zLjc4My00LjQ5OS02LjUzOS04LjQzNS03LjExMmwtOTIuNTA1LTEzLjQ0MmwtNDEuMzY5LTgzLjgyNA0KCQkJCWMtMS43NjEtMy41NjYtNS4zOTMtNS44MjQtOS4zNzEtNS44MjRjLTMuOTc4LDAtNy42MDksMi4yNTgtOS4zNzEsNS44MjRsLTQxLjM3LDgzLjgyNGwtOTIuNTA2LDEzLjQ0Mw0KCQkJCWMtMy45MzYsMC41NzItNy4yMDYsMy4zMjktOC40MzQsNy4xMTJjLTEuMjI5LDMuNzg0LTAuMjA0LDcuOTM1LDIuNjQ0LDEwLjcxMWw2Ni45MzgsNjUuMjQ3bC0xNS44MDIsOTIuMTMyDQoJCQkJYy0wLjY3MywzLjkxOSwwLjkzOSw3Ljg4Miw0LjE1OCwxMC4yMmMxLjgyLDEuMzIzLDMuOTc3LDEuOTk2LDYuMTQzLDEuOTk2YzEuNjYzLDAsMy4zMzItMC4zOTYsNC44NjEtMS4ybDYxLjc0LTMyLjQ1OQ0KCQkJCUMyMTguMzA1LDMzNy42NjEsMjE2LjIzMywzNDYuNjM1LDIxNS4wNzQsMzU1Ljg5eiBNMTc4LjYyLDI0Ny4yNGwtNTUuNzExLTU0LjMwM2w3Ni45OTEtMTEuMTg4DQoJCQkJYzMuNDAzLTAuNDk0LDYuMzQ1LTIuNjMyLDcuODY3LTUuNzE2bDM0LjQzLTY5Ljc2NGwzNC40MjksNjkuNzY1YzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY4LDUuNzE2bDc2Ljk4OSwxMS4xODgNCgkJCQlsLTQ4LjU2OSw0Ny4zNDJjLTMxLjYzMyw5LjUwMi01OC41NDcsMzAuMDA2LTc2LjI3OSw1Ny4wNTNsLTY4LjE2NCwzNS44MzZsMTMuMTUyLTc2LjY3OQ0KCQkJCUMxODIuMjA2LDI1My4wOTksMTgxLjA4MiwyNDkuNjQxLDE3OC42MiwyNDcuMjR6IE0zNTIuNzc1LDQ5MS4xMDJjLTY1LjAwMSwwLTExNy44ODMtNTIuODgyLTExNy44ODMtMTE3Ljg4Mw0KCQkJCXM1Mi44ODItMTE3Ljg4MywxMTcuODgzLTExNy44ODNzMTE3Ljg4Miw1Mi44ODIsMTE3Ljg4MiwxMTcuODgzUzQxNy43NzYsNDkxLjEwMiwzNTIuNzc1LDQ5MS4xMDJ6Ii8+DQoJCQk8cGF0aCBkPSJNMzg3LjgzOSwzMTEuODczYy0xMy41NzcsMC0yNi4yMDYsNi4yMjItMzUuMDY1LDE2LjUyNGMtOC44Ni0xMC4zMDItMjEuNDg3LTE2LjUyNC0zNS4wNjYtMTYuNTI0DQoJCQkJYy0yNi4zMTQsMC00Ny43MjEsMjMuMDQzLTQ3LjcyMSw1MS4zNjdjMCwyMC45ODUsMTMuNTIzLDQyLjE2NSw0MC4xOTUsNjIuOTUxYzE4LjczNiwxNC42MDEsMzcuMjQ1LDIzLjY2MiwzOC4wMjUsMjQuMDQNCgkJCQljMS40NDIsMC43LDMuMDA0LDEuMDUxLDQuNTY3LDEuMDUxczMuMTI1LTAuMzUsNC41NjctMS4wNTFjMC43NzktMC4zNzgsMTkuMjg5LTkuNDM5LDM4LjAyNS0yNC4wNA0KCQkJCWMyNi42Ny0yMC43ODYsNDAuMTk0LTQxLjk2Niw0MC4xOTQtNjIuOTUxQzQzNS41NiwzMzQuOTE2LDQxNC4xNTIsMzExLjg3MywzODcuODM5LDMxMS44NzN6IE0zNTIuNzc1LDQyOS4wOTUNCgkJCQljLTIwLjc3Mi0xMS4wOTYtNjEuODg4LTM4LjY3Mi02MS44ODgtNjUuODU1YzAtMTYuODAxLDEyLjAzMy0zMC40NjksMjYuODI0LTMwLjQ2OWMxMS4xMzIsMCwyMS4yMzUsNy45NjksMjUuMTQsMTkuODMxDQoJCQkJYzEuNDEyLDQuMjg2LDUuNDE0LDcuMTgzLDkuOTI1LDcuMTgzYzQuNTEyLDAsOC41MTUtMi44OTYsOS45MjUtNy4xODRjMy45MDMtMTEuODYyLDE0LjAwNS0xOS44MzEsMjUuMTM5LTE5LjgzMQ0KCQkJCWMxNC43OTEsMCwyNi44MjQsMTMuNjY4LDI2LjgyNCwzMC40NjlDNDE0LjY2MiwzOTAuNDI1LDM3My41NCw0MTguMDAzLDM1Mi43NzUsNDI5LjA5NXoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" height="24" width="24" :class="{'ml-2': key > 1}"  />
                    <img v-else src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGOEM2NjA7IiBkPSJNMjQyLjE5NywzNTMuNDM0bC0xMTEuNDU5LDU4LjU5OGMtMTIuOTQ3LDYuODA2LTI4LjA4LTQuMTg4LTI1LjYwNy0xOC42MDRsMjEuMjg3LTEyNC4xMTINCglsLTkwLjE3My04Ny44OTdjLTEwLjQ3NS0xMC4yMTEtNC42OTUtMjgsOS43ODEtMzAuMTA0bDEyNC42MTYtMTguMTA4bDU1LjczLTExMi45MjFjNi40NzQtMTMuMTE4LDI1LjE3OS0xMy4xMTgsMzEuNjUyLDANCglsNTUuNzMsMTEyLjkyMWwxMjQuNjE2LDE4LjEwOGMxNC40NzYsMi4xMDMsMjAuMjU1LDE5Ljg5Myw5Ljc4MSwzMC4xMDRsLTkwLjE3Myw4Ny44OTdsMjEuMjg3LDEyNC4xMTINCgljMi40NzIsMTQuNDE4LTEyLjY2LDI1LjQxMi0yNS42MDcsMTguNjA0TDI0Mi4xOTcsMzUzLjQzNHoiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFQ0YwRjE7IiBwb2ludHM9IjE3MS4zMjcsMjU0LjcyMyAxMDAuNDU1LDE4NS42NDIgMTk4LjM5NywxNzEuNDA5IDI0Mi4xOTgsODIuNjYgMjg1Ljk5OCwxNzEuNDA5IA0KCTM4My45NCwxODUuNjQyIDMxMy4wNjgsMjU0LjcyMyAzMjkuNzk5LDM1Mi4yNjkgMjQyLjE5OCwzMDYuMjE0IDE1NC41OTYsMzUyLjI2OSAiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzNFQkQ5MTsiIGN4PSIzNTIuNzc5IiBjeT0iMzczLjIxNyIgcj0iMTI4LjMzNCIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik00MDAuMTczLDI0Mi43NzdsNTUuMjcxLTUzLjg3NmM3LjcxNC03LjUyLDEwLjQzOS0xOC41NTYsNy4xMDktMjguODAzDQoJCWMtMy4zMjktMTAuMjQ2LTEyLjAxOS0xNy41NzMtMjIuNjgyLTE5LjEyM2wtMTE5LjE4LTE3LjMxOEwyNjcuMzk0LDE1LjY2M0MyNjIuNjI2LDYuMDAyLDI1Mi45NzEsMCwyNDIuMTk4LDANCgkJYy0xMC43NzUsMC0yMC40MjksNi4wMDItMjUuMTk3LDE1LjY2MmwtNTMuMjk4LDEwNy45OTRsLTExOS4xOCwxNy4zMThjLTEwLjY2MSwxLjU1LTE5LjM1Myw4Ljg3Ny0yMi42ODIsMTkuMTI0DQoJCWMtMy4zMywxMC4yNDYtMC42MDUsMjEuMjgyLDcuMTA5LDI4LjgwMmw4Ni4yMzksODQuMDYyTDk0LjgzMiwzOTEuNjYxYy0xLjgyLDEwLjYxOCwyLjQ2MiwyMS4xNDksMTEuMTc4LDI3LjQ4MQ0KCQljNC45MjYsMy41NzgsMTAuNjg4LDUuMzk2LDE2LjQ4OCw1LjM5NmM0LjQ2NSwwLDguOTU0LTEuMDc3LDEzLjEwMS0zLjI1OGw3OC41Ni00MS4zMDFDMjE3LjY5Nyw0NTMuMzc2LDI3OC41MTcsNTEyLDM1Mi43NzUsNTEyDQoJCWM3Ni41MjMsMCwxMzguNzgtNjIuMjU3LDEzOC43OC0xMzguNzgxQzQ5MS41NTUsMzEzLjMzMiw0NTMuNDI3LDI2Mi4xODgsNDAwLjE3MywyNDIuNzc3eiBNMTI1Ljg3Niw0MDIuNzgzDQoJCWMtMy41NzcsMS44OC02LjQ5NCwwLjI0MS03LjU4Mi0wLjU0OWMtMS4wODktMC43OTEtMy41NDctMy4wNjEtMi44NjQtNy4wNDJsMjEuMjg3LTEyNC4xMTJjMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OA0KCQlsLTkwLjE3My04Ny44OTdjLTIuODkzLTIuODE5LTIuMjM4LTYuMS0xLjgyMS03LjM4YzAuNDE1LTEuMjgsMS44MTQtNC4zMiw1LjgxMi00LjkwMWwxMjQuNjE2LTE4LjEwOA0KCQljMy40MDQtMC40OTQsNi4zNDYtMi42MzIsNy44NjgtNS43MTZMMjM1Ljc0MiwyNC45MWMxLjc4Ny0zLjYyMiw1LjExMS00LjAxMiw2LjQ1Ni00LjAxMmMxLjM0NSwwLDQuNjY5LDAuMzkxLDYuNDU1LDQuMDEzDQoJCWw1NS43MywxMTIuOTIxYzEuNTIyLDMuMDgzLDQuNDY0LDUuMjIxLDcuODY3LDUuNzE2bDEyNC42MTcsMTguMTA4YzMuOTk4LDAuNTgxLDUuMzk2LDMuNjIxLDUuODEzLDQuOQ0KCQljMC40MTUsMS4yOCwxLjA3LDQuNTYxLTEuODIyLDcuMzhsLTY0LjE4Niw2Mi41NjZjLTcuNzY2LTEuMzUzLTE1Ljc0OS0yLjA2Ni0yMy44OTYtMi4wNjZjLTEuMzMzLDAtMi42NjIsMC4wMjMtMy45ODcsMC4wNjENCgkJbDQyLjQ0Ni00MS4zNzRjMi44NDgtMi43NzYsMy44NzItNi45MjksMi42NDQtMTAuNzExYy0xLjIzLTMuNzgzLTQuNDk5LTYuNTM5LTguNDM1LTcuMTEybC05Mi41MDUtMTMuNDQybC00MS4zNjktODMuODI0DQoJCWMtMS43NjEtMy41NjYtNS4zOTMtNS44MjQtOS4zNzEtNS44MjRzLTcuNjA5LDIuMjU4LTkuMzcxLDUuODI0bC00MS4zNyw4My44MjRsLTkyLjUwNiwxMy40NDMNCgkJYy0zLjkzNiwwLjU3Mi03LjIwNiwzLjMyOS04LjQzNCw3LjExMmMtMS4yMjksMy43ODQtMC4yMDQsNy45MzUsMi42NDQsMTAuNzExbDY2LjkzOCw2NS4yNDdsLTE1LjgwMiw5Mi4xMzINCgkJYy0wLjY3MywzLjkxOSwwLjkzOSw3Ljg4Miw0LjE1OCwxMC4yMmMxLjgyLDEuMzIzLDMuOTc3LDEuOTk2LDYuMTQzLDEuOTk2YzEuNjYzLDAsMy4zMzItMC4zOTYsNC44NjEtMS4ybDYxLjc0LTMyLjQ1OQ0KCQljLTIuODk0LDguNjAxLTQuOTY2LDE3LjU3NS02LjEyNCwyNi44M0wxMjUuODc2LDQwMi43ODN6IE0yMzYuNjM3LDI5Ny4zMzJsLTY4LjE2NCwzNS44MzZsMTMuMTUyLTc2LjY3OQ0KCQljMC41ODEtMy4zOS0wLjU0My02Ljg0OC0zLjAwNS05LjI0OWwtNTUuNzExLTU0LjMwM2w3Ni45OTEtMTEuMTg4YzMuNDAzLTAuNDk0LDYuMzQ1LTIuNjMyLDcuODY3LTUuNzE2bDM0LjQzLTY5Ljc2NA0KCQlsMzQuNDI5LDY5Ljc2NWMxLjUyMiwzLjA4Myw0LjQ2NCw1LjIyMSw3Ljg2OCw1LjcxNmw3Ni45ODksMTEuMTg4bC00OC41NjksNDcuMzQyDQoJCUMyODEuMjgzLDI0OS43ODIsMjU0LjM2OSwyNzAuMjg2LDIzNi42MzcsMjk3LjMzMnogTTM1Mi43NzUsNDkxLjEwMmMtNjUuMDAxLDAtMTE3Ljg4My01Mi44ODItMTE3Ljg4My0xMTcuODgzDQoJCXM1Mi44ODItMTE3Ljg4MywxMTcuODgzLTExNy44ODNzMTE3Ljg4Miw1Mi44ODIsMTE3Ljg4MiwxMTcuODgzUzQxNy43NzYsNDkxLjEwMiwzNTIuNzc1LDQ5MS4xMDJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik00MzYuNzU1LDMyNi43MTljLTQuMDc5LTQuMDc5LTEwLjY5Ni00LjA4LTE0Ljc3OCwwbC04Mi42NDgsODIuNjQ4bC00MS45MDctNDEuOTA4DQoJCWMtNC4wODEtNC4wNzktMTAuNjk2LTQuMDc5LTE0Ljc3OCwwYy00LjA4LDQuMDgtNC4wOCwxMC42OTcsMCwxNC43NzhsNDkuMjk2LDQ5LjI5NmMyLjA0MSwyLjA0MSw0LjcxNSwzLjA2MSw3LjM4OCwzLjA2MQ0KCQlzNS4zNDgtMS4wMiw3LjM4OC0zLjA2MWw5MC4wMzctOTAuMDM2QzQ0MC44MzUsMzM3LjQxNSw0NDAuODM1LDMzMC43OTksNDM2Ljc1NSwzMjYuNzE5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" height="24" width="24" class="ml-2" />
                </template>
            </p-rating>
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
