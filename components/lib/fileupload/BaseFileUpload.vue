<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-fileupload-content {
    position: relative;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.p-button.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.p-fileupload-buttonbar {
    display: flex;
    flex-wrap: wrap;
}

.p-fileupload > input[type='file'],
.p-fileupload-basic input[type='file'] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}
`;

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
    buttonbar: 'p-fileupload-buttonbar',
    chooseButton: ({ instance, props }) => [
        'p-button p-component p-fileupload-choose',
        {
            'p-fileupload-choose-selected': props.mode === 'basic' && instance.hasFiles,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    chooseIcon: 'p-button-icon p-button-icon-left',
    chooseButtonLabel: 'p-button-label',
    content: 'p-fileupload-content',
    empty: 'p-fileupload-empty',
    uploadIcon: 'p-button-icon p-button-icon-left',
    label: 'p-button-label',
    file: 'p-fileupload-file',
    thumbnail: 'p-fileupload-file-thumbnail',
    details: 'p-fileupload-file-details',
    fileName: 'p-fileupload-file-name',
    fileSize: 'p-fileupload-file-size',
    badge: 'p-fileupload-file-badge',
    actions: 'p-fileupload-file-actions',
    removeButton: 'p-fileupload-file-remove'
};

const { load: loadStyle } = useStyle(styles, { name: 'fileupload', manual: true });

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
        class: null
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
