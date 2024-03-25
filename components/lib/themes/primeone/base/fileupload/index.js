export default {
    css: ({ dt }) => `
.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.p-fileupload input[type="file"] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}

.p-fileupload-buttonbar {
    display: flex;
    flex-wrap: wrap;
    background: ${dt('fileupload.header.background')};
    padding: 1.125rem;
    border: 1px solid ${dt('fileupload.header.border.color')};
    color: ${dt('fileupload.header.color')};
    border-bottom: 0 none;
    border-top-right-radius: ${dt('rounded.base')};
    border-top-left-radius: ${dt('rounded.base')};
    gap: 0.5rem;
}

.p-fileupload-content {
    position: relative;
    background: ${dt('fileupload.content.background')};
    padding: 0 1.125rem 1.125rem 1.125rem;
    border: 1px solid ${dt('fileupload.content.border.color')};
    color: ${dt('fileupload.content.color')};
    border-bottom-right-radius: ${dt('rounded.base')};
    border-bottom-left-radius: ${dt('rounded.base')};
    border-top: 0 none;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 0.25rem;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    border: 1px solid ${dt('fileupload.file.border.color')};
    border-radius: ${dt('rounded.base')};
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.p-fileupload-file:last-child {
    margin-bottom: 0;
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

.p-fileupload-file-name {
    margin-bottom: 0.5rem;
}

.p-fileupload-file-size {
    margin-right: 0.5rem;
}

.p-fileupload-row > div {
    padding: 0.75rem 1rem;
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}
`
};
