<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Chip</h1>
                <p>Chip represents entities using icons, labels and images.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <div class="flex align-items-center">
                    <Chip label="Action" class="mr-2" />
                    <Chip label="Comedy" class="mr-2" />
                    <Chip label="Mystery" class="mr-2" />
                    <Chip label="Thriller" removable />
                </div>

                <h5>Icon</h5>
                <div class="flex align-items-center">
                    <Chip label="Apple" icon="pi pi-apple" class="mr-2" />
                    <Chip label="Facebook" icon="pi pi-facebook" class="mr-2" />
                    <Chip label="Google" icon="pi pi-google" class="mr-2" />
                    <Chip label="Microsoft" icon="pi pi-microsoft" removable />
                </div>

                <h5>Image</h5>
                <div class="flex align-items-center">
                    <Chip label="Amy Elsner" image="demo/images/avatar/amyelsner.png" class="mr-2" />
                    <Chip label="Asiya Javayant" image="demo/images/avatar/asiyajavayant.png" class="mr-2" />
                    <Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2" />
                    <Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" removable />
                </div>

                <h5>Styling</h5>
                <div class="flex align-items-center">
                    <Chip label="Action" class="mr-2 custom-chip" />
                    <Chip label="Apple" icon="pi pi-apple" class="mr-2 custom-chip" />
                    <Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2 custom-chip" />
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