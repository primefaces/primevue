<script>
import BaseComponent from 'primevue/basecomponent';
import EditorStyle from 'primevue/editor/style';

export default {
    name: 'BaseEditor',
    extends: BaseComponent,
    props: {
        modelValue: String,
        placeholder: String,
        readonly: Boolean,
        formats: Array,
        editorStyle: null,
        modules: null
    },
    style: EditorStyle,
    provide() {
        return {
            $parentInstance: this
        };
    },
    beforeMount() {
        EditorStyle.loadStyle({ nonce: this.$primevue?.config?.csp?.nonce });
    }
};
</script>
