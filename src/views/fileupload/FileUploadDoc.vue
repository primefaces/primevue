<template>
    <AppDoc name="FileUploadDemo" :sources="sources" github="fileupload/FileUploadDemo.vue">
        <h5>Import via Module</h5>
        <pre v-code.script><code>
import FileUpload from 'primevue/fileupload';

</code></pre>

        <h5>Import via CDN</h5>
        <pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/fileupload/fileupload.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>Getting Started</h5>
        <p>FileUpload requires a <i>url</i> property as the upload target and a <i>name</i> to identify the files at backend.</p>
        <pre v-code><code>
&lt;FileUpload name="demo[]" url="./upload" /&gt;

</code></pre>

        <h5>Multiple Uploads</h5>
        <p>Only one file can be selected at a time by default, to allow selecting multiple files at once enable <i>multiple</i> option.</p>
        <pre v-code><code>
&lt;FileUpload name="demo[]" url="./upload" :multiple="true" /&gt;

</code></pre>

        <h5>Basic UI</h5>
        <p>FileUpload basic mode provides a simpler UI as an alternative to advanced mode.</p>
        <pre v-code><code>
&lt;FileUpload mode="basic" name="demo[]" url="./upload" /&gt;

</code></pre>

        <h5>DragDrop</h5>
        <p>File selection can also be done by dragging and dropping from the filesystem to the content section of the component.</p>

        <h5>Auto Uploads</h5>
        <p>When <i>auto</i> property is enabled, upload begins as soon as file selection is completed or a file is dropped on the drop area.</p>
        <pre v-code><code>
&lt;FileUpload mode="basic" name="demo[]" url="./upload" :auto="true" /&gt;

</code></pre>

        <h5>File Types</h5>
        <p>Selectable file types can be restricted with <i>accept</i> property, example below only allows images to be uploaded. Read more about other possible values <a href="https://www.w3schools.com/tags/att_input_accept.asp"> here</a>.</p>
        <pre v-code><code>
&lt;FileUpload mode="basic" name="demo[]" url="./upload" accept="image/*" /&gt;

</code></pre>

        <h5>File Size and File Limit</h5>
        <p>Maximium file size can be restricted using <i>maxFileSize</i> property defined in bytes. Similarly <i>fileLimit</i> is available to restrict the number of files to be uploaded.</p>
        <pre v-code><code>
&lt;FileUpload name="demo[]" url="./upload" :maxFileSize="1000000" :fileLimit="3" /&gt;

</code></pre>

        <p>In order to customize the default messages use <i>invalidFileSizeMessage</i> and <i>invalidFileLimitMessage</i> options where &#123;0&#125; placeholder refers to the filename and &#123;1&#125; the file size.</p>
        <ul>
            <li>invalidFileSizeMessage: '&#123;0&#125;: Invalid file size, file size should be smaller than &#123;1&#125;.'</li>
            <li>invalidFileLimitMessage: 'Maximum number of files exceeded, limit is &#123;0&#125; at most.'</li>
        </ul>

        <h5>Request Customization</h5>
        <p>XHR request to upload the files can be customized using the before-upload callback that passes the xhr instance and FormData object as event parameters.</p>

        <h5>Custom Upload</h5>
        <p>Uploading implementation can be overridden by enabling <i>customMode</i> property and defining a custom upload handler event.</p>
        <pre v-code><code>
&lt;FileUpload name="demo[]" :customUpload="true" @uploader="myUploader" /&gt;

</code></pre>

        <pre v-code.script><code>
myUploader(event) {
    //event.files == files to upload
}

</code></pre>

        <h5>Templating</h5>
        <p>
            When there is no file selected, you may use the empty slot to display content. Also, content slot may be used to place custom content inside the content section which would be useful to implement a user interface to manage the uploaded
            files such as removing them.
        </p>
        <pre v-code><code>
&lt;FileUpload name="demo[]" url="./upload"&gt;
    &lt;template #content&gt;
        &lt;p&gt;Additional content.&lt;/p&gt;
    &lt;/template&gt;
    &lt;template #empty&gt;
        &lt;p&gt;Drag and drop files to here to upload.&lt;/p&gt;
    &lt;/template&gt;
&lt;/FileUpload&gt;

</code></pre>

        <h5>Properties</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Name of the request parameter to identify the files at backend.</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Remote url to upload the files.</td>
                    </tr>
                    <tr>
                        <td>mode</td>
                        <td>string</td>
                        <td>advanced</td>
                        <td>Defines the UI of the component, possible values are "advanced" and "basic".</td>
                    </tr>
                    <tr>
                        <td>multiple</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Used to select multiple files at once from file dialog.</td>
                    </tr>
                    <tr>
                        <td>accept</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Pattern to restrict the allowed file types such as "image/*".</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Disables the upload functionality.</td>
                    </tr>
                    <tr>
                        <td>auto</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, upload begins automatically after selection is completed.</td>
                    </tr>
                    <tr>
                        <td>maxFileSize</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Maximum file size allowed in bytes.</td>
                    </tr>
                    <tr>
                        <td>invalidFileSizeMessage</td>
                        <td>string</td>
                        <td>"&#123;0&#125;: Invalid file size, file size should be smaller than &#123;1&#125;."</td>
                        <td>Message of the invalid fize size.</td>
                    </tr>
                    <tr>
                        <td>invalidFileLimitMessage</td>
                        <td>string</td>
                        <td>Maximum number of files exceeded, limit is &#123;0&#125; at most.</td>
                        <td>Message to display when number of files to be uploaded exceeeds the limit.</td>
                    </tr>
                    <tr>
                        <td>fileLimit</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Maximum number of files that can be uploaded.</td>
                    </tr>
                    <tr>
                        <td>withCredentials</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.</td>
                    </tr>
                    <tr>
                        <td>previewWidth</td>
                        <td>number</td>
                        <td>50</td>
                        <td>Width of the image thumbnail in pixels.</td>
                    </tr>
                    <tr>
                        <td>chooseLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Label of the choose button. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>uploadLabel</td>
                        <td>string</td>
                        <td>Upload</td>
                        <td>Label of the upload button. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>cancelLabel</td>
                        <td>string</td>
                        <td>Cancel</td>
                        <td>Label of the cancel button. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>customUpload</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>showUploadButton</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to show the upload button.</td>
                    </tr>
                    <tr>
                        <td>showCancelButton</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to show the cancel button.</td>
                    </tr>
                    <tr>
                        <td>chooseIcon</td>
                        <td>string</td>
                        <td>pi pi-plus</td>
                        <td>Icon of the choose button.</td>
                    </tr>
                    <tr>
                        <td>uploadIcon</td>
                        <td>string</td>
                        <td>pi pi-upload</td>
                        <td>Icon of the upload button.</td>
                    </tr>
                    <tr>
                        <td>cancelIcon</td>
                        <td>string</td>
                        <td>pi pi-times</td>
                        <td>Icon of the cancel button.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the component.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
        <div classe="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>before-upload</td>
                        <td>
                            event.xhr: XmlHttpRequest instance. <br />
                            event.formData: FormData object.
                        </td>
                        <td>Callback to invoke before file upload begins to customize the request such as post parameters before the files.</td>
                    </tr>
                    <tr>
                        <td>before-send</td>
                        <td>
                            event.xhr: XmlHttpRequest instance. <br />
                            event.formData: FormData object.
                        </td>
                        <td>Callback to invoke before file send begins to customize the request such as adding headers.</td>
                    </tr>
                    <tr>
                        <td>upload</td>
                        <td>
                            event.xhr: XmlHttpRequest instance.<br />
                            event.files: Uploaded files.
                        </td>
                        <td>Callback to invoke when file upload is complete.</td>
                    </tr>
                    <tr>
                        <td>error</td>
                        <td>
                            event.xhr: XmlHttpRequest instance.<br />
                            event.files: Files that are not uploaded.
                        </td>
                        <td>Callback to invoke if file upload fails.</td>
                    </tr>
                    <tr>
                        <td>clear</td>
                        <td>-.</td>
                        <td>Callback to invoke when files in queue are removed without uploading.</td>
                    </tr>
                    <tr>
                        <td>select</td>
                        <td>
                            event.originalEvent: Original browser event. <br />
                            event.files: List of selected files.
                        </td>
                        <td>Callback to invoke when files are selected.</td>
                    </tr>
                    <tr>
                        <td>progress</td>
                        <td>
                            event.originalEvent: Original browser event. <br />
                            event.progress: Calculated progress value.
                        </td>
                        <td>Callback to invoke when files are being uploaded.</td>
                    </tr>
                    <tr>
                        <td>uploader</td>
                        <td>event.files: List of selected files.</td>
                        <td>Callback to invoke to implement a custom upload.</td>
                    </tr>
                    <tr>
                        <td>remove</td>
                        <td>
                            event.file: Removed file. <br />
                            event.files: Remaining files to be uploaded.
                        </td>
                        <td>Callback to invoke when a singe file is removed from the list.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Slots</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>header</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>fileContent</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>empty</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Styling</h5>
        <p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-fileupload</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-fileupload-buttonbar</td>
                        <td>Header containing the buttons.</td>
                    </tr>
                    <tr>
                        <td>p-fileupload-content</td>
                        <td>Content section.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Dependencies</h5>
        <p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
		<Toast />

        <h5>Advanced</h5>
        <FileUpload name="demo[]" url="https://www.primefaces.org/upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/:maxFileSize="1000000">
            <template #content>
                <ul v-if="uploadedFiles && uploadedFiles[0]">
                    <li v-for="file of uploadedFiles[0]" :key="file">{{ file.name }} - {{ file.size }} bytes</li>
                </ul>
            </template>
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>

        <h5>Templating</h5>
        <FileUpload name="demo[]" url="https://www.primefaces.org/upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/:maxFileSize="1000000" @select="onSelectedFiles">
            <template #header="{ uploadDisabled, cancelDisabled, choose, upload, clear }">
                <div class="flex justify-content-between align-items-center">
                    <div>
                        <button @click="choose()" class="p-button p-fileupload-choose p-component p-button-icon-only custom-choose-btn p-button-rounded p-button-outlined">
                            <span class="p-button-icon p-button-icon-left p-clickable pi pi-fw pi-images"></span>
                        </button>
                        <button @click="upload()" type="button" class="p-button p-component custom-upload-btn p-button-success p-button-rounded p-button-outlined p-button-icon-only" :disabled="uploadDisabled">
                            <span class="p-button-icon p-c pi pi-fw pi-cloud-upload"></span>
                        </button>
                        <button @click="onClearTemplatingUpload(clear)" type="button" class="p-button p-component custom-cancel-btn p-button-danger p-button-rounded p-button-outlined p-button-icon-only" :disabled="cancelDisabled">
                            <span class="p-button-icon p-c pi pi-fw pi-times"></span>
                        </button>
                    </div>
                    <ProgressBar v-if="totalSizePercent > 100" :value="100" class="custom-progress-bar" style="width: 300px; height: 20px; margin-left: auto">{{ totalSize }}B / 1Mb</ProgressBar>
                    <ProgressBar v-else-if="totalSizePercent <= 100 && totalSizePercent !== 0" :value="totalSizePercent" style="width: 300px; height: 20px; margin-left: auto">{{ totalSize }}B / 1Mb</ProgressBar>
                </div>
            </template>
            <template #fileContent="{ files, uploadedFiles, onUploadedFileRemove, onFileRemove }">
                <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="grid p-5">
                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border align-items-center">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                            </div>

                            <div class="mt-2 flex align-content-center">
                                <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                            </div>
                            <div class="mt-3">{{ formatSize(file.size) }}</div>
                            <Badge value="Pending" class="mt-3" severity="warning" />
                            <div class="mt-3">
                                <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, onFileRemove, index)" class="p-button-text p-button-secondary" />
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="grid p-5">
                        <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border align-items-center">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                            </div>
                            <div class="mt-2 flex align-content-center">
                                <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                            </div>
                            <div class="mt-3">{{ formatSize(file.size) }}</div>
                            <Badge value="Completed" class="mt-3" severity="success" />

                            <div class="mt-3">
                                <Button icon="pi pi-times" @click="onUploadedFileRemove(index)" class="p-button-text p-button-secondary" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #empty>
                <div class="flex align-items-center justify-content-center flex-column">
                    <i class="pi pi-cloud-upload border-1 border-circle border-solid surface-border p-5 text-8xl text-500" />
                    <p class="mt-4">Drag and drop files to here to upload.</p>
                </div>
            </template>
        </FileUpload>

        <h5>Basic</h5>
        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />

        <h5>Basic with Auto</h5>
        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            uploadedFiles: [],
            files: [],
            totalSize: 0,
            totalSizePercent: 0
        };
    },
    methods: {
        onRemoveTemplatingFile(file, onFileRemove, index) {
            onFileRemove(index);
            this.totalSize -= parseInt(this.formatSize(file.size));
            this.totalSizePercent = this.totalSize / 10;
        },
        onClearTemplatingUpload(clear) {
            clear();
            this.totalSize = 0;
            this.totalSizePercent = 0;
        },
        onSelectedFiles(event) {
            this.files = event.files;
            this.files.forEach((file) => {
                this.totalSize += parseInt(this.formatSize(file.size));
            });

            this.totalSizePercent = this.totalSize / 10;
        },
        onAdvancedUpload() {
            this.totalSize = 0;
            this.totalSizePercent = 0;
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        formatSize(bytes) {
            if (bytes === 0) {
                return '0 B';
            }

            let k = 1000,
                dm = 3,
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
    },
    components: {
        FileUploadDoc: FileUploadDoc
    }
};
<\\/script>

<style lang="scss" scoped>
    p {
        margin: 0;
    }
    .fileinput-file-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media (max-width: 1500px) {
        .fileinput-file-name {
            width: 100px;
        }
    }
    ::v-deep(.custom-progress-bar) {
        .p-progressbar-value {
            background-color: #f44336;
        }
    }
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
		<Toast />

        <h5>Advanced</h5>
        <FileUpload name="demo[]" url="https://www.primefaces.org/upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/:maxFileSize="1000000">
            <template #content>
                <ul v-if="uploadedFiles && uploadedFiles[0]">
                    <li v-for="file of uploadedFiles[0]" :key="file">{{ file.name }} - {{ file.size }} bytes</li>
                </ul>
            </template>
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>

        <h5>Templating</h5>
        <FileUpload name="demo[]" url="https://www.primefaces.org/upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/:maxFileSize="1000000" @select="onSelectedFiles">
            <template #header="{ uploadDisabled, cancelDisabled, choose, upload, clear }">
                <div class="flex justify-content-between align-items-center">
                    <div>
                        <button @click="choose()" class="p-button p-fileupload-choose p-component p-button-icon-only custom-choose-btn p-button-rounded p-button-outlined">
                            <span class="p-button-icon p-button-icon-left p-clickable pi pi-fw pi-images"></span>
                        </button>
                        <button @click="upload()" type="button" class="p-button p-component custom-upload-btn p-button-success p-button-rounded p-button-outlined p-button-icon-only" :disabled="uploadDisabled">
                            <span class="p-button-icon p-c pi pi-fw pi-cloud-upload"></span>
                        </button>
                        <button @click="onClearTemplatingUpload(clear)" type="button" class="p-button p-component custom-cancel-btn p-button-danger p-button-rounded p-button-outlined p-button-icon-only" :disabled="cancelDisabled">
                            <span class="p-button-icon p-c pi pi-fw pi-times"></span>
                        </button>
                    </div>
                    <ProgressBar v-if="totalSizePercent > 100" :value="100" class="custom-progress-bar" style="width: 300px; height: 20px; margin-left: auto">{{ totalSize }}B / 1Mb</ProgressBar>
                    <ProgressBar v-else-if="totalSizePercent <= 100 && totalSizePercent !== 0" :value="totalSizePercent" style="width: 300px; height: 20px; margin-left: auto">{{ totalSize }}B / 1Mb</ProgressBar>
                </div>
            </template>
            <template #fileContent="{ files, uploadedFiles, onUploadedFileRemove, onFileRemove }">
                <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="grid p-5">
                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border align-items-center">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                            </div>

                            <div class="mt-2 flex align-content-center">
                                <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                            </div>
                            <div class="mt-3">{{ formatSize(file.size) }}</div>
                            <Badge value="Pending" class="mt-3" severity="warning" />
                            <div class="mt-3">
                                <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, onFileRemove, index)" class="p-button-text p-button-secondary" />
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="grid p-5">
                        <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border align-items-center">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                            </div>
                            <div class="mt-2 flex align-content-center">
                                <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                            </div>
                            <div class="mt-3">{{ formatSize(file.size) }}</div>
                            <Badge value="Completed" class="mt-3" severity="success" />

                            <div class="mt-3">
                                <Button icon="pi pi-times" @click="onUploadedFileRemove(index)" class="p-button-text p-button-secondary" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #empty>
                <div class="flex align-items-center justify-content-center flex-column">
                    <i class="pi pi-cloud-upload border-1 border-circle border-solid surface-border p-5 text-8xl text-500" />
                    <p class="mt-4">Drag and drop files to here to upload.</p>
                </div>
            </template>
        </FileUpload>

        <h5>Basic</h5>
        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />

        <h5>Basic with Auto</h5>
        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
    </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

export default {
	setup() {
		const toast = useToast();
        const uploadedFile = ref([]);
        const files = ref([]);
        const totalSize = ref(0);
        const totalSizePercent = ref(0);
		const onUpload = () => {
            toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
        }
        const onRemoveTemplatingFile(file, onFileRemove, index) {
            onFileRemove(index);
            totalSize.value -= parseInt(this.formatSize(file.size));
            totalSizePercent.value = totalSize.value / 10;
        },
        const onClearTemplatingUpload = (clear) => {
            clear();
            totalSize.value = 0;
            totalSizePercent.value = 0;
        },
        const onSelectedFiles = (event) => {
            files.value = event.files;
            files.value.forEach((file) => {
                this.totalSize += parseInt(this.formatSize(file.size));
            });

            totalSizePercent.value = totalSize.value / 10;
        },

        const onAdvancedUpload = () => {
            totalSize.value = 0;
            totalSizePercent.value = 0;
            toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },

        const onUpload = () => {
            toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },

        const formatSize = (bytes) => {
            if (bytes === 0) {
                return '0 B';
            }

            let k = 1000,
                dm = 3,
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }


		return { onUpload };
	}
}
<\\/script>

<style lang="scss" scoped>
    p {
        margin: 0;
    }
    .fileinput-file-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media (max-width: 1500px) {
        .fileinput-file-name {
            width: 100px;
        }
    }
    ::v-deep(.custom-progress-bar) {
        .p-progressbar-value {
            background-color: #f44336;
        }
    }
</style>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/fileupload/fileupload.min.js"><\\/script>
			<script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
			<script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>`,
                    content: `<div id="app">
				<p-toast></p-toast>

                <h5>Advanced</h5>
                <p-fileupload name="demo[]" url="https://www.primefaces.org/upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/:maxFileSize="1000000">
                    <template #content>
                        <ul v-if="uploadedFiles && uploadedFiles[0]">
                            <li v-for="file of uploadedFiles[0]" :key="file">{{ file.name }} - {{ file.size }} bytes</li>
                        </ul>
                    </template>
                    <template #empty>
                        <p>Drag and drop files to here to upload.</p>
                    </template>
                </p-fileupload>

                <h5>Templating</h5>
                <p-fileupload name="demo[]" url="https://www.primefaces.org/upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/:maxFileSize="1000000"         @select="onSelectedFiles">
                    <template #header="{ uploadDisabled, cancelDisabled, choose, upload, clear }">
                        <div class="flex justify-content-between align-items-center">
                            <div>
                                <button @click="choose()" class="p-button p-fileupload-choose p-component p-button-icon-only custom-choose-btn p-button-rounded p-button-outlined">
                                    <span class="p-button-icon p-button-icon-left p-clickable pi pi-fw pi-images"></span>
                                </button>
                                <button @click="upload()" type="button" class="p-button p-component custom-upload-btn p-button-success p-button-rounded p-button-outlined         p-button-icon-only" :disabled="uploadDisabled">
                                    <span class="p-button-icon p-c pi pi-fw pi-cloud-upload"></span>
                                </button>
                                <button @click="onClearTemplatingUpload(clear)" type="button" class="p-button p-component custom-cancel-btn p-button-danger p-button-rounded         p-button-outlined p-button-icon-only" :disabled="cancelDisabled">
                                    <span class="p-button-icon p-c pi pi-fw pi-times"></span>
                                </button>
                            </div>
                            <ProgressBar v-if="totalSizePercent > 100" :value="100" class="custom-progress-bar" style="width: 300px; height: 20px; margin-left: auto">{{ totalSize }}        B / 1Mb</ProgressBar>
                            <ProgressBar v-else-if="totalSizePercent <= 100 && totalSizePercent !== 0" :value="totalSizePercent" style="width: 300px; height: 20px; margin-left:         auto">{{ totalSize }}B / 1Mb</ProgressBar>
                        </div>
                    </template>
                    <template #fileContent="{ files, uploadedFiles, onUploadedFileRemove, onFileRemove }">
                        <div v-if="files.length > 0">
                            <h5>Pending</h5>
                            <div class="grid p-5">
                                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border         align-items-center">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                                    </div>

                                    <div class="mt-2 flex align-content-center">
                                        <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                                    </div>
                                    <div class="mt-3">{{ formatSize(file.size) }}</div>
                                    <Badge value="Pending" class="mt-3" severity="warning" />
                                    <div class="mt-3">
                                        <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, onFileRemove, index)" class="p-button-text p-button-secondary" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="uploadedFiles.length > 0">
                            <h5>Completed</h5>
                            <div class="grid p-5">
                                <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border         align-items-center">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                                    </div>
                                    <div class="mt-2 flex align-content-center">
                                        <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                                    </div>
                                    <div class="mt-3">{{ formatSize(file.size) }}</div>
                                    <Badge value="Completed" class="mt-3" severity="success" />

                                    <div class="mt-3">
                                        <Button icon="pi pi-times" @click="onUploadedFileRemove(index)" class="p-button-text p-button-secondary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #empty>
                        <div class="flex align-items-center justify-content-center flex-column">
                            <i class="pi pi-cloud-upload border-1 border-circle border-solid surface-border p-5 text-8xl text-500" />
                            <p class="mt-4">Drag and drop files to here to upload.</p>
                        </div>
                    </template>
                </p-fileupload>

				<h5>Basic</h5>
				<p-fileupload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :max-file-size="1000000" @upload="onUpload"></p-fileupload>

				<h5>Basic with Auto</h5>
				<p-fileupload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :max-file-size="1000000" @upload="onUpload" :auto="true" choose-label="Browse"></p-fileupload>
			</div>

			<script type="module">
			const { createApp, ref } = Vue;
			const { useToast } = primevue.usetoast;

			const App = {
				setup() {
                    const toast = useToast();
                    const uploadedFile = ref([]);
                    const files = ref([]);
                    const totalSize = ref(0);
                    const totalSizePercent = ref(0);
                    const onUpload = () => {
                        toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
                    }
                    const onRemoveTemplatingFile(file, onFileRemove, index) {
                        onFileRemove(index);
                        totalSize.value -= parseInt(this.formatSize(file.size));
                        totalSizePercent.value = totalSize.value / 10;
                    },
                    const onClearTemplatingUpload = (clear) => {
                        clear();
                        totalSize.value = 0;
                        totalSizePercent.value = 0;
                    },
                    const onSelectedFiles = (event) => {
                        files.value = event.files;
                        files.value.forEach((file) => {
                            this.totalSize += parseInt(this.formatSize(file.size));
                        });

                        totalSizePercent.value = totalSize.value / 10;
                    },

                    const onAdvancedUpload = () => {
                        totalSize.value = 0;
                        totalSizePercent.value = 0;
                        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
                    },

                    const onUpload = () => {
                        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
                    },

                    const formatSize = (bytes) => {
                        if (bytes === 0) {
                            return '0 B';
                        }

                        let k = 1000,
                            dm = 3,
                            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                            i = Math.floor(Math.log(bytes) / Math.log(k));

                        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                    }


                    return { onUpload };
                }
			};

			createApp(App)
				.use(primevue.config.default)
				.use(primevue.toastservice)
				.mount("#app");
			<\\/script>
`
                }
            }
        };
    }
};
</script>
