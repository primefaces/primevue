<script>
import BaseComponent from '@primevue/core/basecomponent';
import FileUploadStyle from 'primevue/fileupload/style';

export default {
    name: 'BaseFileUpload',
    extends: BaseComponent,
    props: {
        name: {
            type: String,
            default: null
        },
        url: {
            type: String,
            default: null
        },
        mode: {
            type: String,
            default: 'advanced'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        accept: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        auto: {
            type: Boolean,
            default: false
        },
        maxFileSize: {
            type: Number,
            default: null
        },
        invalidFileSizeMessage: {
            type: String,
            default: '{0}: Invalid file size, file size should be smaller than {1}.'
        },
        invalidFileTypeMessage: {
            type: String,
            default: '{0}: Invalid file type, allowed file types: {1}.'
        },
        fileLimit: {
            type: Number,
            default: null
        },
        invalidFileLimitMessage: {
            type: String,
            default: 'Maximum number of files exceeded, limit is {0} at most.'
        },
        withCredentials: {
            type: Boolean,
            default: false
        },
        previewWidth: {
            type: Number,
            default: 50
        },
        chooseLabel: {
            type: String,
            default: null
        },
        uploadLabel: {
            type: String,
            default: null
        },
        cancelLabel: {
            type: String,
            default: null
        },
        customUpload: {
            type: Boolean,
            default: false
        },
        showUploadButton: {
            type: Boolean,
            default: true
        },
        showCancelButton: {
            type: Boolean,
            default: true
        },
        chooseIcon: {
            type: String,
            default: undefined
        },
        uploadIcon: {
            type: String,
            default: undefined
        },
        cancelIcon: {
            type: String,
            default: undefined
        },
        style: null,
        class: null,
        chooseButtonProps: {
            type: null,
            default: null
        },
        uploadButtonProps: {
            type: Object,
            default() {
                return { severity: 'secondary' };
            }
        },
        cancelButtonProps: {
            type: Object,
            default() {
                return { severity: 'secondary' };
            }
        }
    },
    style: FileUploadStyle,
    provide() {
        return {
            $pcFileUpload: this,
            $parentInstance: this
        };
    }
};
</script>
