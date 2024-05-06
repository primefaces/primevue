import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${dt('fileupload.border.color')};
    border-radius: ${dt('border.radius.md')};
    background: ${dt('fileupload.background')};
    color: ${dt('fileupload.color')};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 1.125rem;
    gap: 0.5rem;
}

.p-fileupload-content {
    border: 1px solid transparent;
    position: relative;
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 0.25rem;
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.125rem;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid ${dt('fileupload.file.border.color')};
    gap: 0.5rem;
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${dt('fileupload.content.highlight.border.color')};
    background: ${dt('fileupload.content.highlight.background')};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}
`;

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
    header: 'p-fileupload-header',
    pcChooseButton: 'p-fileupload-choose-button',
    pcUploadButton: 'p-fileupload-upload-button',
    pcCancelButton: 'p-fileupload-cancel-button',
    content: 'p-fileupload-content',
    fileList: 'p-fileupload-file-list',
    file: 'p-fileupload-file',
    fileThumbnail: 'p-fileupload-file-thumbnail',
    fileInfo: 'p-fileupload-file-info',
    fileName: 'p-fileupload-file-name',
    fileSize: 'p-fileupload-file-size',
    pcFileBadge: 'p-fileupload-file-badge',
    fileActions: 'p-fileupload-file-actions',
    pcFileRemoveButton: 'p-fileupload-file-remove-button'
};

export default BaseStyle.extend({
    name: 'fileupload',
    theme,
    classes
});
