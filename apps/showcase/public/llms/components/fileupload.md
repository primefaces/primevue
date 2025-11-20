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

## Fileupload

## Fileupload

