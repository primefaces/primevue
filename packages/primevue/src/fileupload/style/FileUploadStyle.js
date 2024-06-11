import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${dt('fileupload.border.color')};
    border-radius: ${dt('fileupload.border.radius')};
    background: ${dt('fileupload.background')};
    color: ${dt('fileupload.color')};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${dt('fileupload.header.padding')};
    background: ${dt('fileupload.header.background')};
    color: ${dt('fileupload.header.color')};
    border-style: solid;
    border-width: ${dt('fileupload.header.border.width')};
    border-color: ${dt('fileupload.header.border.color')};
    border-radius: ${dt('fileupload.header.border.radius')};
    gap: ${dt('fileupload.header.gap')};
}

.p-fileupload-content {
    border: 1px solid transparent;
    position: relative;
    transition: border-color ${dt('fileupload.transition.duration')};
    padding: ${dt('fileupload.content.padding')};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: ${dt('fileupload.progressbar.height')};
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
    padding: ${dt('fileupload.file.padding')};
    border-bottom: 1px solid ${dt('fileupload.file.border.color')};
    gap: ${dt('fileupload.file.gap')};
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${dt('fileupload.file.info.gap')};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${dt('fileupload.content.highlight.border.color')};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${dt('fileupload.basic.gap')};
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
