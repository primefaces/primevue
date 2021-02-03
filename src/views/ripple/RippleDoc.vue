<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Getting Started</h5>
                <h5>Ripple</h5>
                <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at
                    your app's entry file (e.g. main.js) during the PrimeVue setup.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, {ripple: true});

</code></pre>

                <p><span class="p-text-bold">Note</span>: That would be it to enable ripple on PrimeVue components, next section describes how to use it with your own components and standard elements.</p>

                <h5>Directive</h5>
				<p>Ripple is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the <i>Vue.directive</i> function.</p>
<pre v-code.script><code>
import Ripple from 'primevue/ripple';

Vue.directive('ripple', Ripple);

</code></pre>

                <p>Ripple can also be configured locally using the directives property of your component.</p>
<pre v-code.script><code>
directives: {
    'ripple': Ripple
}

</code></pre>

                <p>Once the ripple is configured, add <i>.p-ripple</i> class to the target and attach the directive with the v- prefix.</p>
<pre v-code><code><template v-pre>
&lt;div class="p-ripple" v-ripple&gt;&lt;/div&gt;
</template>
</code></pre>

				<h5>Styling</h5>
				<p>Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of <i>.p-ink</i> element.</p>
<pre v-code><code><template v-pre>
&lt;div class="p-ripple purple" v-ripple&gt;&lt;/div&gt;
</template>
</code></pre>

<pre v-code.css><code>
.p-ripple.purple .p-ink {
    background: rgba(256,39,176,.3);
}

</code></pre>


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
                <div class="p-d-flex p-jc-between">
                    <a href="https://github.com/primefaces/primevue/tree/master/src/views/ripple" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
                    <LiveEditor name="RippleDemo" :sources="sources" />
                </div>
<pre v-code><code><template v-pre>
&lt;div class="card-container p-d-flex"&gt;
    &lt;div class="card primary-box p-ripple" v-ripple&gt;Default&lt;/div&gt;
    &lt;div class="card styled-box-green p-ripple" v-ripple&gt;Green&lt;/div&gt;
    &lt;div class="card styled-box-orange p-ripple" v-ripple&gt;Orange&lt;/div&gt;
    &lt;div class="card styled-box-purple p-ripple" v-ripple&gt;Purple&lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {}

</code></pre>

<pre v-code.css><code>
::v-deep(.card-container) {
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

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
    data() {
        return {
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card-container p-d-flex">
                <div class="card primary-box p-ripple" v-ripple>Default</div>
                <div class="card styled-box-green p-ripple" v-ripple>Green</div>
                <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
                <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}`,
                    style: `<style lang="scss" scoped>
::v-deep(.card-container) {
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
</style>`
                }
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>