<template>
	<AppDoc name="PasswordDemo" :sources="sources" github="password/PasswordDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Password from 'primevue/password';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/password/password.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>A model can be bound using the standard v-model directive.</p>
<pre v-code><code>
&lt;Password v-model="value" /&gt;

</code></pre>

        <h5>Customization</h5>
        <p>Password component uses regular expressions for middle and strong passwords with the following defaults.</p>

        <h6>Medium</h6>
        <p><i>^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).</i></p>
        <ul>
            <li>At least one lowercase</li>
            <li>At least one uppercase or one number</li>
            <li>Minimum 6 characters</li>
        </ul>

        <h6>Strong</h6>
        <p><i>^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})</i></p>
        <ul>
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>

        <p>It is possible to define your own checks with the <i>mediumRegex</i> and <i>strongRegex</i> properties.</p>

        <h5>Templating</h5>
        <p>3 slots are included to customize the overlay. These are <i>header</i>, <i>content</i> and <i>footer</i>. Note that content overrides the default meter.</p>
<pre v-code><code>
&lt;Password v-model="value4"&gt;
    &lt;template #header&gt;
        &lt;h6&gt;Pick a password&lt;/h6&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;Divider /&gt;
        &lt;p class="p-mt-2"&gt;Suggestions&lt;/p&gt;
        &lt;ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5"&gt;
            &lt;li&gt;At least one lowercase&lt;/li&gt;
            &lt;li&gt;At least one uppercase&lt;/li&gt;
            &lt;li&gt;At least one numeric&lt;/li&gt;
            &lt;li&gt;Minimum 8 characters&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/template&gt;
&lt;/Password&gt;

</code></pre>

		<h5>Properties</h5>
		<p>Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.</p>
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
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>promptLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text to prompt password entry. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>mediumRegex</td>
                        <td>string</td>
                        <td>^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})</td>
                        <td>Regex for a medium level password.</td>
                    </tr>
                    <tr>
                        <td>strongRegex</td>
                        <td>string</td>
                        <td>^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})</td>
                        <td>Regex for a strong level password.</td>
                    </tr>
                    <tr>
                        <td>weakLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text for a weak password. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>mediumLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text for a medium password. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>strongLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text for a strong password. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>feedback</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to show the strength indicator or not.</td>
                    </tr>
                    <tr>
                        <td>toggleMask</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to show an icon to display the password as plain text.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body
                        and "self" for the element itself.</td>
                    </tr>
                    <tr>
                        <td>hideIcon</td>
                        <td>string</td>
                        <td>pi pi-eye-slash</td>
                        <td>Icon to hide displaying the password as plain text.</td>
                    </tr>
                    <tr>
                        <td>showIcon</td>
                        <td>string</td>
                        <td>pi pi-eye</td>
                        <td>Icon to show displaying the password as plain text.</td>
                    </tr>
                    <tr>
                        <td>inputStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the input field.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                    <tr>
                        <td>panelClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the overlay panel.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Events</h5>
        <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>header</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>-</td>
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
						<td>p-password-panel</td>
						<td>Container of password panel</td>
					</tr>
					<tr>
						<td>p-password-meter</td>
						<td>Meter element of password strength</td>
					</tr>
					<tr>
						<td>p-password-info</td>
						<td>Text to display strength</td>
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
        <Password v-model="value1" :feedback="false" />

        <h5>Password Meter</h5>
        <Password v-model="value2" />

        <h5>Show Password</h5>
        <Password v-model="value3" toggleMask></Password>

        <h5>Templating</h5>
        <Password v-model="value4">
            <template #header>
                <h6>Pick a password</h6>
            </template>
            <template #footer="sp">
                {{sp.level}}
                <Divider />
                <p class="p-mt-2">Suggestions</p>
                <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null
        }
    }
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.p-password input) {
    width: 15rem
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic</h5>
        <Password v-model="value1" :feedback="false" />

        <h5>Password Meter</h5>
        <Password v-model="value2" />

        <h5>Show Password</h5>
        <Password v-model="value3" toggleMask></Password>

        <h5>Templating</h5>
        <Password v-model="value4">
            <template #header>
                <h6>Pick a password</h6>
            </template>
            <template #footer="sp">
                {{sp.level}}
                <Divider />
                <p class="p-mt-2">Suggestions</p>
                <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref();
        const value2 = ref();
        const value3 = ref();
        const value4 = ref();

        return { value1, value2, value3, value4 }
    }
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.p-password input) {
    width: 15rem
}
</style>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/password/password.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/divider/divider.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic</h5>
            <p-password v-model="value1" :feedback="false"></p-password>

            <h5>p-password Meter</h5>
            <p-password v-model="value2"></p-password>

            <h5>Show p-password</h5>
            <p-password v-model="value3" toggle-mask></p-password>

            <h5>Templating</h5>
            <p-password v-model="value4">
                <template #header>
                    <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                    {{sp.level}}
                    <p-divider></p-divider>
                    <p class="p-mt-2">Suggestions</p>
                    <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                        <li>At least one lowercase</li>
                        <li>At least one uppercase</li>
                        <li>At least one numeric</li>
                        <li>Minimum 8 characters</li>
                    </ul>
                </template>
            </p-password>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const value1 = ref();
                const value2 = ref();
                const value3 = ref();
                const value4 = ref();

                return { value1, value2, value3, value4 }
            },
            components: {
                "p-password": primevue.password,
                "p-divider": primevue.divider
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-password input {
            width: 15rem
        }
        </style>
`
                }
            }
        }
    }
}
</script>