<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Getting Started</h5>
                <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at
                    while installing PrimeVue.
                </p>
<CodeHighlight lang="js">
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue, {ripple: true});
</CodeHighlight>

                <p><span class="p-text-bold">Note</span>: That would be it to enable ripple on PrimeVue components, next section describes how to use it with your own components and standard elements.</p>

                <h5>Directive</h5>
				<p>Ripple is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the <i>Vue.directive</i> function.</p>
<CodeHighlight lang="js">
import Ripple from 'primevue/ripple';

Vue.directive('ripple', Ripple);
</CodeHighlight>

                <p>Ripple can also be configured locally using the directives property of your component.</p>
<CodeHighlight lang="js">
directives: {
    'ripple': Ripple
}
</CodeHighlight>

                <p>Once the ripple is configured, add <i>.p-ripple</i> class to the target and attach the directive with the v- prefix.</p>
<CodeHighlight>
<template v-pre>
&lt;div class="p-ripple" v-ripple&gt;&lt;/div&gt;
</template>
</CodeHighlight>

				<h5>Styling</h5>
				<p>Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of <i>.p-ink</i> element.</p>
<CodeHighlight>
<template v-pre>
&lt;div class="p-ripple purple" v-ripple&gt;&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="css">
.p-ripple.purple .p-ink {
    background: rgba(256,39,176,.3);
}
</CodeHighlight>


				<h5>Styling</h5>
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
                                <td>p-ripple</td>
                                <td>Host element.</td>
                            </tr>
                            <tr>
                                <td>p-ink</td>
                                <td>Ripple element.</td>
                            </tr>
                            <tr>
                                <td>p-ink-active</td>
                                <td>Ripple element during animating.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/ripple" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="card-container p-d-flex"&gt;
    &lt;div class="card primary-box p-ripple" v-ripple&gt;Default&lt;/div&gt;
    &lt;div class="card styled-box-green p-ripple" v-ripple&gt;Green&lt;/div&gt;
    &lt;div class="card styled-box-orange p-ripple" v-ripple&gt;Orange&lt;/div&gt;
    &lt;div class="card styled-box-purple p-ripple" v-ripple&gt;Purple&lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {}
</CodeHighlight>

<CodeHighlight lang="css">
/deep/ .card-container {
    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;

        &.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }

        &.styled-box-green {
            .p-ink {
                background: rgba(#4baf50, 0.3);
            }
        }

        &.styled-box-orange {
            .p-ink {
                background: rgba(#ffc106, 0.3);
            }
        }

        &.styled-box-purple {
            .p-ink {
                background: rgba(#9c27b0, 0.3);
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>