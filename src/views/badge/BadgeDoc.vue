<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Getting Started</h3>
				<p>A badge is offered as pure css rather than a component.</p>

				<h3>Numbers</h3>
				<p>Use <i>.p-badge</i> class to display numbers inside badges.</p>
<CodeHighlight>
&lt;span class="p-badge"&gt;2&lt;/span&gt;
</CodeHighlight>

                <h3>Tags</h3>
				<p>Tags are optimized for text rather than number and used with the <i>.p-tag</i> class. For more rounded styling like pills, add the <i>.p-tag-rounded</i> class</p>
<CodeHighlight>
&lt;span class="p-tag"&gt;New&lt;/span&gt;
&lt;span class="p-tag p-tag-rounded"&gt;New&lt;/span&gt;
</CodeHighlight>

                <h3>Severities</h3>
                <p>Different options are available as severity levels with.</p>

				<ul>
					<li>.p-badge-secondary</li>
					<li>.p-badge-success</li>
					<li>.p-badge-info</li>
					<li>.p-badge-warning</li>
					<li>.p-badge-danger</li>
				</ul>

                <h3>Positoning</h3>
                <p>A badge can easily be positioned relative to another element when both are wrapped inside an element with <i>p-overlay-badge</i> class.</p>
<CodeHighlight>
&lt;span class="p-overlay-badge"&gt;
    &lt;span class="p-badge"&gt;2&lt;/span&gt;
    &lt;i class="pi pi-bell" style="font-size: 2em"&gt;&lt;/i&gt;
&lt;/span&gt;

&lt;span class="p-overlay-badge"&gt;
    &lt;span class="p-badge p-badge-warning"&gt;5&lt;/span&gt;
    &lt;Button type="button" label="New" /&gt;
&lt;/span&gt;
</CodeHighlight>

                <h3>Inline Button Badges</h3>
                <p>Buttons provide integrated badge support with the <i>badge</i> and <i>badgeClass</i> properties.</p>

<CodeHighlight>
&lt;Button type="button" label="Emails" badge="8" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-class-error" /&gt;
</CodeHighlight>

                <h3>Sizes</h3>
                <p>Badge sizes are adjusted with additional classes.</p>
<CodeHighlight>
&lt;span class="p-badge"&gt;2&lt;/span&gt;
&lt;span class="p-badge p-badge-l p-badge-sucess"&gt;4&lt;/span&gt;
&lt;span class="p-badge p-badge-xl p-badge-warning"&gt;6&lt;/span&gt;
</CodeHighlight>

                <p>In addition, when placed inside another element, badge sizes can also derive their size from their parent.</p>
<CodeHighlight>
&lt;h1&gt;Heading 1 &lt;span class="p-tag p-tag-success"&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Heading 2 &lt;span class="p-tag p-tag-success"&gt;New&lt;/span&gt;&lt;/h2&gt;
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
                                <td>p-badge</td>
                                <td>Badge element</td>
                            </tr>
                            <tr>
                                <td>p-tag</td>
                                <td>Tag element</td>
                            </tr>
                            <tr>
                                <td>p-tag-rounded</td>
                                <td>Rounded tag element</td>
                            </tr>
                            <tr>
                                <td>p-overlay-badge</td>
                                <td>Wrapper of a badge and its target.</td>
                            </tr>
                            <tr>
                                <td>p-badge-l</td>
                                <td>Large badge element</td>
                            </tr>
                            <tr>
                                <td>p-badge-l</td>
                                <td>Extra large badge element</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/badge" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Numbers&lt;/h3&gt;
&lt;div class="badges"&gt;
    &lt;span class="p-badge"&gt;2&lt;/span&gt;
    &lt;span class="p-badge p-badge-success"&gt;8&lt;/span&gt;
    &lt;span class="p-badge p-badge-info"&gt;4&lt;/span&gt;
    &lt;span class="p-badge p-badge-warning"&gt;12&lt;/span&gt;
    &lt;span class="p-badge p-badge-danger"&gt;3&lt;/span&gt;
&lt;/div&gt;

&lt;h3&gt;Tags&lt;/h3&gt;
&lt;div class="badges"&gt;
    &lt;span class="p-tag"&gt;Primary&lt;/span&gt;
    &lt;span class="p-tag p-tag-success"&gt;Success&lt;/span&gt;
    &lt;span class="p-tag p-tag-info"&gt;Info&lt;/span&gt;
    &lt;span class="p-tag p-tag-warning"&gt;Warning&lt;/span&gt;
    &lt;span class="p-tag p-tag-danger"&gt;Danger&lt;/span&gt;
&lt;/div&gt;

&lt;h3&gt;Pills&lt;/h3&gt;
&lt;div class="badges"&gt;
    &lt;span class="p-tag p-tag-rounded"&gt;Primary&lt;/span&gt;
    &lt;span class="p-tag p-tag-rounded p-tag-success"&gt;Success&lt;/span&gt;
    &lt;span class="p-tag p-tag-rounded p-tag-info"&gt;Info&lt;/span&gt;
    &lt;span class="p-tag p-tag-rounded p-tag-warning"&gt;Warning&lt;/span&gt;
    &lt;span class="p-tag p-tag-rounded p-tag-danger"&gt;Danger&lt;/span&gt;
&lt;/div&gt;

&lt;h3&gt;Positioned Badge&lt;/h3&gt;
&lt;span class="p-overlay-badge"&gt;
    &lt;span class="p-badge"&gt;2&lt;/span&gt;
    &lt;i class="pi pi-bell" style="font-size: 2em"&gt;&lt;/i&gt;
&lt;/span&gt;

&lt;span class="p-overlay-badge"&gt;
    &lt;span class="p-badge p-badge-warning"&gt;5&lt;/span&gt;
    &lt;Button type="button" label="New" /&gt;
&lt;/span&gt;

&lt;h3&gt;Inline Button Badge&lt;/h3&gt;
&lt;Button type="button" label="Emails" badge="8" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-class-error" /&gt;

&lt;h3&gt;Sizes&lt;/h3&gt;
&lt;div class="badges"&gt;
    &lt;span class="p-badge"&gt;2&lt;/span&gt;
    &lt;span class="p-badge p-badge-lg p-badge-sucess"&gt;4&lt;/span&gt;
    &lt;span class="p-badge p-badge-xl p-badge-warning"&gt;6&lt;/span&gt;
&lt;/div&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>