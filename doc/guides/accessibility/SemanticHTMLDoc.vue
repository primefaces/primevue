<template>
    <DocSectionText v-bind="$attrs">
        <p>
            HTML offers various element to organize content on a web page that screen readers are aware of. Preferring Semantic HTML for good semantics provide out of the box support for reader which is not possible when regular <i>div</i>
            elements with classes are used. Consider the following example that do not mean too much for readers.
        </p>
    </DocSectionText>

    <pre v-code><code>
&lt;div class="header"&gt;
    &lt;div class="header-text"&gt;Header&lt;/div&gt;
&lt;/div&gt;

&lt;div class="nav"&gt;&lt;/div&gt;

&lt;div class="main"&gt;
    &lt;div class="content"&gt;
    &lt;/div&gt;

    &lt;div class="sidebar"&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="footer"&gt;
&lt;/div&gt;

</code></pre>

    <div class="doc-section-description mt-4">
        <p>Same layout can be achieved using the semantic elements with screen reader support built-in.</p>
    </div>
    <pre v-code><code>
&lt;header&gt;
    &lt;h1&gt;Header&lt;/h1&gt;
&lt;/header&gt;

&lt;nav&gt;&lt;/nav&gt;

&lt;main&gt;
    &lt;article&gt;&lt;/article&gt;

    &lt;aside&gt;&lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
&lt;/footer&gt;

</code></pre>
</template>
