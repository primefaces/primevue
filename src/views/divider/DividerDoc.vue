<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Divider from 'primevue/divider';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Divider has two orientations defined with the <i>layout</i> property, default is "horizontal" and the alternative is "vertical".</p>
<CodeHighlight>
&lt;div&gt;Content 1&lt;/div&gt;
&lt;Divider /&gt;
&lt;div&gt;Content 2&lt;/div&gt;
</CodeHighlight>

                <h5>Border Style</h5>
                <p>Style of the border is configured with the <i>type</i> property and supports 3 values; default is "solid" and other possibilities are "dashed" and "dotted".</p>
<CodeHighlight>
&lt;div&gt;Content 1&lt;/div&gt;
&lt;Divider type="dashed"/&gt;
&lt;div&gt;Content 2&lt;/div&gt;
</CodeHighlight>

                <h5>Vertical Divider</h5>
                <p>Vertical divider is enabled by setting the <i>layout</i> property as "vertical".</p>
<CodeHighlight>
&lt;div class="flex"&gt;
    &lt;div&gt;Content 1&lt;/div&gt;
    &lt;Divider layout="vertical" /&gt;
    &lt;div&gt;Content 2&lt;/div&gt;
    &lt;Divider layout="vertical" /&gt;
    &lt;div&gt;Content 3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Content</h5>
                <p>Any content placed inside is rendered within the boundaries of the divider. In addition, location
                    of the content is configured with the <i>align</i> property. In horizontal layout, alignment options
                    are "left", "center" and "right" whereas vertical mode supports "top", "center" and "bottom".
                </p>
<CodeHighlight>
&lt;div&gt;Content 1&lt;/div&gt;

&lt;Divider align="left"&gt;
    &lt;div class="inline-flex align-items-center"&gt;
        &lt;i class="pi pi-user mr-2"&gt;&lt;/i&gt;
        &lt;b&gt;Icon&lt;/b&gt;
    &lt;/div&gt;
&lt;/Divider&gt;

&lt;div&gt;Content 2&lt;/div&gt;

&lt;Divider align="center"&gt;
    &lt;span class="p-tag"&gt;Badge&lt;/span&gt;
&lt;/Divider&gt;

&lt;div&gt;Content 3&lt;/div&gt;

&lt;Divider align="right"&gt;
    &lt;Button label="Button" icon="pi pi-search" class="p-button-outlined"&gt;&lt;/Button&gt;
&lt;/Divider&gt;

&lt;div&gt;Content 4&lt;/div&gt;
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
                                <td>align</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Alignment of the content, options are "left", "center", "right" for horizontal layout
                                    and "top", "center", "bottom" for vertical.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Specifies the orientation, valid values are "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td>solid</td>
                                <td>Border style type, default is "solid" and other options are "dashed" and "dotted".</td>
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
                                <td>p-divider</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-divider-horizontal</td>
                                <td>Container element in horizontal layout.</td>
                            </tr>
                            <tr>
                                <td>p-divider-vertical</td>
                                <td>Container element in vertical layout.</td>
                            </tr>
                            <tr>
                                <td>p-divider-solid</td>
                                <td>Container element with solid border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-dashed</td>
                                <td>Container element with dashed border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-dotted</td>
                                <td>Container element with dotted border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-left</td>
                                <td>Container element with content aligned to left.</td>
                            </tr>
                            <tr>
                                <td>p-divider-right</td>
                                <td>Container element with content aligned to right.</td>
                            </tr>
                            <tr>
                                <td>p-divider-center</td>
                                <td>Container element with content aligned to center.</td>
                            </tr>
                            <tr>
                                <td>p-divider-bottom</td>
                                <td>Container element with content aligned to bottom.</td>
                            </tr>
                            <tr>
                                <td>p-divider-top</td>
                                <td>Container element with content aligned to top.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/divider" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Basic&lt;/h5&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;

    &lt;Divider /&gt;

    &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;

    &lt;Divider /&gt;

    &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;

    &lt;Divider /&gt;

    &lt;p&gt;Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.&lt;/p&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Text with Dashed Style&lt;/h5&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;

    &lt;Divider align="left" type="dashed"&gt;
        &lt;b&gt;Left&lt;/b&gt;
    &lt;/Divider&gt;

    &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;

    &lt;Divider align="center" type="dashed"&gt;
        &lt;b&gt;Center&lt;/b&gt;
    &lt;/Divider&gt;

    &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;

    &lt;Divider align="right" type="dashed"&gt;
        &lt;b&gt;Right&lt;/b&gt;
    &lt;/Divider&gt;

    &lt;p&gt;Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.&lt;/p&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Content&lt;/h5&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;

    &lt;Divider align="left"&gt;
        &lt;div class="inline-flex align-items-center"&gt;
            &lt;i class="pi pi-user mr-2"&gt;&lt;/i&gt;
            &lt;b&gt;Icon&lt;/b&gt;
        &lt;/div&gt;
    &lt;/Divider&gt;

    &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;

    &lt;Divider align="center"&gt;
        &lt;span class="p-tag"&gt;Badge&lt;/span&gt;
    &lt;/Divider&gt;

    &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;

    &lt;Divider align="right"&gt;
        &lt;Button label="Button" icon="pi pi-search" class="p-button-outlined"&gt;&lt;/Button&gt;
    &lt;/Divider&gt;

    &lt;p&gt;Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.&lt;/p&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Vertical&lt;/h5&gt;
    &lt;div class="flex"&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;

        &lt;Divider layout="vertical" /&gt;

        &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;

        &lt;Divider layout="vertical" /&gt;

        &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Vertical with Content&lt;/h5&gt;
    &lt;div class="grid"&gt;
        &lt;div class="col-5 flex align-items-center justify-content-center"&gt;
            &lt;div class="p-fluid"&gt;
                &lt;div class="field"&gt;
                    &lt;label for="username"&gt;Username&lt;/label&gt;
                    &lt;InputText id="username" type="text" /&gt;
                &lt;/div&gt;
                &lt;div class="field"&gt;
                    &lt;label for="password"&gt;Password&lt;/label&gt;
                    &lt;InputText id="password" type="password" /&gt;
                &lt;/div&gt;
                &lt;Button label="Login"&gt;&lt;/Button&gt;
                &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col-2"&gt;
            &lt;Divider layout="vertical"&gt;
                &lt;b&gt;OR&lt;/b&gt;
            &lt;/Divider&gt;
        &lt;/div&gt;
        &lt;div class="col-5 flex align-items-center justify-content-center"&gt;
            &lt;Button label="Sign Up" icon="pi pi-user-plus" class="p-button-success"&gt;&lt;/Button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

			</TabPanel>
		</TabView>
	</div>
</template>