const FileUploadProps = [
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the request parameter to identify the files at backend.'
    },
    {
        name: 'url',
        type: 'string',
        default: 'null',
        description: 'Remote url to upload the files.'
    },
    {
        name: 'mode',
        type: 'string',
        default: 'advanced',
        description: 'Defines the UI of the component, possible values are "advanced" and "basic".'
    },
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Used to select multiple files at once from file dialog.'
    },
    {
        name: 'accept',
        type: 'string',
        default: 'null',
        description: 'Pattern to restrict the allowed file types such as "image/*".'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the upload functionality.'
    },
    {
        name: 'auto',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, upload begins automatically after selection is completed.'
    },
    {
        name: 'maxFileSize',
        type: 'number',
        default: 'null',
        description: 'Maximum file size allowed in bytes.'
    },
    {
        name: 'invalidFileSizeMessage',
        type: 'string',
        default: '"{0}: Invalid file size, file size should be smaller than {1}."',
        description: 'Message of the invalid fize size.'
    },
    {
        name: 'invalidFileLimitMessage',
        type: 'string',
        default: 'Maximum number of files exceeded, limit is {0} at most.',
        description: 'Message to display when number of files to be uploaded exceeeds the limit.'
    },
    {
        name: 'fileLimit',
        type: 'number',
        default: 'null',
        description: 'Maximum number of files that can be uploaded.'
    },
    {
        name: 'withCredentials',
        type: 'boolean',
        default: 'false',
        description: 'Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.'
    },
    {
        name: 'previewWidth',
        type: 'number',
        default: '50',
        description: 'Width of the image thumbnail in pixels.'
    },
    {
        name: 'chooseLabel',
        type: 'string',
        default: 'null',
        description: 'Label of the choose button. Defaults to PrimeVue Locale configuration.'
    },
    {
        name: 'uploadLabel',
        type: 'string',
        default: 'Upoad',
        description: 'Label of the upload button. Defaults to PrimeVue Locale configuration.'
    },
    {
        name: 'cancelLabel',
        type: 'string',
        default: 'Cancel',
        description: 'Label of the cancel button. Defaults to PrimeVue Locale configuration.'
    },
    {
        name: 'customUpload',
        type: 'boolean',
        default: 'false',
        description: 'Whether to use the default upload or a manual implementation defined in uploadHandler callback.'
    },
    {
        name: 'showUploadButton',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the upload button.'
    },
    {
        name: 'showCancelButton',
        type: 'boolean',
        default: 'true',
        description: 'Whether to cancel the upload button.'
    },
    {
        name: 'chooseIcon',
        type: 'string',
        default: 'pi pi-plus',
        description: 'Icon of the choose button.'
    },
    {
        name: 'uploadIcon',
        type: 'string',
        default: 'pi pi-upload',
        description: 'Icon of the upload button.'
    },
    {
        name: 'cancelIcon',
        type: 'string',
        default: 'pi pi-times',
        description: 'Icon of the cancel button.'
    },
    {
        name: 'style',
        type: 'any',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'class',
        type: 'string',
        default: 'null',
        description: 'Style class of the component.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const FileUploadEvents = [
    {
        name: 'before-upload',
        description: 'Callback to invoke before file upload begins to customize the request such as post parameters before the files.',
        arguments: [
            {
                name: 'event.xhr',
                type: 'object',
                description: 'XmlHttpRequest instance.'
            },
            {
                name: 'event.formData',
                type: 'object',
                description: 'FormData object.'
            }
        ]
    },
    {
        name: 'before-send',
        description: 'Callback to invoke before file send begins to customize the request such as adding headers.',
        arguments: [
            {
                name: 'event.xhr',
                type: 'object',
                description: 'XmlHttpRequest instance.'
            },
            {
                name: 'event.formData',
                type: 'object',
                description: 'FormData object.'
            }
        ]
    },
    {
        name: 'upload',
        description: 'Callback to invoke when file upload is complete.',
        arguments: [
            {
                name: 'event.xhr',
                type: 'object',
                description: 'XmlHttpRequest instance.'
            },
            {
                name: 'event.files',
                type: 'object',
                description: 'Uploaded files.'
            }
        ]
    },
    {
        name: 'error',
        description: 'Callback to invoke if file upload fails.',
        arguments: [
            {
                name: 'event.xhr',
                type: 'object',
                description: 'XmlHttpRequest instance.'
            },
            {
                name: 'event.files',
                type: 'object',
                description: 'Files that are not uploaded.'
            }
        ]
    },
    {
        name: 'clear',
        description: 'Callback to invoke when files in queue are removed without uploading.'
    },
    {
        name: 'select',
        description: 'Callback to invoke when file upload is complete.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original browser event.'
            },
            {
                name: 'event.files',
                type: 'object',
                description: 'List of selected files.'
            }
        ]
    },
    {
        name: 'progress',
        description: 'Callback to invoke when files are selected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original browser event.'
            },
            {
                name: 'event.progress',
                type: 'number',
                description: 'Calculated progress value.'
            }
        ]
    },
    {
        name: 'uploader',
        description: 'Callback to invoke to implement a custom upload.',
        arguments: [
            {
                name: 'event.files',
                type: 'object',
                description: 'List of selected files.'
            }
        ]
    },
    {
        name: 'remove',
        description: 'Callback to invoke when a singe file is removed from the list.',
        arguments: [
            {
                name: 'event.file',
                type: 'object',
                description: 'Removed file.'
            },
            {
                name: 'event.files',
                type: 'object',
                description: 'Remaining files to be uploaded.'
            }
        ]
    }
];

const FileUploadSlots = [
    {
        name: 'header',
        description: 'Custom header template.'
    },
    {
        name: 'content',
        description: 'Custom content template.'
    },
    {
        name: 'empty',
        description: 'Custom content when there is no selected file'
    },
    {
        name: 'chooseicon',
        description: 'Custom choose icon template.'
    },
    {
        name: 'uploadicon',
        description: 'Custom upload icon template.'
    },
    {
        name: 'cancelicon',
        description: 'Custom cancel icon template.'
    },
    {
        name: 'fileremoveicon',
        description: 'Custom remove icon template for each file.'
    }
];

module.exports = {
    fileupload: {
        name: 'FileUpload',
        description: 'FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.',
        props: FileUploadProps,
        events: FileUploadEvents,
        slots: FileUploadSlots
    }
};
