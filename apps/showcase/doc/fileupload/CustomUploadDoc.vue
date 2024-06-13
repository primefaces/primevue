<template>
    <DocSectionText v-bind="$attrs">
        <p>Uploading implementation can be overridden by enabling <i>customUpload</i> property and defining a custom <i>uploader</i> handler event.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" />
    </div>
</template>

<script>
export default {
    methods: {
        async customBase64Uploader(event) {
            const file = event.files[0];
            const reader = new FileReader();
            let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

            reader.readAsDataURL(blob);

            reader.onloadend = function () {
                const base64data = reader.result;
            };
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" />
    </div>
</template>

<script setup>
const customBase64Uploader = async (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
        const base64data = reader.result;
    };
};
<\/script>
`
            }
        };
    },
    methods: {
        async customBase64Uploader(event) {
            const file = event.files[0];
            const reader = new FileReader();
            let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

            reader.readAsDataURL(blob);

            reader.onloadend = function () {
                const base64data = reader.result;
            };
        }
    }
};
</script>
