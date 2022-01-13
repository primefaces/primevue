<template>
	<AppDoc name="ButtonDemo" :sources="sources" github="button/ButtonDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Button from 'primevue/button';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Button is created using the Button element.</p>
<pre v-code><code>
&lt;Button /&gt;

</code></pre>

		<h5>Label</h5>
		<p>Text of the button is defined using the <i>label</i> property.</p>
<pre v-code><code>
&lt;Button label="Submit" /&gt;

</code></pre>
		<h5>Icons</h5>
		<p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
			icon position is "left" and alternative is "right". To display only an icon, leave the label as undefined.</p>
<pre v-code><code>
&lt;Button label="Submit" icon="pi pi-check" iconPos="right" /&gt;

</code></pre>

		<h5>Events</h5>
		<p>Events are defined with the standard notation.</p>
<pre v-code><code>
&lt;Button label="Submit" @click="handleClick($event)"/&gt;

</code></pre>

		<h5>Severity</h5>
		<p>Different options are available as severity levels.</p>

		<ul>
			<li>.p-button-secondary</li>
			<li>.p-button-success</li>
			<li>.p-button-info</li>
			<li>.p-button-warning</li>
            <li>.p-button-help</li>
			<li>.p-button-danger</li>
		</ul>

<pre v-code><code>
&lt;Button label="Primary" /&gt;
&lt;Button label="Secondary" class="p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-success" /&gt;
&lt;Button label="Info" class="p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-warning" /&gt;
&lt;Button label="Warning" class="p-button-help" /&gt;
&lt;Button label="Danger" class="p-button-danger" /&gt;

</code></pre>

        <h5>Text Buttons</h5>
		<p>Text buttons have transparent background and borders, use <i>p-button-text</i> to apply text button styling. In addition when used with <i>.p-button-plain</i>
        text buttons ignore severity levels and displayed as a regular text.</p>
<pre v-code><code>
&lt;Button label="Submit" class="p-button-text" /&gt;
&lt;Button icon="pi pi-check" class="p-button-text" /&gt;
&lt;Button label="Cancel" icon="pi pi-times" class="p-button-text" /&gt;
&lt;Button label="Search" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" /&gt;

</code></pre>

		<h5>Raised and Rounded Buttons</h5>
		<p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<pre v-code><code>
&lt;Button label="Primary" class="p-button-raised p-button-rounded" /&gt;

</code></pre>

        <h5>Outlined Buttons</h5>
        <p>An alternate styling for a button is the outlined option where background becomes transparent. Apply "p-button-outlined" to style a button as outlined.</p>
<pre v-code><code>
&lt;Button label="Primary" class="p-button-outlined" /&gt;

</code></pre>

        <h5>Link Buttons</h5>
        <p>Use "p-button-link" class to render the button as a link.</p>
<pre v-code><code>
&lt;Button label="Link" class="p-button-link" /&gt;

</code></pre>

        <h5>Badges</h5>
        <p>Badge is a small status indicator for a button. Refer to the <router-link to="/badge">badge</router-link> documentation for available styling options.</p>

<pre v-code><code>
&lt;Button type="button" label="Emails" badge="8" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-info" /&gt;

</code></pre>

        <h5>ButtonSet</h5>
        <p>Wrapping the buttons in a container having a <i>.p-buttonset</i> class, groups the buttons side to side.</p>
<pre v-code><code>
&lt;span class="p-buttonset"&gt;
    &lt;Button label="Save" icon="pi pi-check" /&gt;
    &lt;Button label="Delete" icon="pi pi-trash" /&gt;
    &lt;Button label="Cancel" icon="pi pi-times" /&gt;
&lt;/span&gt;

</code></pre>

        <h5>Sizes</h5>
        <p>2 more sizes are available in addition to a regular button, for a smaller input add <i>p-button-sm</i> and for a larger one, use <i>p-button-lg</i>.
        Note that these classes available to change the size of a particular button, for global scaling see the <router-link to="/theming">theming</router-link> page.</p>
<pre v-code><code>
&lt;Button label="Small" icon="pi pi-check" class="p-button-sm"  /&gt;
&lt;Button label="Normal" icon="pi pi-check" class="p-button"  /&gt;
&lt;Button label="Large" icon="pi pi-check" class="p-button-lg" /&gt;

</code></pre>

        <h5>Loading State</h5>
        <p>Button displays a <i>loadingIcon</i> when <i>loading</i> property is enabled.</p>
<pre v-code><code>
&lt;Button label="Save" icon="pi pi-check" :loading="isLoading" /&gt;

</code></pre>

        <h5>Templating</h5>
        <p>Custom content such as icons, images and text can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included.</p>
<pre v-code><code>
&lt;Button type="button" class="px-3"&gt;
    &lt;img alt="logo" src="../../assets/images/logo.svg" style="width: 1.5rem"/&gt;
&lt;/Button&gt;

&lt;Button type="button" class="p-button-outlined p-button-success"&gt;
    &lt;img alt="logo" src="../../assets/images/logo.svg" style="width: 1.5rem" /&gt;
    &lt;span class="ml-2 font-bold"&gt;PrimeVue&lt;/span&gt;
&lt;/Button&gt;

</code></pre>

		<h5>Properties</h5>
        <p>Any property such as style and class are passed to the underlying button element. Following are the additional properties to configure the component.</p>
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
                        <td>label</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text of the button.</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Name of the icon.</td>
                    </tr>
                    <tr>
                        <td>iconPos</td>
                        <td>string</td>
                        <td>left</td>
                        <td>Position of the icon, valid values are "left", "right", "bottom" and "top".</td>
                    </tr>
                    <tr>
                        <td>badge</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Value of the badge.</td>
                    </tr>
                    <tr>
                        <td>badgeClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the badge.</td>
                    </tr>
                    <tr>
                        <td>loading</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the button is in loading state.</td>
                    </tr>
                    <tr>
                        <td>loadingIcon</td>
                        <td>string</td>
                        <td>pi pi-spinner pi-spin</td>
                        <td>Icon to display in loading state.</td>
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
                        <td>p-button</td>
                        <td>Button element</td>
                    </tr>
                    <tr>
                        <td>p-button-icon</td>
                        <td>Icon element</td>
                    </tr>
                    <tr>
                        <td>p-button-label</td>
                        <td>Label element of the button</td>
                    </tr>
                    <tr>
                        <td>p-button-sm</td>
                        <td>Smaller button element</td>
                    </tr>
                    <tr>
                        <td>p-button-lg</td>
                        <td>Larger button element</td>
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
        <h5>Basic</h5>
        <Button label="Submit" />
        <Button label="Disabled" disabled="disabled" />
        <Button label="Link" class="p-button-link" />

        <h5>Icons</h5>
        <Button icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />

        <h5>Severities</h5>
        <Button label="Primary" />
        <Button label="Secondary" class="p-button-secondary" />
        <Button label="Success" class="p-button-success" />
        <Button label="Info" class="p-button-info" />
        <Button label="Warning" class="p-button-warning" />
        <Button label="Help" class="p-button-help" />
        <Button label="Danger" class="p-button-danger" />

        <h5>Raised Buttons</h5>
        <Button label="Primary" class="p-button-raised" />
        <Button label="Secondary" class="p-button-raised p-button-secondary" />
        <Button label="Success" class="p-button-raised p-button-success" />
        <Button label="Info" class="p-button-raised p-button-info" />
        <Button label="Warning" class="p-button-raised p-button-warning" />
        <Button label="Help" class="p-button-raised p-button-help" />
        <Button label="Danger" class="p-button-raised p-button-danger" />

        <h5>Rounded Buttons</h5>
        <Button label="Primary" class="p-button-rounded" />
        <Button label="Secondary" class="p-button-rounded p-button-secondary" />
        <Button label="Success" class="p-button-rounded p-button-success" />
        <Button label="Info" class="p-button-rounded p-button-info" />
        <Button label="Warning" class="p-button-rounded p-button-warning" />
        <Button label="Help" class="p-button-rounded p-button-help" />
        <Button label="Danger" class="p-button-rounded p-button-danger" />

        <h5>Text Buttons</h5>
        <Button label="Primary" class="p-button-text" />
        <Button label="Secondary" class="p-button-secondary p-button-text" />
        <Button label="Success" class="p-button-success p-button-text" />
        <Button label="Info" class="p-button-info p-button-text" />
        <Button label="Warning" class="p-button-warning p-button-text" />
        <Button label="Help" class="p-button-help p-button-text" />
        <Button label="Danger" class="p-button-danger p-button-text" />
        <Button label="Plain" class="p-button-text p-button-plain" />

        <h5>Raised Text Buttons</h5>
        <Button label="Primary" class="p-button-raised p-button-text" />
        <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" />
        <Button label="Success" class="p-button-raised p-button-success p-button-text" />
        <Button label="Info" class="p-button-raised p-button-info p-button-text" />
        <Button label="Warning" class="p-button-raised p-button-warning p-button-text" />
        <Button label="Help" class="p-button-raised p-button-help p-button-text" />
        <Button label="Danger" class="p-button-raised p-button-danger p-button-text" />
        <Button label="Plain" class="p-button-raised p-button-text p-button-plain" />

        <h5>Outlined Buttons</h5>
        <Button label="Primary" class="p-button-outlined" />
        <Button label="Secondary" class="p-button-outlined p-button-secondary" />
        <Button label="Success" class="p-button-outlined p-button-success" />
        <Button label="Info" class="p-button-outlined p-button-info" />
        <Button label="Warning" class="p-button-outlined p-button-warning" />
        <Button label="Help" class="p-button-outlined p-button-help" />
        <Button label="Danger" class="p-button-outlined p-button-danger" />

        <h5>Rounded Icon Buttons</h5>
        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" />
        <Button icon="pi pi-search" class="p-button-rounded p-button-success" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning" />
        <Button icon="pi pi-heart" class="p-button-rounded p-button-help" />
        <Button icon="pi pi-times" class="p-button-rounded p-button-danger" />
        <Button icon="pi pi-check" class="p-button-rounded" />

        <h5>Rounded Text Icon Buttons</h5>
        <Button icon="pi pi-check" class="p-button-rounded p-button-text" />
        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" />
        <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" />
        <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" />
        <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" />
        <Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" />

        <h5>Rounded and Outlined Icon Buttons</h5>
        <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" />
        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" />
        <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" />
        <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" />
        <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" />

        <h5>Badges</h5>
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

        <h5>Loading</h5>
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
        <Button type="button" label="Search" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1)"  />
        <Button type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
        <Button type="button" label="Search" :loading="loading[3]" @click="load(3)" />

        <h5>Templating</h5>
        <Button type="button" class="px-3">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem"/>
        </Button>
        <Button type="button" class="p-button-outlined p-button-success">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem" />
            <span class="ml-2 font-bold">PrimeVue</span>
        </Button>

        <h5>Button Set</h5>
        <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </span>

        <h5>Sizes</h5>
        <div class="sizes">
            <Button label="Small" icon="pi pi-check" class="p-button-sm"  />
            <Button label="Normal" icon="pi pi-check" class="p-button"  />
            <Button label="Large" icon="pi pi-check" class="p-button-lg" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: [false, false, false]
        }
    },
    methods: {
        load(index) {
            this.loading[index] = true;
            setTimeout(() => this.loading[index] = false, 1000);
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-button {
    margin-right: .5rem;
}

.p-buttonset {
    .p-button {
        margin-right: 0;
    }
}

.sizes {
    .button {
        margin-bottom: .5rem;
        display: block;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

@media screen and (max-width: 640px) {
    .p-button {
        margin-bottom: .5rem;

        &:not(.p-button-icon-only) {
            display: flex;
            width: 100%;
        }
    }

    .p-buttonset {
        .p-button {
            margin-bottom: 0;
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
        <h5>Basic</h5>
        <Button label="Submit" />
        <Button label="Disabled" disabled="disabled" />
        <Button label="Link" class="p-button-link" />

        <h5>Icons</h5>
        <Button icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />

        <h5>Severities</h5>
        <Button label="Primary" />
        <Button label="Secondary" class="p-button-secondary" />
        <Button label="Success" class="p-button-success" />
        <Button label="Info" class="p-button-info" />
        <Button label="Warning" class="p-button-warning" />
        <Button label="Help" class="p-button-help" />
        <Button label="Danger" class="p-button-danger" />

        <h5>Raised Buttons</h5>
        <Button label="Primary" class="p-button-raised" />
        <Button label="Secondary" class="p-button-raised p-button-secondary" />
        <Button label="Success" class="p-button-raised p-button-success" />
        <Button label="Info" class="p-button-raised p-button-info" />
        <Button label="Warning" class="p-button-raised p-button-warning" />
        <Button label="Help" class="p-button-raised p-button-help" />
        <Button label="Danger" class="p-button-raised p-button-danger" />

        <h5>Rounded Buttons</h5>
        <Button label="Primary" class="p-button-rounded" />
        <Button label="Secondary" class="p-button-rounded p-button-secondary" />
        <Button label="Success" class="p-button-rounded p-button-success" />
        <Button label="Info" class="p-button-rounded p-button-info" />
        <Button label="Warning" class="p-button-rounded p-button-warning" />
        <Button label="Help" class="p-button-rounded p-button-help" />
        <Button label="Danger" class="p-button-rounded p-button-danger" />

        <h5>Text Buttons</h5>
        <Button label="Primary" class="p-button-text" />
        <Button label="Secondary" class="p-button-secondary p-button-text" />
        <Button label="Success" class="p-button-success p-button-text" />
        <Button label="Info" class="p-button-info p-button-text" />
        <Button label="Warning" class="p-button-warning p-button-text" />
        <Button label="Help" class="p-button-help p-button-text" />
        <Button label="Danger" class="p-button-danger p-button-text" />
        <Button label="Plain" class="p-button-text p-button-plain" />

        <h5>Raised Text Buttons</h5>
        <Button label="Primary" class="p-button-raised p-button-text" />
        <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" />
        <Button label="Success" class="p-button-raised p-button-success p-button-text" />
        <Button label="Info" class="p-button-raised p-button-info p-button-text" />
        <Button label="Warning" class="p-button-raised p-button-warning p-button-text" />
        <Button label="Help" class="p-button-raised p-button-help p-button-text" />
        <Button label="Danger" class="p-button-raised p-button-danger p-button-text" />
        <Button label="Plain" class="p-button-raised p-button-text p-button-plain" />

        <h5>Outlined Buttons</h5>
        <Button label="Primary" class="p-button-outlined" />
        <Button label="Secondary" class="p-button-outlined p-button-secondary" />
        <Button label="Success" class="p-button-outlined p-button-success" />
        <Button label="Info" class="p-button-outlined p-button-info" />
        <Button label="Warning" class="p-button-outlined p-button-warning" />
        <Button label="Help" class="p-button-outlined p-button-help" />
        <Button label="Danger" class="p-button-outlined p-button-danger" />

        <h5>Rounded Icon Buttons</h5>
        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" />
        <Button icon="pi pi-search" class="p-button-rounded p-button-success" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning" />
        <Button icon="pi pi-heart" class="p-button-rounded p-button-help" />
        <Button icon="pi pi-times" class="p-button-rounded p-button-danger" />
        <Button icon="pi pi-check" class="p-button-rounded" />

        <h5>Rounded Text Icon Buttons</h5>
        <Button icon="pi pi-check" class="p-button-rounded p-button-text" />
        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" />
        <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" />
        <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" />
        <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" />
        <Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" />

        <h5>Rounded and Outlined Icon Buttons</h5>
        <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" />
        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" />
        <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" />
        <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" />
        <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" />

        <h5>Badges</h5>
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

        <h5>Loading</h5>
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
        <Button type="button" label="Search" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1)"  />
        <Button type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
        <Button type="button" label="Search" :loading="loading[3]" @click="load(3)" />

        <h5>Templating</h5>
        <Button type="button" class="px-3">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem"/>
        </Button>
        <Button type="button" class="p-button-outlined p-button-success">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem" />
            <span class="ml-2 font-bold">PrimeVue</span>
        </Button>

        <h5>Button Set</h5>
        <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </span>

        <h5>Sizes</h5>
        <div class="sizes">
            <Button label="Small" icon="pi pi-check" class="p-button-sm"  />
            <Button label="Normal" icon="pi pi-check" class="p-button"  />
            <Button label="Large" icon="pi pi-check" class="p-button-lg" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default({
    setup() {
        const loading = ref([false, false, false]);
        const load = (index) => {
            loading.value[index] = true;
            setTimeout(() => loading.value[index] = false, 1000);
        }

        return {loading, load};
    }
});
<\\/script>

<style lang="scss" scoped>
.p-button {
    margin-right: .5rem;
}

.p-buttonset {
    .p-button {
        margin-right: 0;
    }
}

.sizes {
    .button {
        margin-bottom: .5rem;
        display: block;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

@media screen and (max-width: 640px) {
    .p-button {
        margin-bottom: .5rem;

        &:not(.p-button-icon-only) {
            display: flex;
            width: 100%;
        }
    }

    .p-buttonset {
        .p-button {
            margin-bottom: 0;
        }
    }
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    content: `<div id="app">
        <div class="card">
            <h5>Basic</h5>
            <p-button label="Submit"></p-button>
            <p-button label="Disabled" disabled="disabled"></p-button>
            <p-button label="Link" class="p-button-link"></p-button>

            <h5>Icons</h5>
            <p-button icon="pi pi-check"></p-button>
            <p-button label="Submit" icon="pi pi-check"></p-button>
            <p-button label="Submit" icon="pi pi-check" iconPos="right"></p-button>

            <h5>Severities</h5>
            <p-button label="Primary"></p-button>
            <p-button label="Secondary" class="p-button-secondary"></p-button>
            <p-button label="Success" class="p-button-success"></p-button>
            <p-button label="Info" class="p-button-info"></p-button>
            <p-button label="Warning" class="p-button-warning"></p-button>
            <p-button label="Help" class="p-button-help"></p-button>
            <p-button label="Danger" class="p-button-danger"></p-button>

            <h5>Raised Buttons</h5>
            <p-button label="Primary" class="p-button-raised"></p-button>
            <p-button label="Secondary" class="p-button-raised p-button-secondary"></p-button>
            <p-button label="Success" class="p-button-raised p-button-success"></p-button>
            <p-button label="Info" class="p-button-raised p-button-info"></p-button>
            <p-button label="Warning" class="p-button-raised p-button-warning"></p-button>
            <p-button label="Help" class="p-button-raised p-button-help"></p-button>
            <p-button label="Danger" class="p-button-raised p-button-danger"></p-button>

            <h5>Rounded Buttons</h5>
            <p-button label="Primary" class="p-button-rounded"></p-button>
            <p-button label="Secondary" class="p-button-rounded p-button-secondary"></p-button>
            <p-button label="Success" class="p-button-rounded p-button-success"></p-button>
            <p-button label="Info" class="p-button-rounded p-button-info"></p-button>
            <p-button label="Warning" class="p-button-rounded p-button-warning"></p-button>
            <p-button label="Help" class="p-button-rounded p-button-help"></p-button>
            <p-button label="Danger" class="p-button-rounded p-button-danger"></p-button>

            <h5>Text Buttons</h5>
            <p-button label="Primary" class="p-button-text"></p-button>
            <p-button label="Secondary" class="p-button-secondary p-button-text"></p-button>
            <p-button label="Success" class="p-button-success p-button-text"></p-button>
            <p-button label="Info" class="p-button-info p-button-text"></p-button>
            <p-button label="Warning" class="p-button-warning p-button-text"></p-button>
            <p-button label="Help" class="p-button-help p-button-text"></p-button>
            <p-button label="Danger" class="p-button-danger p-button-text"></p-button>
            <p-button label="Plain" class="p-button-text p-button-plain"></p-button>

            <h5>Raised Text Buttons</h5>
            <p-button label="Primary" class="p-button-raised p-button-text"></p-button>
            <p-button label="Secondary" class="p-button-raised p-button-secondary p-button-text"></p-button>
            <p-button label="Success" class="p-button-raised p-button-success p-button-text"></p-button>
            <p-button label="Info" class="p-button-raised p-button-info p-button-text"></p-button>
            <p-button label="Warning" class="p-button-raised p-button-warning p-button-text"></p-button>
            <p-button label="Help" class="p-button-raised p-button-help p-button-text"></p-button>
            <p-button label="Danger" class="p-button-raised p-button-danger p-button-text"></p-button>
            <p-button label="Plain" class="p-button-raised p-button-text p-button-plain"></p-button>

            <h5>Outlined Buttons</h5>
            <p-button label="Primary" class="p-button-outlined"></p-button>
            <p-button label="Secondary" class="p-button-outlined p-button-secondary"></p-button>
            <p-button label="Success" class="p-button-outlined p-button-success"></p-button>
            <p-button label="Info" class="p-button-outlined p-button-info"></p-button>
            <p-button label="Warning" class="p-button-outlined p-button-warning"></p-button>
            <p-button label="Help" class="p-button-outlined p-button-help"></p-button>
            <p-button label="Danger" class="p-button-outlined p-button-danger"></p-button>

            <h5>Rounded Icon Buttons</h5>
            <p-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary"></p-button>
            <p-button icon="pi pi-search" class="p-button-rounded p-button-success"></p-button>
            <p-button icon="pi pi-user" class="p-button-rounded p-button-info"></p-button>
            <p-button icon="pi pi-bell" class="p-button-rounded p-button-warning"></p-button>
            <p-button icon="pi pi-heart" class="p-button-rounded p-button-help"></p-button>
            <p-button icon="pi pi-times" class="p-button-rounded p-button-danger"></p-button>
            <p-button icon="pi pi-check" class="p-button-rounded"></p-button>

            <h5>Rounded Text Icon Buttons</h5>
            <p-button icon="pi pi-check" class="p-button-rounded p-button-text"></p-button>
            <p-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text"></p-button>
            <p-button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text"></p-button>
            <p-button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text"></p-button>
            <p-button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text"></p-button>
            <p-button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text"></p-button>
            <p-button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text"></p-button>
            <p-button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain"></p-button>

            <h5>Rounded and Outlined Icon Buttons</h5>
            <p-button icon="pi pi-check" class="p-button-rounded p-button-outlined"></p-button>
            <p-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined"></p-button>
            <p-button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined"></p-button>
            <p-button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined"></p-button>
            <p-button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined"></p-button>
            <p-button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined"></p-button>
            <p-button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined"></p-button>

            <h5>Badges</h5>
            <p-button type="button" label="Emails" badge="8"></p-button>
            <p-button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>

            <h5>Loading</h5>
            <p-button type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)"></p-button>
            <p-button type="button" label="Search" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1)"></p-button>
            <p-button type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)"></p-button>
            <p-button type="button" label="Search" :loading="loading[3]" @click="load(3)"></p-button>

            <h5>Templating</h5>
            <p-button type="button" class="px-3">
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem" />
            </p-button>
            <p-button type="button" class="p-button-outlined p-button-success">
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem" />
                <span class="ml-2 font-bold">PrimeVue</span>
            </p-button>

            <h5>Button Set</h5>
            <span class="p-buttonset">
                <p-button label="Save" icon="pi pi-check"></p-button>
                <p-button label="Delete" icon="pi pi-trash"></p-button>
                <p-button label="Cancel" icon="pi pi-times"></p-button>
            </span>

            <h5>Sizes</h5>
            <div class="sizes">
                <p-button label="Small" icon="pi pi-check" class="p-button-sm"></p-button>
                <p-button label="Normal" icon="pi pi-check" class="p-button"></p-button>
                <p-button label="Large" icon="pi pi-check" class="p-button-lg"></p-button>
            </div>
        </div>
    </div>

    <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const loading = ref([false, false, false]);
                const load = (index) => {
                    loading.value[index] = true;
                    setTimeout(() => loading.value[index] = false, 1000);
                }
        
                return {loading, load};
            },
            components: {
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default, { ripple: true })
            .mount("#app");
    <\\/script>

    <style>
    .p-button {
        margin-right: .5rem;
    }

    .p-buttonset .p-button {
        margin-right: 0;
    }

    .sizes .button {
        margin-bottom: .5rem;
        display: block;
    }

    .sizes .button:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 640px) {
        .p-button {
            margin-bottom: .5rem;
        }

        .p-button:not(.p-button-icon-only) {
            display: flex;
            width: 100%;
        }

        .p-buttonset .p-button {
            margin-bottom: 0;
        }
    }
    </style>
    
`
                }
            }
        }
    }
}
</script>