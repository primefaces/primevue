<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Getting Started</h5>
				<p>Badge can either be used as a standalone component or as a directive.</p>

                <h6>Component</h6>
<CodeHighlight lang="javascript">
import Badge from 'primevue/badge';
</CodeHighlight>

                <p>Content of the badge is specified using the <i>value</i> property.</p>

<CodeHighlight>
&lt;Badge value="2"&gt;&lt;/Badge&gt;
</CodeHighlight>

                 <h6>Directive</h6>
<CodeHighlight lang="javascript">
import BadgeDirective from 'primevue/badgedirective';
</CodeHighlight>

                <p>When used as a directive, badge needs to be configured at the application with a name of your choice.</p>

<CodeHighlight lang="javascript">
&lt;i class="pi pi-bell" v-badge="2"&gt;&lt;/i&gt;
</CodeHighlight>

                 <h5>Severities</h5>
                <p>Different color options are available as severity levels. When used as a component use the <i>severity</i> property
                to apply a severity and use a <i>modifier</i> as the severity value in directive mode.</p>

				<ul>
					<li>success</li>
					<li>info</li>
					<li>warning</li>
					<li>danger</li>
				</ul>

<CodeHighlight>
&lt;Badge value="2" severity="success"&gt;&lt;/Badge&gt;

&lt;i class="pi pi-bell" v-badge.success="2"&gt;&lt;/i&gt;
</CodeHighlight>

                <h5>Button Badges</h5>
                <p>Buttons provide integrated badge support with the <i>badge</i> and <i>badgeClass</i> properties.</p>

<CodeHighlight>
&lt;Button type="button" label="Emails" badge="8" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" /&gt;
</CodeHighlight>

				<h5>Sizes</h5>
                <p>Badge sizes are adjusted with the <i>size</i> property that accepts "large" and "xlarge" as the possible alternatives to the default size. Currently
                sizes only apply to component mode.</p>

<CodeHighlight>
&lt;Badge value="2"&gt;&lt;/Badge&gt;
&lt;Badge value="4" size="large" severity="warning"&gt;&lt;/Badge&gt;
&lt;Badge value="6" size="xlarge" severity="success"&gt;&lt;/Badge&gt;
</CodeHighlight>

                <p>In addition, when placed inside another element, badge sizes can also derive their size from their parent.</p>
<CodeHighlight>
&lt;h1&gt;Heading 1 &lt;Badge value="New"&gt;&lt;/Badge&gt;&lt;/h1&gt;
&lt;h2&gt;Heading 2 &lt;Badge value="New"&gt;&lt;/Badge&gt;&lt;/h2&gt;
</CodeHighlight>

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
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value to display inside the badge.</td>
                            </tr>
							<tr>
                                <td>severity</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Severity type of the badge.</td>
                            </tr>
							<tr>
                                <td>size</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Size of the badge, valid options are "large" and "xlarge".</td>
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
                                <td>p-badge</td>
                                <td>Badge element</td>
                            </tr>
                            <tr>
                                <td>p-overlay-badge</td>
                                <td>Wrapper of a badge and its target.</td>
                            </tr>
                            <tr>
                                <td>p-badge-dot</td>
                                <td>Badge element with no value.</td>
                            </tr>
                            <tr>
                                <td>p-badge-success</td>
                                <td>Badge element with success severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-info</td>
                                <td>Badge element with info severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-warning</td>
                                <td>Badge element with warning severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-danger</td>
                                <td>Badge element with danger severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-lg</td>
                                <td>Large badge element</td>
                            </tr>
                            <tr>
                                <td>p-badge-xl</td>
                                <td>Extra large badge element</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/badge" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Numbers&lt;/h5&gt;
&lt;Badge value="2" class="p-mr-2"&gt;&lt;/Badge&gt;
&lt;Badge value="8" severity="success" class="p-mr-2"&gt;&lt;/Badge&gt;
&lt;Badge value="4" severity="info" class="p-mr-2"&gt;&lt;/Badge&gt;
&lt;Badge value="12" severity="warning" class="p-mr-2"&gt;&lt;/Badge&gt;
&lt;Badge value="3" severity="danger"&gt;&lt;/Badge&gt;

&lt;h5 class="p-mb-4"&gt;Positioned Badge&lt;/h5&gt;
&lt;i class="pi pi-bell p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"&gt;&lt;/i&gt;
&lt;i class="pi pi-calendar p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="'10+'"&gt;&lt;/i&gt;
&lt;i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger&gt;&lt;/i&gt;

&lt;h5&gt;Button Badge&lt;/h5&gt;
&lt;Button type="button" label="Emails" badge="8" class="p-mr-2" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" /&gt;

&lt;h5&gt;Sizes&lt;/h5&gt;
&lt;Badge value="2" class="p-mr-2"&gt;&lt;/Badge&gt;
&lt;Badge value="4" class="p-mr-2" size="large" severity="warning"&gt;&lt;/Badge&gt;
&lt;Badge value="6" size="xlarge" severity="success"&gt;&lt;/Badge&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>