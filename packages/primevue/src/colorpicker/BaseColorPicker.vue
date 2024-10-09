<script>
import BaseComponent from '@primevue/core/basecomponent';
import ColorPickerStyle from 'primevue/colorpicker/style';

export default {
    name: 'BaseColorPicker',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: null,
            default: null
        },
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
        disabled: {
            type: Boolean,
            default: false
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
