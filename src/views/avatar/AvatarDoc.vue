<template>
	<AppDoc name="AvatarDemo" :sources="sources" github="avatar/AvatarDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/avatar/avatar.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/avatargroup/avatargroup.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Avatar has three built-in display modes; "label", "icon" and "image".</p>
<pre v-code><code>
&lt;Avatar label="P" /&gt;
&lt;Avatar icon="pi pi-search" /&gt;
&lt;Avatar image="user.png" /&gt;

</code></pre>

		<h5>Sizes</h5>
		<p><i>size</i> property defines the size of the Avatar with "large" and "xlarge" as possible values.</p>
<pre v-code><code>
&lt;Avatar label="P" size="large"/&gt;

</code></pre>

		<h5>AvatarGroup</h5>
		<p>A set of Avatars can be displayed together using the <i>AvatarGroup</i> component.</p>
<pre v-code><code>
&lt;AvatarGroup&gt;
	&lt;Avatar label="P" /&gt;
	&lt;Avatar icon="pi pi-search" /&gt;
	&lt;Avatar image="user.png" /&gt;
	&lt;Avatar label="+2" /&gt;
&lt;/AvatarGroup&gt;
</code></pre>

		<h5>Shape</h5>
		<p>Avatar comes in two different styles specified with the <i>shape</i> property, "square" is the default and "circle" is the alternative.</p>
<pre v-code><code>
&lt;Avatar label="P" shape="circle"/&gt;

</code></pre>

		<h5>Badge</h5>
		<p>A badge can be added to an Avatar with the <router-link to="/badge">Badge</router-link> directive.</p>
<pre v-code><code>
&lt;Avatar image="user.png" size="xlarge" v-badge.danger="4" /&gt;

</code></pre>

		<h5>Templating</h5>
		<p>Content can easily be customized with the default slot instead of using the built-in modes.</p>
<pre v-code><code>
&lt;Avatar&gt;
   Content
&lt;/Avatar&gt;

</code></pre>

		<h5>Properties of Avatar</h5>
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
						<td>label</td>
						<td>string</td>
						<td>null</td>
						<td>Defines the text to display.</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>string</td>
						<td>null</td>
						<td>Defines the icon to display.</td>
					</tr>
					<tr>
						<td>image</td>
						<td>string</td>
						<td>null</td>
						<td>Defines the image to display.</td>
					</tr>
					<tr>
						<td>size</td>
						<td>string</td>
						<td>null</td>
						<td>Size of the element, valid options are "large" and "xlarge".</td>
					</tr>
					<tr>
						<td>shape</td>
						<td>string</td>
						<td>square</td>
						<td>Shape of the element, valid options are "square" and "circle".</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h5>Properties of AvatarGroup</h5>
		<p>Any property as style and class are passed to the main container element. There are no additional properties.</p>
				
		<h5>Styling of Avatar</h5>
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
						<td>p-avatar</td>
						<td>Container element.</td>
                    </tr>
					<tr>
						<td>p-avatar-image</td>
						<td>Container element in image mode.</td>
                    </tr>
					<tr>
						<td>p-avatar-circle</td>
						<td>Container element with a circle shape.</td>
                    </tr>
					<tr>
						<td>p-avatar-text</td>
						<td>Text of the Avatar.</td>
                    </tr>
					<tr>
						<td>p-avatar-icon</td>
						<td>Icon of the Avatar.</td>
                    </tr>
					<tr>
						<td>p-avatar-lg</td>
						<td>Container element with a large size.</td>
                    </tr>
					<tr>
						<td>p-avatar-xl</td>
						<td>Container element with an xlarge size.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Styling of AvatarGroup</h5>
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
						<td>p-avatar-group</td>
						<td>Container element.</td>
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
    <div class="p-grid">
        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Label</h5>
                <Avatar label="P" class="p-mr-2" size="xlarge" />
                <Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
                <Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Label - Circle</h5>
                <Avatar label="P" class="p-mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"  />
                <Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle"  />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Label - Badge</h5>
                <Avatar label="U" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4" />
            </div>
        </div>
    </div>
           
    <div class="p-grid">
        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
                <Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Icon - Circle</h5>
                <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle" />
                <Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" />
            </div>
        </div>

         <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Icon - Badge</h5>
                <Avatar icon="pi pi-user" size="xlarge" v-badge="4"/>
            </div>
        </div>
    </div>

    <div class="p-grid">
        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Image</h5>
                <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"  class="p-mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2" size="large" shape="circle" />
                <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2" shape="circle" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Avatar Group</h5>
                <AvatarGroup class="p-mb-3">
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar label="+2" shape="circle" size="large" style="background-color:#9c27b0; color: #ffffff" />
                </AvatarGroup>
            </div>
        </div>

    	 <div class="p-col-12 p-md-4">
    	    <div class="card">
    	        <h5>Image - Badge</h5>
    	        <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="xlarge" v-badge.danger="4" />
    	    </div>
    	</div>
    </div>
</template>

<script>
export default {
}
<\\/script>
`
				},
				'composition-api': {
					tabName: 'Composition API Source',
					content: `
<template>
    <div class="p-grid">
        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Label</h5>
                <Avatar label="P" class="p-mr-2" size="xlarge" />
                <Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
                <Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Label - Circle</h5>
                <Avatar label="P" class="p-mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"  />
                <Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle"  />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Label - Badge</h5>
                <Avatar label="U" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4" />
            </div>
        </div>
    </div>
           
    <div class="p-grid">
        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
                <Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Icon - Circle</h5>
                <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle" />
                <Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" />
            </div>
        </div>

         <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Icon - Badge</h5>
                <Avatar icon="pi pi-user" size="xlarge" v-badge="4"/>
            </div>
        </div>
    </div>

    <div class="p-grid">
        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Image</h5>
                <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"  class="p-mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2" size="large" shape="circle" />
                <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2" shape="circle" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Avatar Group</h5>
                <AvatarGroup class="p-mb-3">
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"/>
                    <Avatar label="+2" shape="circle" size="large" style="background-color:#9c27b0; color: #ffffff" />
                </AvatarGroup>
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="card">
                <h5>Image - Badge</h5>
                <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="xlarge" v-badge.danger="4" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>`
				},
                'browser-source': {
					tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/avatar/avatar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/avatargroup/avatargroup.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/badgedirective/badgedirective.min.js"><\\/script>`,
					content: `<div id="app">
            <div class="p-grid">
                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Label</h5>
                        <p-avatar label="P" class="p-mr-2" size="xlarge"></p-avatar>
                        <p-avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"></p-avatar>
                        <p-avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff"></p-avatar>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Label - Circle</h5>
                        <p-avatar label="P" class="p-mr-2" size="xlarge" shape="circle"></p-avatar>
                        <p-avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"></p-avatar>
                        <p-avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle"></p-avatar>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Label - Badge</h5>
                        <p-avatar label="U" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4"></p-avatar>
                    </div>
                </div>
            </div>
           
            <div class="p-grid">
                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Icon</h5>
                        <p-avatar icon="pi pi-user" class="p-mr-2" size="xlarge"></p-avatar>
                        <p-avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"></p-avatar>
                        <p-avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff"></p-avatar>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Icon - Circle</h5>
                        <p-avatar icon="pi pi-user" class="p-mr-2" size="xlarge" shape="circle"></p-avatar>
                        <p-avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"></p-avatar>
                        <p-avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle"></p-avatar>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Icon - Badge</h5>
                        <p-avatar icon="pi pi-user" size="xlarge" v-badge="4"></p-avatar>
                    </div>
                </div>
            </div>

            <div class="p-grid">
                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Image</h5>
                        <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2" size="xlarge" shape="circle"></p-avatar>
                        <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2" size="large" shape="circle"></p-avatar>
                        <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2" shape="circle"></p-avatar>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>p-avatar Group</h5>
                        <p-avatargroup class="p-mb-3">
                            <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"></p-avatar>
                            <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"></p-avatar>
                            <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"></p-avatar>
                            <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"></p-avatar>
                            <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="large" shape="circle"></p-avatar>
                            <p-avatar label="+2" shape="circle" size="large" style="background-color:#9c27b0; color: #ffffff"></p-avatar>
                        </p-avatargroup>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Image - Badge</h5>
                        <p-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="xlarge" v-badge.danger="4"></p-avatar>
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp } = Vue;
        const BadgeDirective = primevue.badgedirective;
        
        const App = {
            components: {
                "p-avatar": primevue.avatar,
                "p-avatargroup": primevue.avatargroup
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .directive("badge", BadgeDirective)
            .mount("#app");
        <\\/script>`
				}
			}
		}
	}
}
</script>
