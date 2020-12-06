<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Chip</h1>
                <p>Chip represents entities using icons, labels and images.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <div class="p-d-flex p-ai-center">
                    <Chip label="Action" class="p-mr-2" />
                    <Chip label="Comedy" class="p-mr-2" />
                    <Chip label="Mystery" class="p-mr-2" />
                    <Chip label="Thriller" removable />
                </div>

                <h5>Icon</h5>
                <div class="p-d-flex p-ai-center">
                    <Chip label="Apple" icon="pi pi-apple" class="p-mr-2" />
                    <Chip label="Facebook" icon="pi pi-facebook" class="p-mr-2" />
                    <Chip label="Google" icon="pi pi-google" class="p-mr-2" />
                    <Chip label="Microsoft" icon="pi pi-microsoft" removable />
                </div>

                <h5>Image</h5>
                <div class="p-d-flex p-ai-center">
                    <Chip label="Amy Elsner" image="demo/images/avatar/amyelsner.png" class="p-mr-2" />
                    <Chip label="Asiya Javayant" image="demo/images/avatar/asiyajavayant.png" class="p-mr-2" />
                    <Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="p-mr-2" />
                    <Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" removable />
                </div>

                <h5>Styling</h5>
                <div class="p-d-flex p-ai-center">
                    <Chip label="Action" class="p-mr-2 custom-chip" />
                    <Chip label="Apple" icon="pi pi-apple" class="p-mr-2 custom-chip" />
                    <Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="p-mr-2 custom-chip" />
                    <Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" class="custom-chip" removable />
                </div>
            </div>
        </div>

        <ChipDoc />
    </div>
</template>

<script>
import ChipDoc from './ChipDoc';

export default {
    components: {
        'ChipDoc': ChipDoc
    }
}
</script>

<style lang="scss" scoped>
.p-chip.custom-chip {
    background: var(--primary-color);
    color: var(--primary-color-text);
}
</style>