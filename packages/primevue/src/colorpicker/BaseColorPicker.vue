<script>
import BaseEditableHolder from '@primevue/core/baseeditableholder';
import ColorPickerStyle from 'primevue/colorpicker/style';

export default {
    name: 'BaseColorPicker',
    extends: BaseEditableHolder,
    props: {
        defaultColor: {
            type: null,
            default: 'ff0000'
        },
        inline: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'hex'
        },
        tabindex: {
            type: String,
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        inputId: {
            type: String,
            default: null
        },
        panelClass: null,
        overlayClass: null
    },
    style: ColorPickerStyle,
    provide() {
        return {
            $pcColorPicker: this,
            $parentInstance: this
        };
    }
};
</script>
