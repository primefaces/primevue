export default {
    css: `
.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.p-fileupload-choose input[type="file"] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}

.p-fileupload-buttonbar {
    display: flex;
    flex-wrap: wrap;
    background: var(--p-fileupload-header-background);
    padding: 1.125rem;
    border: 1px solid var(--p-fileupload-header-border-color);
    color: var(--p-fileupload-header-text-color);
    border-bottom: 0 none;
    border-top-right-radius: var(--p-rounded-base);
    border-top-left-radius: var(--p-rounded-base);
    gap: 0.5rem;
}

.p-fileupload-content {
    position: relative;
    background: var(--p-fileupload-content-background);
    padding: 0 1.125rem 1.125rem 1.125rem;
    border: 1px solid var(--p-fileupload-content-border-color);
    color: var(--p-fileupload-content-text-color);
    border-bottom-right-radius: var(--p-rounded-base);
    border-bottom-left-radius: var(--p-rounded-base);
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
    border: 1px solid var(--p-fileupload-file-border-color);
    border-radius: var(--p-rounded-base);
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
    border: 1px dashed var(--p-fileupload-highlight-border-color-highlight);
    background-color: var(--p-fileupload-highlight-background-highlight);
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
