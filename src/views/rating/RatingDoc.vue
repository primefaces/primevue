<template>
    <AppDoc name="RatingDemo" :sources="sources" github="rating/RatingDemo.vue">
        <h5>Import via Module</h5>
        <pre v-code.script><code>
import Rating from 'primevue/rating';

</code></pre>

        <h5>Import via CDN</h5>
        <pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/rating/rating.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>Getting Started</h5>
        <p>Two-way value binding is defined using v-model.</p>
        <pre v-code><code>
&lt;Rating v-model="val" /&gt;

</code></pre>

        <h5>Number of Stars</h5>
        <p>Number of stars to display is defined with <i>stars</i> property, default is 5.</p>
        <pre v-code><code>
&lt;Rating v-model="val" :stars="7"/&gt;

</code></pre>

        <h5>Cancel</h5>
        <p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>
        <pre v-code><code>
&lt;Rating v-model="val" :cancel="false" /&gt;

</code></pre>

        <h5>Templating</h5>
        <p>Templating allows customizing the content where the icon instance is available as the implicit variable.</p>
        <pre v-code><code><template v-pre>
&lt;Rating :modelValue="3">
    &lt;template #cancel&gt;
        &lt;img src="demo/images/rating/cancel.png" class="cursor-pointer" height="24" width="24"&gt;
    &lt;/template&gt;
    &lt;template #onicon&gt;
        &lt;img src="demo/images/rating/custom-asset-2.png" height="24" width="24" class="ml-2 cursor-pointer"&gt;
    &lt;/template&gt;
    &lt;template #officon&gt;
        &lt;img src="demo/images/rating/custom-asset.png" height="24" width="24" class="ml-2 cursor-pointer"&gt;
    &lt;/template&gt;
&lt;/Rating&gt;

</template>
</code></pre>

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
                        <td>modelValue</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Value of the rating.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the element should be disabled.</td>
                    </tr>
                    <tr>
                        <td>readonly</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that component is read-only.</td>
                    </tr>
                    <tr>
                        <td>stars</td>
                        <td>number</td>
                        <td>5</td>
                        <td>Number of stars.</td>
                    </tr>
                    <tr>
                        <td>cancel</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>When specified a cancel icon is displayed to allow clearing the value.</td>
                    </tr>
                    <tr>
                        <td>onIcon</td>
                        <td>string</td>
                        <td>pi pi-star</td>
                        <td>Icon for the on state.</td>
                    </tr>
                    <tr>
                        <td>offIcon</td>
                        <td>string</td>
                        <td>pi pi-star-fill</td>
                        <td>Icon for the off state.</td>
                    </tr>
                    <tr>
                        <td>cancelIcon</td>
                        <td>string</td>
                        <td>pi pi-ban</td>
                        <td>Icon for the cancelable state.</td>
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
                        <td>change</td>
                        <td>
                            event.originalEvent: Original event <br />
                            event.value: Selected option value
                        </td>
                        <td>Callback to invoke on value change.</td>
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
                        <td>p-rating</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-rating-item</td>
                        <td>Each item element</td>
                    </tr>
                    <tr>
                        <td>p-rating-item-active</td>
                        <td>Selected item elements.</td>
                    </tr>
                    <tr>
                        <td>p-rating-cancel-item</td>
                        <td>Cancel item element.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>
            Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the <router-link to="/locale">locale</router-link> API via <i>star</i> and <i>stars</i> of the
            <i>aria</i> property.
        </p>

        <h6>Keyboard Support</h6>
        <p>Keyboard interaction is derived from the native browser handling of radio buttons in a group.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>tab</i></td>
                        <td>Moves focus to the star representing the value, if there is none then first star receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">left arrow</i>
                                <i>up arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the previous star, if there is none then last radio button receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">right arrow</i>
                                <i>down arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the next star, if there is none then first star receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>If the focused star does not represent the value, changes the value to the star value.</td>
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
        <h5>Basic {{val1}}</h5>
        <Rating v-model="val1" />

        <h5>Without Cancel</h5>
        <Rating v-model="val2" :cancel="false" />

        <h5>ReadOnly</h5>
        <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />

        <h5>Disabled</h5>
        <Rating :modelValue="8" :disabled="true" :stars="10" />

        <h5>Custom Icons</h5>
        <Rating v-model="val3" :stars="5" onIcon="pi pi-heart-fill" offIcon="pi pi-heart" cancelIcon="pi pi-times" />

        <h5>Templating</h5>
        <Rating v-model="val4">
            <template #cancel>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAHAUlEQVR42u1ZbWwTdRx+Nrvd9bZrB4hMRA2STTroOkNsu7Z7QSTxgyaGxMSXRIPxJRg1orLwMtGBiFbGxnib42WMMUTFoCbqBz+YGL9o4geDRoEgwjq2ttetL9e73rXbmVv/hXNr99qBMfslT653u3t+z/O73//+978BszEbs/H/j/gjj+QmVq16bNDhWJ9YvZqZyVyJ6uq1ierqdfFHHy3MpoG8uN3enFi27Id4Tc2dMyVeXr2aSVgsJ+MWy1fxNWvmZ4945cp1ksEQlPLzE7LJdFh2OG7LuniHg5bN5nqZYaISRcXkyspd8Yceoqdf/dra5+WiogEJUIahkpeVfSQ7HPOyKr68fItUUBC6lkevF2Sb7f34ypVTM6E8/HCuXFv7nFRUFIoByr9AUZJcVtYmW63zsyCekS2W+hjLjsoj0bQoW607hyZr4ufy8nzlwQdfFouKBkaJT4GmZclkOiQ5HAumKj5msxVKFss7MZaNZsojUFQsYbe7lTVr2AkT/1hSUuU3GC4qgCKqJGQ7CjQdj5WWHhPt9kkPbNFqNYpm8/YYy4rpuAWCIUDhaTryU2npkxMm/3rx4oL9wCY/EFRNRAmEdKCoQbGkpEOw2++YKL9gtRrE5cu3iYWFiXScai6eiBeAwQ6g9ZvFi+dOqkLbAeYk8IYPiCqEmNeY0UKgaUVYurRdqKy8fTze6IoVBsFsbhBYdigdF68RzwPxL4ADjcCcKfXoXoA+DtR5AV4hxBFNEi2iSRNHok5nxnYSHI450bKydwSDIS1HmPAT8fIZoPXQVMWnYjdAdQB1vcRElCRKmdGCpyglajK1C07nXaMq73TOEyyW7Xxh4ejrCGcIUAaT29jnwMFWoCgrz+k9QN4JoK4bCA+RpEGSdCQiyTvRGbXb705dz9ts86Jm8w6eZdNeE9KI7wdiZ4D9zYAxqzNlE3DLceB1DxAiVRo2EUojJpyfr/ClpScjLlcx/8ADhbzZvDPMMNeEas8PEmjE72sEDDPyrrIX0H0KbLgMhIaIgH6NCC1COp0SMZtb+Pvv3xTS668Z1mKAGFK5AkDsK+BgU7baJlO0AXmdwKbL5BEbGcNEkKaHQgUFieAY4geJ+DPAwT3THbATjWYgrwvY2A0MDBEh/ZNAYHTbHGgCbr2ha4Q9AN0JbLwCDCSIII6IGwupc+Tkb/k0sH83cBtuRjQl54k3LwH9IqkuN454jkyKfclHZfMNr/zIeA/IawNeOpeTcyk0QuhIBMjA787J8XUCO9zZflRONb6/5x7m7Ny5XwZyc4dF+jOAI3fpnNH4y/dLliz5T4iP1dZS4ooVGwIGg8efk5NRfAo+1UhBQb9gNjeL1dXzbqr4fqeTCVgsWzmjMcQRcSn4M/xO7XN6vRwwmdoGXK4FN0U853AUcOXl27wsG/YCyljoI8JHHvMmTRwNuFwLb7R4vd9sVsVH+ogYLXoB5armfSm1n+5cL0XJ/nvvPcY5nTfGhN9q1fuTlU8r/iqB+tZ6CUicB4ZXXJlMqMf7aFrili49zlVWzmw7cU4n5Vu+/O0+o5G/SpJroR7rIc95dUycAD74CHj1CjAoaf6e7rpevV7yl5Z2cC7X/JkR73JRvoqKt3pZNppOvCrMQ8SrPf4ZcHg3cKsbYNqB+ktAfFwTNC17TaajXE1Ndic3v9PJ+C2Whl6DQchU+W6N+FNAazNwbXnZAhjbgU1/AbJEjHoyFOEqTcs+k+kYV1WVnTvhq6pifRUV23oZRuohSVJIVfMy6fnepPh9bqA4zcrOeASouwDIIjGg5dCil6LiPpOp02e3T29M+Fwutq+iosGj18c8aRKpx65cf7cZ+gRo+RDImLQRYE8AG84DUoxc352Gd5g7L2/QW1bW6bXZiqckXlq1yui1WLb2MIycSbyHrAd6gPip5Epq3Jn1IMAcBerOkTvRk8HEML9Op/SZTB1iTc3kTHxTUmIUbbZ3exhG6BlDfDi5L38KHNg1ibfKFkDfDmy8AIgx0nqZTHTrdIpw332d35aUTLydPl+0yPWrXn8xNEaFBpLtEzsF7G0EJj3gUibOAyGemPCkaU+1SBd1usjHxcWPT5j88MKFuvXAs78BXn6ECc918WIX0LJzGmvYJiD/ELDhDyAYJAPaoxkb4eSWdwNvPwHoJ51gM/DE74Bf1JAHk0aELqA5G58+3EDeYWD9BSCgNRFNio80AvX1wC1TTrAZeOos4BWuV0ToBJqzuRhxA7ojwGvnAG6AfOj6GwjvAt7aCuimnWAz8MyfgJ8D4l3AHvcMfPrYBejagNevAGH1Du8AGl7Jhng1XgRyPwDcXcB3DZoZNttRB+S3A+2twOmngblZI34ByN0CPNYIrN8MzOh/Kd3A2neBdWuBQszGbMzGuPEP0f6Mp5gQKNsAAAAASUVORK5CYII=" class="cursor-pointer" height="24" width="24"/>
            </template>
            <template #onicon>
                <img src="data:image/png;base64,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" height="24" width="24" class="ml-2 cursor-pointer"  />
            </template>
            <template #officon>
                <img src="data:image/png;base64,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" height="24" width="24" class="ml-2 cursor-pointer" />
            </template>
        </Rating>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val1: null,
            val2: 3,
            val3: 2,
            val4: 2
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic {{val1}}</h5>
        <Rating v-model="val1" />

        <h5>Without Cancel</h5>
        <Rating v-model="val2" :cancel="false" />

        <h5>ReadOnly</h5>
        <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />

        <h5>Disabled</h5>
        <Rating :modelValue="8" :disabled="true" :stars="10" />

        <h5>Custom Icons</h5>
        <Rating v-model="val3" :stars="5" onIcon="pi pi-heart-fill" offIcon="pi pi-heart" cancelIcon="pi pi-times" />

        <h5>Templating</h5>
        <Rating v-model="val4">
            <template #cancel>
                <img src="data:image/png;base64,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" class="cursor-pointer" height="24" width="24"/>
            </template>
            <template #onicon>
                <img src="data:image/png;base64,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" height="24" width="24" class="ml-2 cursor-pointer"  />
            </template>
            <template #officon>
                <img src="data:image/png;base64,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" height="24" width="24" class="ml-2 cursor-pointer" />
            </template>
        </Rating>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const val1 = ref();
        const val2 = ref(3);
        const val3 = ref(2);
        const val4 = ref(2);

        return { val1, val2 }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic {{val1}}</h5>
            <p-rating v-model="val1"></p-rating>

            <h5>Without Cancel</h5>
            <p-rating v-model="val2" :cancel="false"></p-rating>

            <h5>ReadOnly</h5>
            <p-rating :modelValue="5" :readonly="true" :stars="10" :cancel="false"></p-rating>

            <h5>Disabled</h5>
            <p-rating :modelValue="8" :disabled="true" :stars="10"></p-rating>

            <h5>Custom Icons</h5>
            <p-rating v-model="val3" :stars="5" on-icon="pi pi-heart-fill" off-icon="pi pi-heart" cancel-icon="pi pi-times"></p-rating>

            <h5>Templating</h5>
            <p-rating v-model="val4">
            <template #cancel>
                <img src="data:image/png;base64,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" class="cursor-pointer" height="24" width="24"/>
            </template>
            <template #onIcon>
                <img src="data:image/png;base64,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" height="24" width="24" class="ml-2 cursor-pointer"  />
            </template>
            <template #offIcon>
                <img src="data:image/png;base64,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" height="24" width="24" class="ml-2 cursor-pointer" />
            </template>
            </p-rating>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const val1 = ref();
                const val2 = ref(3);
                const val3 = ref(2);
                const val4 = ref(2);

                return { val1, val2 }
            },
            components: {
                "p-rating": primevue.rating
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            }
        };
    }
};
</script>
