<template>
    <div>
        <div class="content-section documentation">
            <h1>FlexBox</h1>
            <p>Easily manage the layout of your components with the responsive FlexBox utilities.</p>

            <h5>Flex Container</h5>
            <p>An element can configured as a flexbox container using the <i>p-d-flex</i> or <i>p-d-inline-flex</i> classes.</p>

<CodeHighlight>
&lt;div class="p-d-flex"&gt;Flex Container&lt;/div&gt;
&lt;div class="p-d-inline-flex"&gt;Inline Flex Container&lt;/div&gt;
</CodeHighlight>

<div class="box p-d-flex p-mb-3">Flex Container</div>
<div class="box p-d-inline-flex">Inline Flex Container</div>

            <h5>Direction</h5>
            <p>Default is applied using the <i>p-flex-{direction}</i> class where direction can either of the following.</p>
            <ul>
                <li>row (default)</li>
                <li>row-reverse</li>
                <li>column</li>
                <li>column-reverse</li>
            </ul>

            <h6>Row</h6>
<CodeHighlight>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2"&gt;Item 2&lt;/div&gt;
    &lt;div&gt;Item 3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
            <div class="p-d-flex">
                <div class="p-mr-2">Item 1</div>
                <div class="p-mr-2">Item 2</div>
                <div>Item 3</div>
            </div>

            <h6>Column</h6>
<CodeHighlight>
&lt;div class="p-d-flex p-flex-column"&gt;
    &lt;div class="p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div&gt;Item 3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
            <div class="p-d-flex p-flex-column">
                <div class="p-mb-2">Item 1</div>
                <div class="p-mb-2">Item 2</div>
                <div>Item 3</div>
            </div>

            <h6>Responsive</h6>
            <p>Row direction for larger screens and column for smaller.</p>

<CodeHighlight>
&lt;div class="p-d-flex p-flex-column p-flex-md-row"&gt;
    &lt;div class="p-mb-2 p-mr-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mb-2 p-mr-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mb-2 p-mr-2"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
            
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
            <p>Order configures the way in which they appear in the flex container.</p>
            
            <h6>Customized</h6>
<CodeHighlight>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2 p-order-3"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-order-1"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-order-2"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
            <div class="p-d-flex">
                <div class="p-mr-2 p-order-3">Item 1</div>
                <div class="p-mr-2 p-order-1">Item 2</div>
                <div class="p-order-2">Item 3</div>
            </div>

            <h6>Responsive</h6>
<CodeHighlight>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2 p-order-3 p-order-md-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-order-1 p-order-md-3"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-order-2 p-order-md-1"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
            <p>Orders change depending on the screen size.</p>
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
            <p>Flex wrap defines the wrap behavior when there is not enough space in the container.</p>
            
            <h6>No Wrap</h6>
<CodeHighlight>
&lt;div class="p-d-flex"&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 3&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 4&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 5&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 6&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
            <div class="p-d-flex">
                <div class="p-mr-2 p-mb-2">Item 1</div>
                <div class="p-mr-2 p-mb-2">Item 2</div>
                <div class="p-mr-2 p-mb-2">Item 3</div>
                <div class="p-mr-2 p-mb-2">Item 4</div>
                <div class="p-mr-2 p-mb-2">Item 5</div>
                <div class="p-mr-2 p-mb-2">Item 6</div>
            </div>

            <h6>Wrap</h6>
<CodeHighlight>
&lt;div class="p-d-flex p-flex-wrap"&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 3&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 4&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 5&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 6&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
            <div class="p-d-flex p-flex-wrap">
                <div class="p-mr-2 p-mb-2">Item 1</div>
                <div class="p-mr-2 p-mb-2">Item 2</div>
                <div class="p-mr-2 p-mb-2">Item 3</div>
                <div class="p-mr-2 p-mb-2">Item 4</div>
                <div class="p-mr-2 p-mb-2">Item 5</div>
                <div class="p-mr-2 p-mb-2">Item 6</div>
            </div>

            <h6>Wrap Reverse</h6>
<CodeHighlight>
&lt;div class="p-d-flex p-flex-wrap-reverse"&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 1&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 2&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 3&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 4&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 5&lt;/div&gt;
    &lt;div class="p-mr-2 p-mb-2"&gt;Item 6&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>
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