<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Button from 'primevue/button';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Button is created using the Button element.</p>
<CodeHighlight>
&lt;Button /&gt;
</CodeHighlight>

				<h5>Label</h5>
				<p>Text of the button is defined using the <i>label</i> property.</p>
<CodeHighlight>
&lt;Button label="Submit" /&gt;
</CodeHighlight>
				<h5>Icons</h5>
				<p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
					icon position is "left" and alternative is "right". To display only an icon, leave the label as undefined.</p>
<CodeHighlight>
&lt;Button label="Submit" icon="pi pi-check" iconPos="right" /&gt;
</CodeHighlight>

				<h5>Events</h5>
				<p>Events are defined with the standard notation.</p>
<CodeHighlight>
&lt;Button label="Submit" @click="handleClick($event)"/&gt;
</CodeHighlight>

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

<CodeHighlight>
&lt;Button label="Primary" /&gt;
&lt;Button label="Secondary" class="p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-success" /&gt;
&lt;Button label="Info" class="p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-warning" /&gt;
&lt;Button label="Warning" class="p-button-help" /&gt;
&lt;Button label="Danger" class="p-button-danger" /&gt;
</CodeHighlight>

                <h5>Text Buttons</h5>
				<p>Text buttons have transparent background and borders, use <i>p-button-text</i> to apply text button styling. In addition when used with <i>.p-button-plain</i>
                text buttons ignore severity levels and displayed as a regular text.</p>
<CodeHighlight>
&lt;Button label="Submit" class="p-button-text" /&gt;
&lt;Button icon="pi pi-check" class="p-button-text" /&gt;
&lt;Button label="Cancel" icon="pi pi-times" class="p-button-text" /&gt;
&lt;Button label="Search" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" /&gt;
</CodeHighlight>

				<h5>Raised and Rounded Buttons</h5>
				<p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<CodeHighlight>
&lt;Button label="Primary" class="p-button-raised p-button-rounded" /&gt;
</CodeHighlight>

                <h5>Outlined Buttons</h5>
                <p>An alternate styling for a button is the outlined option where background becomes transparent. Apply "p-button-outlined" to style a button as outlined.</p>
<CodeHighlight>
&lt;Button label="Primary" class="p-button-outlined" /&gt;
</CodeHighlight>

                <h5>Link Buttons</h5>
                <p>Use "p-button-link" class to render the button as a link.</p>
<CodeHighlight>
&lt;Button label="Link" class="p-button-link" /&gt;
</CodeHighlight>

                <h5>Badges</h5>
                <p>Badge is a small status indicator for a button. Refer to the <router-link to="/badge">badge</router-link> documentation for available styling options.</p>

<CodeHighlight>
&lt;Button type="button" label="Emails" badge="8" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-info" /&gt;
</CodeHighlight>

                <h5>ButtonSet</h5>
                <p>Wrapping the buttons in a container having a <i>.p-buttonset</i> class, groups the buttons side to side.</p>
<CodeHighlight>
&lt;span class="p-buttonset"&gt;
    &lt;Button label="Save" icon="pi pi-check" /&gt;
    &lt;Button label="Delete" icon="pi pi-trash" /&gt;
    &lt;Button label="Cancel" icon="pi pi-times" /&gt;
&lt;/span&gt;
</CodeHighlight>

                <h5>Sizes</h5>
                <p>2 more sizes are available in addition to a regular button, for a smaller input add <i>p-button-sm</i> and for a larger one, use <i>p-button-lg</i>.
                Note that these classes available to change the size of a particular button, for global scaling see the <router-link to="/theming">theming</router-link> page.</p>
<CodeHighlight>
&lt;Button label="Small" icon="pi pi-check" class="p-button-sm"  /&gt;
&lt;Button label="Normal" icon="pi pi-check" class="p-button"  /&gt;
&lt;Button label="Large" icon="pi pi-check" class="p-button-lg" /&gt;
</CodeHighlight>

                <h5>Slot</h5>
                <p>Custom content can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included.</p>
<CodeHighlight>
&lt;Button&gt;
    Custom Content
&lt;/Button&gt;
</CodeHighlight>

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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/button" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;Button label="Submit" /&gt;
&lt;Button label="Disabled" disabled="disabled" /&gt;
&lt;Button label="Link" class="p-button-link" /&gt;

&lt;h5&gt;Icons&lt;/h5&gt;
&lt;Button icon="pi pi-check" /&gt;
&lt;Button label="Submit" icon="pi pi-check" /&gt;
&lt;Button label="Submit" icon="pi pi-check" iconPos="right" /&gt;

&lt;h5&gt;Severities&lt;/h5&gt;
&lt;Button label="Primary" /&gt;
&lt;Button label="Secondary" class="p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-success" /&gt;
&lt;Button label="Info" class="p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-warning" /&gt;
&lt;Button label="Help" class="p-button-help" /&gt;
&lt;Button label="Danger" class="p-button-danger" /&gt;

&lt;h5&gt;Raised Buttons&lt;/h5&gt;
&lt;Button label="Primary" class="p-button-raised" /&gt;
&lt;Button label="Secondary" class="p-button-raised p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-raised p-button-success" /&gt;
&lt;Button label="Info" class="p-button-raised p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-raised p-button-warning" /&gt;
&lt;Button label="Help" class="p-button-raised p-button-help" /&gt;
&lt;Button label="Danger" class="p-button-raised p-button-danger" /&gt;

&lt;h5&gt;Rounded Buttons&lt;/h5&gt;
&lt;Button label="Primary" class="p-button-rounded" /&gt;
&lt;Button label="Secondary" class="p-button-rounded p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-rounded p-button-success" /&gt;
&lt;Button label="Info" class="p-button-rounded p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-rounded p-button-warning" /&gt;
&lt;Button label="Help" class="p-button-rounded p-button-help" /&gt;
&lt;Button label="Danger" class="p-button-rounded p-button-danger" /&gt;

&lt;h5&gt;Text Buttons&lt;/h5&gt;
&lt;Button label="Primary" class="p-button-text" /&gt;
&lt;Button label="Secondary" class="p-button-secondary p-button-text" /&gt;
&lt;Button label="Success" class="p-button-success p-button-text" /&gt;
&lt;Button label="Info" class="p-button-info p-button-text" /&gt;
&lt;Button label="Warning" class="p-button-warning p-button-text" /&gt;
&lt;Button label="Help" class="p-button-help p-button-text" /&gt;
&lt;Button label="Danger" class="p-button-danger p-button-text" /&gt;
&lt;Button label="Plain" class="p-button-text p-button-plain" /&gt;

&lt;h5&gt;Raised Text Buttons&lt;/h5&gt;
&lt;Button label="Primary" class="p-button-raised p-button-text" /&gt;
&lt;Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" /&gt;
&lt;Button label="Success" class="p-button-raised p-button-success p-button-text" /&gt;
&lt;Button label="Info" class="p-button-raised p-button-info p-button-text" /&gt;
&lt;Button label="Warning" class="p-button-raised p-button-warning p-button-text" /&gt;
&lt;Button label="Help" class="p-button-raised p-button-help p-button-text" /&gt;
&lt;Button label="Danger" class="p-button-raised p-button-danger p-button-text" /&gt;
&lt;Button label="Plain" class="p-button-raised p-button-text p-button-plain" /&gt;

&lt;h5&gt;Outlined Buttons&lt;/h5&gt;
&lt;Button label="Primary" class="p-button-outlined" /&gt;
&lt;Button label="Secondary" class="p-button-outlined p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-outlined p-button-success" /&gt;
&lt;Button label="Info" class="p-button-outlined p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-outlined p-button-warning" /&gt;
&lt;Button label="Help" class="p-button-outlined p-button-help" /&gt;
&lt;Button label="Danger" class="p-button-outlined p-button-danger" /&gt;

&lt;h5&gt;Rounded Icon Buttons&lt;/h5&gt;
&lt;Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" /&gt;
&lt;Button icon="pi pi-search" class="p-button-rounded p-button-success" /&gt;
&lt;Button icon="pi pi-user" class="p-button-rounded p-button-info" /&gt;
&lt;Button icon="pi pi-bell" class="p-button-rounded p-button-warning" /&gt;
&lt;Button icon="pi pi-heart" class="p-button-rounded p-button-help" /&gt;
&lt;Button icon="pi pi-times" class="p-button-rounded p-button-danger" /&gt;
&lt;Button icon="pi pi-check" class="p-button-rounded" /&gt;

&lt;h5&gt;Rounded Text Icon Buttons&lt;/h5&gt;
&lt;Button icon="pi pi-check" class="p-button-rounded p-button-text" /&gt;
&lt;Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" /&gt;
&lt;Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" /&gt;
&lt;Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" /&gt;
&lt;Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" /&gt;
&lt;Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" /&gt;
&lt;Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" /&gt;
&lt;Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" /&gt;

&lt;h5&gt;Rounded and Outlined Icon Buttons&lt;/h5&gt;
&lt;Button icon="pi pi-check" class="p-button-rounded p-button-outlined" /&gt;
&lt;Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" /&gt;
&lt;Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" /&gt;
&lt;Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" /&gt;
&lt;Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" /&gt;
&lt;Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" /&gt;
&lt;Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" /&gt;

&lt;h5&gt;Badges&lt;/h5&gt;
&lt;Button type="button" label="Emails" badge="8" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" /&gt;

&lt;h5&gt;Button Set&lt;/h5&gt;
&lt;span class="p-buttonset"&gt;
    &lt;Button label="Save" icon="pi pi-check" /&gt;
    &lt;Button label="Delete" icon="pi pi-trash" /&gt;
    &lt;Button label="Cancel" icon="pi pi-times" /&gt;
&lt;/span&gt;

&lt;h5&gt;Sizes&lt;/h5&gt;
&lt;div class="sizes"&gt;
    &lt;Button label="Small" icon="pi pi-check" class="p-button-sm"  /&gt;
    &lt;Button label="Normal" icon="pi pi-check" class="p-button"  /&gt;
    &lt;Button label="Large" icon="pi pi-check" class="p-button-lg" /&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="css">
button {
	margin-right: .5rem;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>