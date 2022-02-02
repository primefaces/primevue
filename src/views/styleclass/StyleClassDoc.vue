<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import StyleClass from 'primevue/StyleClass';
</CodeHighlight>

                <h5>Getting Started</h5>
                <p>StyleClass has two modes, <i>toggleClass</i> to simply add-remove a class and enter/leave animations.</p>

                <p><b>ToggleClass</b></p>
<CodeHighlight>
&lt;Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" /&gt;
&lt;InputText class="block mt-3" /&gt;
</CodeHighlight>

                <p><b>Enter/Leave Animation</b></p>
<CodeHighlight>
&lt;Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" /&gt;
&lt;Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" /&gt;
&lt;div class="box hidden"&gt;Content&lt;/div&gt;
</CodeHighlight>

                <h5>Target</h5>
                <p>Target element is defined with the <i>v-styleclass</i> attribute that can either be a valid css query or one of the keywords below.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>@next</td>
                                <td>Next element.</td>
                            </tr>
                            <tr>
                                <td>@prev</td>
                                <td>Previous element.</td>
                            </tr>
                            <tr>
                                <td>@parent</td>
                                <td>Parent element.</td>
                            </tr>
                            <tr>
                                <td>@grandparent</td>
                                <td>Parent element of the parent.</td>
                            </tr>
                        </tbody>
                    </table>
				</div>

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
                                <td>selector</td>
                                <td>string</td>
                                <td>selector</td>
                                <td>Selector to define the target element.</td>
                            </tr>
                            <tr>
                                <td>enterClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Class to add when item begins to get displayed.</td>
                            </tr>
                            <tr>
                                <td>enterActiveClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Class to add during enter animation.</td>
                            </tr>
                            <tr>
                                <td>enterToClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Class to add when enter animation is completed.</td>
                            </tr>
                            <tr>
                                <td>leaveClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Class to add when item begins to get hidden.</td>
                            </tr>
                            <tr>
                                <td>leaveActiveClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Class to add during leave animation</td>
                            </tr>
                            <tr>
                                <td>leaveToClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Class to add when leave animation is completed.</td>
                            </tr>
                            <tr>
                                <td>hideOnOutsideClick</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Whether to trigger leave animation when outside of the element is clicked.</td>
                            </tr>
                            <tr>
                                <td>toggleClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Adds or removes a class when no enter-leave animation is required.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Events</h5>
                <p>Directive has no events.</p>

                <h5>Dependencies</h5>
                <p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/styleclass" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>

<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Toggle Class&lt;/h5&gt;
    &lt;Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" /&gt;
    &lt;InputText class="block mt-3" /&gt;

    &lt;h5&gt;Animations&lt;/h5&gt;
    &lt;Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" /&gt;
    &lt;Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" /&gt;
    &lt;div class="box hidden"&gt;Content&lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

			</TabPanel>
		</TabView>
	</div>
</template>