<template>
    <div>
        <div class="content-section documentation">
            <h1>FlexBox</h1>
            <p>Easily manage the layout of your components with the responsive FlexBox utilities.
</p>

            <h5>Flex Container</h5>
            <p>An element can configured as a flexbox container using the <i>p-d-flex</i> or <i>p-d-inline-flex</i> classes.</p>

<pre v-code><code>
&lt;div class="p-d-flex"&gt;Flex Container&lt;/div&gt;
&lt;div class="p-d-inline-flex"&gt;Inline Flex Container&lt;/div&gt;

</code></pre>

<div class="box p-d-flex p-mb-3">Flex Container</div>
<div class="box p-d-inline-flex">Inline Flex Container</div>

            <h5>Direction</h5>
            <p>Default is applied using the <i>p-flex-{direction}</i> class where direction can be either of the following.</p>
            <ul>
                <li>row (default)</li>
                <li>row-reverse</li>
                <li>column</li>
                <li>column-reverse</li>
            </ul>

            <h6>Row</h6>
<pre v-code><code>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2"&gt;Item 2&lt;/div&gt;
    &lt;div&gt;Item 3&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex">
                <div class="p-mr-2">Item 1</div>
                <div class="p-mr-2">Item 2</div>
                <div>Item 3</div>
            </div>

            <h6>Column</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-flex-column"&gt;
    &lt;div class="p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div&gt;Item 3&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-flex-column">
                <div class="p-mb-2">Item 1</div>
                <div class="p-mb-2">Item 2</div>
                <div>Item 3</div>
            </div>

            <h6>Responsive</h6>
            <p>Row direction for larger screens and column for smaller.</p>

<pre v-code><code>
&lt;div class="p-d-flex p-flex-column p-flex-md-row"&gt;
    &lt;div class="p-mb-2 p-mr-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mb-2 p-mr-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mb-2 p-mr-2"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;

</code></pre>

            <div class="p-d-flex p-flex-column p-flex-md-row">
                <div class="p-mb-2 p-mr-2">Item 1</div>
                <div class="p-mb-2 p-mr-2">Item 2</div>
                <div class="p-mb-2 p-mr-2">Item 3</div>
            </div>

            <h6>Direction Classes</h6>
            <ul>
                <li>p-flex-row</li>
                <li>p-flex-row-reverse</li>
                <li>p-flex-column</li>
                <li>p-flex-column-reverse</li>
                <li>p-flex-sm-row</li>
                <li>p-flex-sm-row-reverse</li>
                <li>p-flex-sm-column</li>
                <li>p-flex-sm-column-reverse</li>
                <li>p-flex-md-row</li>
                <li>p-flex-md-row-reverse</li>
                <li>p-flex-md-column</li>
                <li>p-flex-md-column-reverse</li>
                <li>p-flex-lg-row</li>
                <li>p-flex-lg-row-reverse</li>
                <li>p-flex-lg-column</li>
                <li>p-flex-lg-column-reverse</li>
                <li>p-flex-xl-row</li>
                <li>p-flex-xl-row-reverse</li>
                <li>p-flex-xl-column</li>
                <li>p-flex-xl-column-reverse</li>
            </ul>

            <h5>Order</h5>
            <p>Order configures the way in which they appear in the flex container. <i>p-order-{value}</i> format is used where value can be a number from 0 to 6.</p>

            <h6>Customized</h6>
<pre v-code><code>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2 p-order-3"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-order-1"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-order-2"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex">
                <div class="p-mr-2 p-order-3">Item 1</div>
                <div class="p-mr-2 p-order-1">Item 2</div>
                <div class="p-mr-2 p-order-2">Item 3</div>
            </div>

            <h6>Responsive</h6>
            <p>Orders change depending on the screen size.</p>
<pre v-code><code>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2 p-order-3 p-order-md-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-order-1 p-order-md-3"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-order-2 p-order-md-1"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;

</code></pre>

            <div class="p-d-flex">
                <div class="p-mr-2 p-order-3 p-order-md-2">Item 1</div>
                <div class="p-mr-2 p-order-1 p-order-md-3">Item 2</div>
                <div class="p-mr-2 p-order-2 p-order-md-1">Item 3</div>
            </div>

            <h6>Order Classes</h6>
            <ul>
                <li>p-order-0</li>
                <li>p-order-1</li>
                <li>p-order-2</li>
                <li>p-order-3</li>
                <li>p-order-4</li>
                <li>p-order-5</li>
                <li>p-order-6</li>
                <li>p-order-sm-0</li>
                <li>p-order-sm-1</li>
                <li>p-order-sm-2</li>
                <li>p-order-sm-3</li>
                <li>p-order-sm-4</li>
                <li>p-order-sm-5</li>
                <li>p-order-sm-6</li>
                <li>p-order-md-0</li>
                <li>p-order-md-1</li>
                <li>p-order-md-2</li>
                <li>p-order-md-3</li>
                <li>p-order-md-4</li>
                <li>p-order-md-5</li>
                <li>p-order-md-6</li>
                <li>p-order-lg-0</li>
                <li>p-order-lg-1</li>
                <li>p-order-lg-2</li>
                <li>p-order-lg-3</li>
                <li>p-order-lg-4</li>
                <li>p-order-lg-5</li>
                <li>p-order-lg-6</li>
                <li>p-order-xl-0</li>
                <li>p-order-xl-1</li>
                <li>p-order-xl-2</li>
                <li>p-order-xl-3</li>
                <li>p-order-xl-4</li>
                <li>p-order-xl-5</li>
                <li>p-order-xl-6</li>
            </ul>

            <h5>Wrap</h5>
            <p>Flex wrap defines the wrap behavior when there is not enough space in the container. The format of the class is <i>p-flex-{value}</i> and the value field can be either of the
            listed alternatives.</p>

            <ul>
                <li>nowrap (default)</li>
                <li>wrap</li>
                <li>wrap-reverse</li>
            </ul>

            <h6>No Wrap</h6>
<pre v-code><code>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 3&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 4&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 5&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 6&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex">
                <div class="p-mr-2 p-mb-2">Item 1</div>
                <div class="p-mr-2 p-mb-2">Item 2</div>
                <div class="p-mr-2 p-mb-2">Item 3</div>
                <div class="p-mr-2 p-mb-2">Item 4</div>
                <div class="p-mr-2 p-mb-2">Item 5</div>
                <div class="p-mr-2 p-mb-2">Item 6</div>
            </div>

            <h6>Wrap</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-flex-wrap"&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 3&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 4&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 5&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 6&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-flex-wrap">
                <div class="p-mr-2 p-mb-2">Item 1</div>
                <div class="p-mr-2 p-mb-2">Item 2</div>
                <div class="p-mr-2 p-mb-2">Item 3</div>
                <div class="p-mr-2 p-mb-2">Item 4</div>
                <div class="p-mr-2 p-mb-2">Item 5</div>
                <div class="p-mr-2 p-mb-2">Item 6</div>
            </div>

            <h6>Wrap Reverse</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-flex-wrap-reverse"&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 3&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 4&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 5&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 6&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-flex-wrap-reverse">
                <div class="p-mr-2 p-mb-2">Item 1</div>
                <div class="p-mr-2 p-mb-2">Item 2</div>
                <div class="p-mr-2 p-mb-2">Item 3</div>
                <div class="p-mr-2 p-mb-2">Item 4</div>
                <div class="p-mr-2 p-mb-2">Item 5</div>
                <div class="p-mr-2 p-mb-2">Item 6</div>
            </div>

            <h6>Wrap Classes</h6>
            <ul>
                <li>p-flex-nowrap</li>
                <li>p-flex-wrap</li>
                <li>p-flex-wrap-reverse</li>
                <li>p-flex-sm-nowrap</li>
                <li>p-flex-sm-wrap</li>
                <li>p-flex-sm-wrap-reverse</li>
                <li>p-flex-md-nowrap</li>
                <li>p-flex-md-wrap</li>
                <li>p-flex-md-wrap-reverse</li>
                <li>p-flex-lg-nowrap</li>
                <li>p-flex-lg-wrap</li>
                <li>p-flex-lg-wrap-reverse</li>
                <li>p-flex-xl-nowrap</li>
                <li>p-flex-xl-wrap</li>
                <li>p-flex-xl-wrap-reverse</li>
            </ul>

            <h5>Justify Content</h5>
            <p>Justify content is the alignment along the main axis and defined using the <i>p-jc-{value}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
            <ul>
                <li>start</li>
                <li>end</li>
                <li>center</li>
                <li>between</li>
                <li>around</li>
                <li>evenly</li>
            </ul>

            <h6>Between</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-jc-between"&gt;
    &lt;div&gt;Item 1&lt;/div&gt;
    &lt;div&gt;Item 2&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-jc-between">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>

            <h6>Center</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-jc-center"&gt;
    &lt;div class="p-mr-2"&gt;Item 1&lt;/div&gt;
    &lt;div&gt;Item 2&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-jc-center">
                <div class="p-mr-2">Item 1</div>
                <div>Item 2</div>
            </div>

            <h6>Justify Content Classes</h6>
            <ul>
                <li>p-jc-start</li>
                <li>p-jc-end</li>
                <li>p-jc-center</li>
                <li>p-jc-between</li>
                <li>p-jc-around</li>
                <li>p-jc-evenly</li>
                <li>p-jc-sm-start</li>
                <li>p-jc-sm-end</li>
                <li>p-jc-sm-center</li>
                <li>p-jc-sm-between</li>
                <li>p-jc-sm-around</li>
                <li>p-jc-sm-evenly</li>
                <li>p-jc-md-start</li>
                <li>p-jc-md-end</li>
                <li>p-jc-md-center</li>
                <li>p-jc-md-between</li>
                <li>p-jc-md-around</li>
                <li>p-jc-md-evenly</li>
                <li>p-jc-lg-start</li>
                <li>p-jc-lg-end</li>
                <li>p-jc-lg-center</li>
                <li>p-jc-lg-between</li>
                <li>p-jc-lg-around</li>
                <li>p-jc-lg-evenly</li>
                <li>p-jc-xl-start</li>
                <li>p-jc-xl-end</li>
                <li>p-jc-xl-center</li>
                <li>p-jc-xl-between</li>
                <li>p-jc-xl-around</li>
                <li>p-jc-xl-evenly</li>
            </ul>

            <h5>Align Items</h5>
            <p>Align Items configuration is the alignment along the cross axis and defined using the <i>p-ai-{value}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
            <ul>
                <li>start</li>
                <li>end</li>
                <li>center</li>
                <li>baseline</li>
                <li>stretch (default)</li>
            </ul>

            <h6>Start</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-ai-start"&gt;
    &lt;div class="p-mr-2" style="height:100px"&gt;Item 1&lt;/div&gt;
    &lt;div style="height:50px"&gt;Item 2&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-ai-start">
                <div class="p-mr-2" style="height:100px">Item 1</div>
                <div style="height:50px">Item 2</div>
            </div>

            <h6>Center</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-ai-center"&gt;
    &lt;div class="p-mr-2" style="height:100px"&gt;Item 1&lt;/div&gt;
    &lt;div style="height:50px"&gt;Item 2&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-ai-center">
                <div class="p-mr-2" style="height:100px">Item 1</div>
                <div style="height:50px">Item 2</div>
            </div>

            <h6>Align Items Classes</h6>
            <ul>
                <li>p-ai-start</li>
                <li>p-ai-end</li>
                <li>p-ai-center</li>
                <li>p-ai-baseline</li>
                <li>p-ai-strech</li>
                <li>p-ai-sm-start</li>
                <li>p-ai-sm-end</li>
                <li>p-ai-sm-center</li>
                <li>p-ai-sm-baseline</li>
                <li>p-ai-sm-strech</li>
                <li>p-ai-md-start</li>
                <li>p-ai-md-end</li>
                <li>p-ai-md-center</li>
                <li>p-ai-md-baseline</li>
                <li>p-ai-md-strech</li>
                <li>p-ai-lg-start</li>
                <li>p-ai-lg-end</li>
                <li>p-ai-lg-center</li>
                <li>p-ai-lg-baseline</li>
                <li>p-ai-lg-strech</li>
                <li>p-ai-xl-start</li>
                <li>p-ai-xl-end</li>
                <li>p-ai-xl-center</li>
                <li>p-ai-xl-baseline</li>
                <li>p-ai-xl-strech</li>
            </ul>

            <h5>Align Self</h5>
            <p>Align self configuration is the alignment along the cross axis for a particular element and defined using the <i>p-as-{value}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
            <ul>
                <li>start</li>
                <li>end</li>
                <li>center</li>
                <li>baseline</li>
                <li>stretch (default)</li>
            </ul>

<pre v-code><code>
&lt;div class="p-d-flex" style="height: 150px;"&gt;
    &lt;div class="p-mr-2 p-as-start"&gt;Start&lt;/div&gt;
    &lt;div class="p-mr-2 p-as-center"&gt;Center&lt;/div&gt;
    &lt;div class="p-mr-2 p-as-end"&gt;End&lt;/div&gt;
    &lt;div class="p-mr-2 p-as-stretch"&gt;Stretch&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex" style="height: 150px;">
                <div class="p-mr-2 p-as-start">Start</div>
                <div class="p-mr-2 p-as-center">Center</div>
                <div class="p-mr-2 p-as-end">End</div>
                <div class="p-mr-2 p-as-stretch">Stretch</div>
            </div>

            <h6>Align Items Classes</h6>
            <ul>
                <li>p-as-start</li>
                <li>p-as-end</li>
                <li>p-as-center</li>
                <li>p-as-baseline</li>
                <li>p-as-strech</li>
                <li>p-as-sm-start</li>
                <li>p-as-sm-end</li>
                <li>p-as-sm-center</li>
                <li>p-as-sm-baseline</li>
                <li>p-as-sm-strech</li>
                <li>p-as-md-start</li>
                <li>p-as-md-end</li>
                <li>p-as-md-center</li>
                <li>p-as-md-baseline</li>
                <li>p-as-md-strech</li>
                <li>p-as-lg-start</li>
                <li>p-as-lg-end</li>
                <li>p-as-lg-center</li>
                <li>p-as-lg-baseline</li>
                <li>p-as-lg-strech</li>
                <li>p-as-xl-start</li>
                <li>p-as-xl-end</li>
                <li>p-as-xl-center</li>
                <li>p-as-xl-baseline</li>
                <li>p-as-xl-strech</li>
            </ul>

            <h5>Align Content</h5>
            <p>Align content is the alignment along the cross axis and defined using the <i>p-ac-{value}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
            <ul>
                <li>start</li>
                <li>end</li>
                <li>center</li>
                <li>around</li>
                <li>stretch</li>
                <li>between</li>
            </ul>

            <h6>Align Content Classes</h6>
            <ul>
                <li>p-ac-start</li>
                <li>p-ac-end</li>
                <li>p-ac-center</li>
                <li>p-ac-around</li>
                <li>p-ac-stretch</li>
                <li>p-ac-between</li>
                <li>p-ac-sm-start</li>
                <li>p-ac-sm-end</li>
                <li>p-ac-sm-center</li>
                <li>p-ac-sm-around</li>
                <li>p-ac-sm-stretch</li>
                <li>p-ac-sm-between</li>
                <li>p-ac-md-start</li>
                <li>p-ac-md-end</li>
                <li>p-ac-md-center</li>
                <li>p-ac-md-around</li>
                <li>p-ac-md-stretch</li>
                <li>p-ac-md-between</li>
                <li>p-ac-lg-start</li>
                <li>p-ac-lg-end</li>
                <li>p-ac-lg-center</li>
                <li>p-ac-lg-around</li>
                <li>p-ac-lg-stretch</li>
                <li>p-ac-lg-between</li>
                <li>p-ac-xl-start</li>
                <li>p-ac-xl-end</li>
                <li>p-ac-xl-center</li>
                <li>p-ac-xl-around</li>
                <li>p-ac-xl-stretch</li>
                <li>p-ac-xl-between</li>
            </ul>

            <h5>Margin with FlexBox</h5>
            <p>When combined with <router-link to="/spacing">spacing utilities</router-link>, flexbox offers endless possibilities.</p>
            <h6>Horizontal Spacing</h6>

<pre v-code><code>
&lt;div class="p-d-flex p-p-3 card"&gt;
    &lt;Button type="Button" icon="pi pi-check" class="p-mr-2" /&gt;
    &lt;Button type="Button" icon="pi pi-trash" class="p-button-danger"/&gt;
    &lt;Button type="Button" icon="pi pi-search" class="p-ml-auto p-button-help"/&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-p-3 card">
                <Button type="Button" icon="pi pi-check" class="p-mr-2" />
                <Button type="Button" icon="pi pi-trash" class="p-button-danger"/>
                <Button type="Button" icon="pi pi-search" class="p-ml-auto p-button-help"/>
            </div>

            <h6>Vertical Spacing</h6>
<pre v-code><code>
&lt;div class="p-d-flex p-flex-column" style="height:150px"&gt;
    &lt;div&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mt-auto"&gt;Item 2&lt;/div&gt;
&lt;/div&gt;

</code></pre>
            <div class="p-d-flex p-flex-column" style="height:150px">
                <div>Item 1</div>
                <div class="p-mt-auto">Item 2</div>
            </div>

            <h5>Dependencies</h5>
            <p>PrimeFlex 2.0.0.</p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.p-d-flex > div,
.box {
    background-color: var(--surface-e);
    text-align: center;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

.p-d-flex > div {
    width: 8rem;
}
</style>