# Vue File Upload Component

FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

## Import

```javascript
import FileUpload from 'primevue/fileupload';
```

## Accessibility

Screen Reader FileUpload uses a hidden native input element with type="file" for screen readers. Keyboard Support Interactive elements of the uploader are buttons, visit the Button accessibility section for more information.

## Advanced

Advanced uploader provides dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

```vue
<FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
    <template #empty>
        <span>Drag and drop files to here to upload.</span>
    </template>
</FileUpload>
```

## Auto

When auto property is enabled, a file gets uploaded instantly after selection.

```vue
<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
```

## Basic

FileUpload basic mode provides a simpler UI as an alternative to default advanced mode.

```vue
<FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
<Button label="Upload" @click="upload" severity="secondary" />
```

## CustomUploadDoc

Uploading implementation can be overridden by enabling customUpload property. This sample, displays the image on the client side with a grayscale filter.

```vue
<FileUpload mode="basic" @select="onFileSelect" customUpload auto severity="secondary" class="p-button-outlined" />
<img v-if="src" :src="src" alt="Image" class="shadow-md rounded-xl w-full sm:w-64" style="filter: grayscale(100%)" />
```

## Template

Uploader UI can be customized with templating.

## File Upload

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Name of the request parameter to identify the files at backend. |
| url | string | - | Remote url to upload the files. |
| mode | HintedString<"advanced" \| "basic"> | advanced | Defines the UI of the component, possible values are 'advanced' and 'basic'. |
| multiple | boolean | false | Used to select multiple files at once from file dialog. |
| accept | string | - | Pattern to restrict the allowed file types such as 'image/*'. |
| disabled | boolean | false | Disables the upload functionality. |
| auto | boolean | false | When enabled, upload begins automatically after selection is completed. |
| maxFileSize | number | - | Maximum file size allowed in bytes. |
| invalidFileSizeMessage | string | : Invalid file size, file size should be smaller than {1.} | Message of the invalid fize size. |
| invalidFileLimitMessage | string | Maximum number of files to be uploaded is {0.} | Message to display when number of files to be uploaded exceeeds the limit. |
| invalidFileTypeMessage | string | '{0}: Invalid file type.' | Message of the invalid fize type. |
| fileLimit | number | - | Maximum number of files that can be uploaded. |
| withCredentials | boolean | false | Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. |
| previewWidth | number | 50 | Width of the image thumbnail in pixels. |
| chooseLabel | string | - | Label of the choose button. Defaults to PrimeVue Locale configuration. |
| uploadLabel | string | - | Label of the upload button. Defaults to PrimeVue Locale configuration. |
| cancelLabel | string | Cancel | Label of the cancel button. Defaults to PrimeVue Locale configuration. |
| customUpload | boolean | - | Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeVue Locale configuration. |
| showUploadButton | boolean | true | Whether to show the upload button. |
| showCancelButton | boolean | true | Whether to show the cancel button. |
| chooseIcon | string | - | Icon of the choose button. |
| uploadIcon | string | - | Icon of the upload button. |
| cancelIcon | string | - | Icon of the cancel button. |
| style | any | - | Inline style of the component. |
| class | any | - | Style class of the component. |
| chooseButtonProps | object | null | Used to pass all properties of the ButtonProps to the choose button inside the component. |
| uploadButtonProps | object | - | Used to pass all properties of the ButtonProps to the upload button inside the component. |
| cancelButtonProps | object | - | Used to pass all properties of the ButtonProps to the cancel button inside the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<FileUploadPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | FileUploadPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| input | FileUploadPassThroughOptionType | Used to pass attributes to the input's DOM element. |
| header | FileUploadPassThroughOptionType | Used to pass attributes to the header's DOM element. |
| pcChooseButton | any | Used to pass attributes to the choose Button component. |
| pcUploadButton | any | Used to pass attributes to the upload Button component. |
| pcCancelButton | any | Used to pass attributes to the cancel Button component. |
| content | FileUploadPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| pcProgressBar | any | Used to pass attributes to the ProgressBar component. |
| pcMessage | any | Used to pass attributes to the message's DOM element. |
| file | FileUploadPassThroughOptionType | Used to pass attributes to the file's DOM element. |
| fileThumbnail | FileUploadPassThroughOptionType | Used to pass attributes to the file thumbnail's DOM element. |
| fileInfo | FileUploadPassThroughOptionType | Used to pass attributes to the file info's DOM element. |
| fileName | FileUploadPassThroughOptionType | Used to pass attributes to the fileName's DOM element. |
| fileSize | FileUploadPassThroughOptionType | Used to pass attributes to the fileSize's DOM element. |
| pcFileBadge | any | Used to pass attributes to the Badge component. |
| fileActions | FileUploadPassThroughOptionType | Used to pass attributes to the file actions' DOM element. |
| pcFileRemoveButton | any | Used to pass attributes to the file remove button's DOM element. |
| empty | FileUploadPassThroughOptionType | Used to pass attributes to the empty's DOM element. |
| basicContent | any | Used to pass attributes to the content in basic mode. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-fileupload | Class name of the root element |
| p-fileupload-header | Class name of the header element |
| p-fileupload-choose-button | Class name of the choose button element |
| p-fileupload-upload-button | Class name of the upload button element |
| p-fileupload-cancel-button | Class name of the cancel button element |
| p-fileupload-content | Class name of the content element |
| p-fileupload-file-list | Class name of the file list element |
| p-fileupload-file | Class name of the file element |
| p-fileupload-file-thumbnail | Class name of the file thumbnail element |
| p-fileupload-file-info | Class name of the file info element |
| p-fileupload-file-name | Class name of the file name element |
| p-fileupload-file-size | Class name of the file size element |
| p-fileupload-file-badge | Class name of the file badge element |
| p-fileupload-file-actions | Class name of the file actions element |
| p-fileupload-file-remove-button | Class name of the file remove button element |
| p-fileupload-basic-content | Class name of the content element in basic mode |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| fileupload.background | --p-fileupload-background | Background of root |
| fileupload.border.color | --p-fileupload-border-color | Border color of root |
| fileupload.color | --p-fileupload-color | Color of root |
| fileupload.border.radius | --p-fileupload-border-radius | Border radius of root |
| fileupload.transition.duration | --p-fileupload-transition-duration | Transition duration of root |
| fileupload.header.background | --p-fileupload-header-background | Background of header |
| fileupload.header.color | --p-fileupload-header-color | Color of header |
| fileupload.header.padding | --p-fileupload-header-padding | Padding of header |
| fileupload.header.border.color | --p-fileupload-header-border-color | Border color of header |
| fileupload.header.border.width | --p-fileupload-header-border-width | Border width of header |
| fileupload.header.border.radius | --p-fileupload-header-border-radius | Border radius of header |
| fileupload.header.gap | --p-fileupload-header-gap | Gap of header |
| fileupload.content.highlight.border.color | --p-fileupload-content-highlight-border-color | Highlight border color of content |
| fileupload.content.padding | --p-fileupload-content-padding | Padding of content |
| fileupload.content.gap | --p-fileupload-content-gap | Gap of content |
| fileupload.file.padding | --p-fileupload-file-padding | Padding of file |
| fileupload.file.gap | --p-fileupload-file-gap | Gap of file |
| fileupload.file.border.color | --p-fileupload-file-border-color | Border color of file |
| fileupload.file.info.gap | --p-fileupload-file-info-gap | Info gap of file |
| fileupload.file.list.gap | --p-fileupload-file-list-gap | Gap of file list |
| fileupload.progressbar.height | --p-fileupload-progressbar-height | Height of progressbar |
| fileupload.basic.gap | --p-fileupload-basic-gap | Gap of basic |

