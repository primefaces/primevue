<template>
	<AppDoc name="ScrollPanelDemo" :sources="sources" github="scrollpanel/ScrollPanelDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import ScrollPanel from 'primevue/scrollpanel';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/scrollpanel/scrollpanel.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>ScrollPanel usage is similar to any container element.</p>
<pre v-code><code>
&lt;ScrollPanel style="width: 100%; height: 200px"&gt;
    content
&lt;/ScrollPanel&gt;

</code></pre>

        <h5>Customization</h5>
        <p>Look and feel can easily be customized, here is an example with custom scrollbars.</p>
<pre v-code><code>
&lt;ScrollPanel style="width: 100%; height: 200px" class="custom"&gt;
    content
&lt;/ScrollPanel&gt;

</code></pre>

<pre v-code.css><code>
.custom .p-scrollpanel-wrapper {
    border-right: 9px solid #f4f4f4;
}

.custom .p-scrollpanel-bar {
    background-color: #1976d2;
    opacity: 1;
    transition: background-color .3s;
}

.custom .p-scrollpanel-bar:hover {
    background-color: #135ba1;
}

</code></pre>

		<h5>Properties</h5>
        <p>Any property such as style and class are passed to the main container element. There are no component specific properties.</p>

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
                        <td>p-scrollpanel</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-wrapper</td>
                        <td>Wrapper of content section.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-content</td>
                        <td>Content section.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-bar</td>
                        <td>Scrollbar handle.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-bar-x</td>
                        <td>Scrollbar handle of a horizontal bar.</td>
                    </tr>
                    <tr>
                        <td>p-scrollpanel-bar-y</td>
                        <td>Scrollbar handle of a vertical bar</td>
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
        <div class="p-grid">
            <div class="p-col-12 p-md-4 p-p-5">
                <ScrollPanel style="width: 100%; height: 200px">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                </ScrollPanel>
            </div>
            <div class="p-col-12 p-md-4 p-p-5">
                <ScrollPanel style="width: 100%; height: 200px" class="custombar1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                </ScrollPanel>
            </div>
            <div class="p-col-12 p-md-4 p-p-5">
                <ScrollPanel style="width: 100%; height: 200px" class="custombar2">
                    <p style="width: 600px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                </ScrollPanel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.p-scrollpanel) {
    p {
        padding: .5rem;
        line-height: 1.5;
        margin: 0;
    }

    &.custombar1 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
        }

        .p-scrollpanel-bar {
            background-color: var(--primary-color);
            opacity: 1;
            transition: background-color .2s;

            &:hover {
                background-color: #007ad9;
            }
        }
    }

    &.custombar2 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
            border-bottom: 9px solid var(--surface-b);
        }

        .p-scrollpanel-bar {
            background-color: var(--surface-d);
            border-radius: 0;
            opacity: 1;
            transition: background-color .2s;
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
        <div class="p-grid">
            <div class="p-col-12 p-md-4 p-p-5">
                <ScrollPanel style="width: 100%; height: 200px">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                </ScrollPanel>
            </div>
            <div class="p-col-12 p-md-4 p-p-5">
                <ScrollPanel style="width: 100%; height: 200px" class="custombar1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                </ScrollPanel>
            </div>
            <div class="p-col-12 p-md-4 p-p-5">
                <ScrollPanel style="width: 100%; height: 200px" class="custombar2">
                    <p style="width: 600px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                </ScrollPanel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.p-scrollpanel) {
    p {
        padding: .5rem;
        line-height: 1.5;
        margin: 0;
    }

    &.custombar1 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
        }

        .p-scrollpanel-bar {
            background-color: var(--primary-color);
            opacity: 1;
            transition: background-color .2s;

            &:hover {
                background-color: #007ad9;
            }
        }
    }

    &.custombar2 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
            border-bottom: 9px solid var(--surface-b);
        }

        .p-scrollpanel-bar {
            background-color: var(--surface-d);
            border-radius: 0;
            opacity: 1;
            transition: background-color .2s;
        }
    }  
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/scrollpanel/scrollpanel.min.js"><\\/script>`,
                    content: `<div id="app">
            <div class="p-grid">
                <div class="p-col-12 p-md-4 p-p-5">
                    <p-scrollpanel style="width: 100%; height: 200px">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Vitae et leo duis ut diam.
                            Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                            Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                            Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                            Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                            Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                            Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                            Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                            Mattis aliquam faucibus purus in massa tempor nec.
                        </p>
                    </p-scrollpanel>
                </div>
                <div class="p-col-12 p-md-4 p-p-5">
                    <p-scrollpanel style="width: 100%; height: 200px" class="custombar1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Vitae et leo duis ut diam.
                            Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                            Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                            Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                            Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                            Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                            Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                            Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                            Mattis aliquam faucibus purus in massa tempor nec.
                        </p>
                    </p-scrollpanel>
                </div>
                <div class="p-col-12 p-md-4 p-p-5">
                    <p-scrollpanel style="width: 100%; height: 200px" class="custombar2">
                        <p style="width: 600px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Vitae et leo duis ut diam.
                            Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                            Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                            Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                            Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                            Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                            Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                            Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                            Mattis aliquam faucibus purus in massa tempor nec.
                        </p>
                    </p-scrollpanel>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp } = Vue;

        const App = {
            components: {
                "p-scrollpanel": primevue.scrollpanel
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-scrollpanel p {
            padding: .5rem;
            line-height: 1.5;
            margin: 0;
        }

        .p-scrollpanel.custombar1 .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
        }

        .p-scrollpanel.custombar1 .p-scrollpanel-bar {
            background-color: var(--primary-color);
            opacity: 1;
            transition: background-color .2s;
        }

        .p-scrollpanel.custombar1 .p-scrollpanel-bar:hover {
            background-color: #007ad9;
        }

        .p-scrollpanel.custombar2 .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
            border-bottom: 9px solid var(--surface-b);
        }

        .p-scrollpanel.custombar2 .p-scrollpanel-bar {
            background-color: var(--surface-d);
            border-radius: 0;
            opacity: 1;
            transition: background-color .2s;
        }
        </style>`
                }
            } 
        }
    }
}
</script>