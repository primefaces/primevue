<template>
    <pre :class="languageClass" ref="code"><code><slot></slot>
    </code></pre>
</template>

<script>
import Prism from 'prismjs';

export default {
    props: {
        lang: {
            type: String,
            default: 'markup'
        }
    },
    computed: {
        languageClass() {
            return 'language-' + this.lang;
        }
    },
    mounted() {
        Prism.highlightElement(this.$el.children[0]);
    }
};
</script>