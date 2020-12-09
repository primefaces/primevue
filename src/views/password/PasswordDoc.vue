<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import Password from 'primevue/password';

</code></pre>

				<h5>Getting Started</h5>
				<p>A model can be bound using the standard v-model directive.</p>
<pre v-code>
<code>
&lt;Password v-model="value" /&gt;

</code></pre>

                <h5>Customization</h5>
                <p>Password components uses regular expressions for middle and strong passwords with the following defaults.</p>

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
                                <td>Enter a password</td>
                                <td>Text to prompt password entry. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                            </tr>
                            <tr>
                                <td>mediumRegex</td>
                                <td>string</td>
                                <td>Regex for a medium level password.</td>
                                <td>^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).</td>
                            </tr>
                            <tr>
                                <td>strongRegex</td>
                                <td>string</td>
                                <td>Regex for a strong level password.</td>
                                <td>^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})</td>
                            </tr>
                            <tr>
                                <td>weakLabel</td>
                                <td>string</td>
                                <td>Weak</td>
                                <td>Text for a weak password. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                            </tr>
                            <tr>
                                <td>mediumLabel</td>
                                <td>string</td>
                                <td>Medium</td>
                                <td>Text for a medium password. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                            </tr>
                            <tr>
                                <td>strongLabel</td>
                                <td>string</td>
                                <td>Strong</td>
                                <td>Text for a strong password. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                            </tr>
                            <tr>
                                <td>feedback</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the strength indicator or not.</td>
                            </tr>
						</tbody>
					</table>
				</div>

                <h5>Events</h5>
                <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/password" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code>
<code>
&lt;Password v-model="value" /&gt;

</code></pre>

<pre v-code.script>
<code>
export default {
	data() {
		return {
			value: ''
		}
	}
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>