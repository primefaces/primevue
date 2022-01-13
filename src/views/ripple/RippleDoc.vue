<template>
	<AppDoc name="RippleDemo" :sources="sources" github="ripple/RippleDemo.vue">
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

        <p><span class="font-bold">Note</span>: That would be it to enable ripple on PrimeVue components, next section describes how to use it with your own components and standard elements.</p>

        <h5>Directive</h5>
		<p>Ripple is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the <i>app.directive</i> function.</p>
<pre v-code.script><code>
import Ripple from 'primevue/ripple';

app.directive('ripple', Ripple);

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
        <div class="card-container flex">
            <div class="card primary-box p-ripple" v-ripple>Default</div>
            <div class="card styled-box-green p-ripple" v-ripple>Green</div>
            <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
            <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
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
        background: #ffffff;
        padding: 2rem;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        border-radius: 4px;
        margin-bottom: 2rem;

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
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card-container flex">
            <div class="card primary-box p-ripple" v-ripple>Default</div>
            <div class="card styled-box-green p-ripple" v-ripple>Green</div>
            <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
            <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
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
        background: #ffffff;
        padding: 2rem;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        border-radius: 4px;
        margin-bottom: 2rem;

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
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    content: `<div id="app" class="flex">
        <div class="card primary-box p-ripple" v-ripple>Default</div>
        <div class="card styled-box-green p-ripple" v-ripple>Green</div>
        <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
        <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
    </div>

    <script type="module">
        const { createApp } = Vue;
        const Ripple = primevue.ripple;

        const App = {
            directives: {
                "ripple": Ripple
            }
        };

        const app = createApp(App);
        app.use(primevue.config.default, { ripple: true });
        app.mount("#app");
    <\\/script>
    
    <style>
        .card {
            width: 75px;
            height: 75px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            user-select: none;
            padding: 0;
            background: #ffffff;
            padding: 2rem;
            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
            border-radius: 4px;
            margin-bottom: 2rem;
        }
        .card.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }

        .card.styled-box-green .p-ink {
            background: #4baf50;
        }

        .card.styled-box-orange .p-ink {
            background: #ffc106;
        }

        .card.styled-box-purple .p-ink {
            background: #9c27b0;
        }

        .card:last-child {
            margin-right: 0;
        }
    </style>`
                }
            }
        }
    }
}
</script>