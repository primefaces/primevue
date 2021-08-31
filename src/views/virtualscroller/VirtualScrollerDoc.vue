<template>
    <AppDoc name="VirtualScrollerDemo" :sources="sources" github="virtualscroller/VirtualScrollerDemo.vue">
        <h5>Imports</h5>
<pre v-code.script><code>
import VirtualScroller from 'primevue/virtualscroller';

</code></pre>

        <h5>Getting Started</h5>
        <p>VirtualScroller is used to display huge data. It periodically adds special elements defined according to the scroll's position to the DOM.
            The <i>item</i> and <i>itemSize</i> properties and <i>item</i> template are required on component. In addition, an initial array is required based on the total number of items to display.<br />
            VirtualScroller automatically calculates how many items will be displayed in the view according to <i>itemSize</i> using a specified scroll height. Its scroll height can be adjusted with <i>scrollHeight</i>
            property or height property of CSS.</p>

<pre v-code><code><template v-pre>
&lt;VirtualScroller :items="basicItems" :itemSize="50"&gt;
    &lt;template v-slot:item="{ item, options }"&gt;
        &lt;div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px"&gt;{{ item }}&lt;/div&gt;
    &lt;/template&gt;
&lt;/VirtualScroller&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            basicItems: null
        }
    },
    mounted() {
        this.basicItems = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}

</code></pre>

        <h5>Loader</h5>
        <p>VirtualScroller has a special loader. It can be activated with the <i>showLoader</i> property.
            In addition, <i>loader</i> template can be used to add custom loaders to item elements.</p>

<pre v-code><code><template v-pre>
&lt;VirtualScroller :items="basicItems" :itemSize="50" showLoader :delay="250"&gt;
    &lt;template v-slot:item="{ item, options }"&gt;
        &lt;div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px"&gt;{{ item }}&lt;/div&gt;
    &lt;/template&gt;
    &lt;template v-slot:loader="{ options }"&gt;
        &lt;div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px" &gt;
            &lt;Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/VirtualScroller&gt;
</template>
</code></pre>

        <h5>Lazy</h5>
        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking <i>lazy-load</i> event.</p>

<pre v-code><code><template v-pre>
&lt;VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" :lazy=true @lazy-load="onLazyLoad"&gt;
    &lt;template v-slot:item="{ item, options }"&gt;
        &lt;div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px"&gt;{{ item }}&lt;/div&gt;
    &lt;/template&gt;
&lt;/VirtualScroller&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            lazyItems: null,
            lazyLoading: false,
            loadLazyTimeout: null,
        }
    },
    mounted() {
        this.lazyItems = Array.from({ length: 100000 });
    },
    methods: {
        onLazyLoad(event) {
            this.lazyLoading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i &lt; last; i++) {
                    lazyItems[i] = `Item #${i}`;
                }

                this.lazyItems = lazyItems;
                this.lazyLoading = false;

            }, Math.random() * 1000 + 250);
        }
    }
}

</code></pre>

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
                        <td>items</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of objects to display.</td>
                    </tr>
                    <tr>
                        <td>itemSize</td>
                        <td>number / [number, number]</td>
                        <td>null</td>
                        <td>The height/width of item according to orientation.</td>
                    </tr>
                    <tr>
                        <td>scrollHeight</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Height of the scroll viewport.</td>
                    </tr>
                    <tr>
                        <td>scrollWidth</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Width of the scroll viewport.</td>
                    </tr>
                    <tr>
                        <td>orientation</td>
                        <td>string</td>
                        <td>'vertical'</td>
                        <td>The orientation of scrollbar, valid values are 'vertical', 'horizontal' and 'both'.</td>
                    </tr>
                    <tr>
                        <td>numToleratedItems</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Determines how many additional elements to add to the DOM outside of the view. <br />
                            According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. <br />
                            Default value is half the number of items shown in the view.</td>
                    </tr>
                    <tr>
                        <td>delay</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Delay in scroll before new data is loaded.</td>
                    </tr>
                    <tr>
                        <td>lazy</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Defines if data is loaded and interacted with in lazy manner.</td>
                    </tr>
                    <tr>
                        <td>showLoader</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to show loader.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the component.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>scroll</td>
                        <td>event: Browser event</td>
                        <td>Callback to invoke when scroll position changes.</td>
                    </tr>
                    <tr>
                        <td>scroll-index-change</td>
                        <td>event.first: First index of the new data range to be loaded.<br/>
                            event.last: Last index of the new data range to be loaded.
                        </td>
                        <td>Callback to invoke when scroll position and item's range in view changes.</td>
                    </tr>
                    <tr>
                        <td>lazy-load</td>
                        <td>event.first: First index of the new data range to be loaded.<br/>
                            event.last: Last index of the new data range to be loaded.
                        </td>
                        <td>Callback to invoke in lazy mode to load new data.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Methods</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>scrollTo</td>
                        <td>
                            left: Left position of scroll. <br />
                            top: Top position of scroll <br />
                            behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                        </td>
                        <td>Scroll to move to a specific position.</td>
                    </tr>
                    <tr>
                        <td>scrollToIndex</td>
                        <td>
                            index: Index of item according to orientation mode. <br />
                            behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                        </td>
                        <td>Scroll to move to a specific item.</td>
                    </tr>
                    <tr>
                        <td>scrollInView</td>
                        <td>
                            index: Index of item according to orientation mode. <br />
                            to: Defines the location of the item in view, valid values are 'to-start' and 'to-end'. <br />
                            behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                        </td>
                        <td>It is used to move the specified index into the view. It is a method that will usually be needed when keyboard support is added to the virtualScroller component.</td>
                    </tr>
                    <tr>
                        <td>getRenderedRange</td>
                        <td>-</td>
                        <td>Returns the range of items added to the DOM.</td>
                    </tr>
                </tbody>
            </table>
        </div>

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
                        <td>content</td>
                        <td>items: An array of objects to display.<br />
                            styleClass: Style class of the component<br />
                            contentRef: Referance of the content<br />
                            getItemOptions: Options of the items</td>
                    </tr>
                    <tr>
                        <td>item</td>
                        <td>item: Item instance<br />
                            options: Options of the item instance</td>
                    </tr>
                    <tr>
                        <td>loader</td>
                        <td>options: Options of the loader items</td>
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
                        <td>p-virtualscroller</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-virtualscroller-content</td>
                        <td>Content element.</td>
                    </tr>
                    <tr>
                        <td>p-virtualscroller-loader</td>
                        <td>Loader element.</td>
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
    <div class="virtualscroller-demo">
        <div class="card">
            <h5 class="p-mb-0">Basic</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Vertical</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Horizontal</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" orientation="horizontal">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="width: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Both</h6>
                    <VirtualScroller :items="multiItems" :itemSize="[50, 100]" orientation="both">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px" >
                                <template v-for="(el, index) of item" :key="index">
                                    <div style="width: 100px">{{ el }}</div>
                                </template>
                            </div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Scroll Delay</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>0ms Delay</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>150ms Delay</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" :delay="150">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>250ms Delay</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Loading</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Basic</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" showLoader :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Templating</h6>
                    <VirtualScroller class="custom-loading" :items="basicItems" :itemSize="50" showLoader :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                        <template v-slot:loader="{ options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px" >
                                <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                            </div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Lazy</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" :lazy=true @lazy-load="onLazyLoad">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Template</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <VirtualScroller class="custom-loading" :items="basicItems" :itemSize="25 * 7" showLoader :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['custom-scroll-item scroll-item', {'odd': options.odd}]">
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Item: \${item}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Index: \${options.index}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Count: \${options.count}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`First: \${options.first}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Last: \${options.last}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Even: \${options.even}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Odd: \${options.odd}\`}}</div>
                            </div>
                        </template>
                        <template v-slot:loader="{ options }">
                            <div :class="['custom-scroll-item scroll-item', {'odd': options.odd}]">
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                            </div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicItems: null,
            multiItems: null,
            lazyItems: null,
            lazyLoading: false,
            loadLazyTimeout: null,
        }
    },
    mounted() {
        this.basicItems = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
        this.multiItems = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
        this.lazyItems = Array.from({ length: 10000 });
    },
    methods: {
        onLazyLoad(event) {
            this.lazyLoading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i < last; i++) {
                    lazyItems[i] = \`Item #\${i}\`;
                }

                this.lazyItems = lazyItems;
                this.lazyLoading = false;

            }, Math.random() * 1000 + 250);
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.virtualscroller-demo {
	::v-deep(.p-virtualscroller) {
		height: 200px;
		width: 200px;
		border: 1px solid var(--surface-d);

        .scroll-item {
            background-color: var(--surface-a);
            display: flex;
            align-items: center;
        }

        .custom-scroll-item {
            flex-direction: column;
            align-items: stretch;
        }

        .odd {
            background-color: var(--surface-b);
        }
	}

    ::v-deep(.p-horizontal-scroll) {
        .p-virtualscroller-content {
            display: flex;
            flex-direction: row;
        }

        .scroll-item {
            writing-mode: vertical-lr;
        }
    }

    ::v-deep(.custom-loading > .p-virtualscroller-loader) {
        display: block;
    }
}
</style>

`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div class="virtualscroller-demo">
        <div class="card">
            <h5 class="p-mb-0">Basic</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Vertical</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Horizontal</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" orientation="horizontal">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="width: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Both</h6>
                    <VirtualScroller :items="multiItems" :itemSize="[50, 100]" orientation="both">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px" >
                                <template v-for="(el, index) of item" :key="index">
                                    <div style="width: 100px">{{ el }}</div>
                                </template>
                            </div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Scroll Delay</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>0ms Delay</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>150ms Delay</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" :delay="150">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>250ms Delay</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Loading</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Basic</h6>
                    <VirtualScroller :items="basicItems" :itemSize="50" showLoader :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>

                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <h6>Templating</h6>
                    <VirtualScroller class="custom-loading" :items="basicItems" :itemSize="50" showLoader :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                        <template v-slot:loader="{ options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px" >
                                <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                            </div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Lazy</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" :lazy=true @lazy-load="onLazyLoad">
                        <template v-slot:item="{ item, options }">
                            <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>

        <div class="card">
            <h5 class="p-mb-0">Template</h5>
            <div class="p-d-flex p-ai-center p-flex-wrap">
                <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                    <VirtualScroller class="custom-loading" :items="basicItems" :itemSize="25 * 7" showLoader :delay="250">
                        <template v-slot:item="{ item, options }">
                            <div :class="['custom-scroll-item scroll-item', {'odd': options.odd}]">
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Item: \${item}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Index: \${options.index}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Count: \${options.count}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`First: \${options.first}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Last: \${options.last}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Even: \${options.even}\`}}</div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{\`Odd: \${options.odd}\`}}</div>
                            </div>
                        </template>
                        <template v-slot:loader="{ options }">
                            <div :class="['custom-scroll-item scroll-item', {'odd': options.odd}]">
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                            </div>
                        </template>
                    </VirtualScroller>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const basicItems = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
        const multiItems = ref(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));
        const lazyItems = ref(Array.from({ length: 10000 }));
        const lazyLoading = ref(false);
        const loadLazyTimeout = ref(null);

        const onLazyLoad = (event) => {
            lazyLoading.value = true;

            if (loadLazyTimeout.value) {
                clearTimeout(loadLazyTimeout.value);
            }

            //imitate delay of a backend call
            loadLazyTimeout.value = setTimeout(() => {
                const { first, last } = event;
                const _lazyItems = [...lazyItems.value];

                for (let i = first; i < last; i++) {
                    _lazyItems[i] = \`Item #\${i}\`;
                }

                lazyItems.value = _lazyItems;
                lazyLoading.value = false;

            }, Math.random() * 1000 + 250);
        }

        return { basicItems, multiItems, lazyItems, lazyLoading, onLazyLoad }
    },
    methods: {

    }
}
<\\/script>

<style lang="scss" scoped>
.virtualscroller-demo {
	::v-deep(.p-virtualscroller) {
		height: 200px;
		width: 200px;
		border: 1px solid var(--surface-d);

        .scroll-item {
            background-color: var(--surface-a);
            display: flex;
            align-items: center;
        }

        .custom-scroll-item {
            flex-direction: column;
            align-items: stretch;
        }

        .odd {
            background-color: var(--surface-b);
        }
	}

    ::v-deep(.p-horizontal-scroll) {
        .p-virtualscroller-content {
            display: flex;
            flex-direction: row;
        }

        .scroll-item {
            writing-mode: vertical-lr;
        }
    }

    ::v-deep(.custom-loading > .p-virtualscroller-loader) {
        display: block;
    }
}
</style>
`
                }
            }
        }
    }
}
</script>
