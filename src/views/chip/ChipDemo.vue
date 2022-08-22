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
                <h4>Chip</h4>
                <h5 class="text-center sm:text-left">Basic</h5>
                <div class="flex align-items-center flex-column sm:flex-row">
                    <Chip label="Action" class="mr-2 mb-2"></Chip>
                    <Chip label="Comedy" class="mr-2 mb-2"></Chip>
                    <Chip label="Mystery" class="mr-2 mb-2"></Chip>
                    <Chip label="Thriller" :removable="true" class="mb-2"></Chip>
                </div>

                <h5 class="text-center sm:text-left">Icon</h5>
                <div class="flex align-items-center flex-column sm:flex-row">
                    <Chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2"></Chip>
                    <Chip label="Facebook" icon="pi pi-facebook" class="mr-2 mb-2"></Chip>
                    <Chip label="Google" icon="pi pi-google" class="mr-2 mb-2"></Chip>
                    <Chip label="Microsoft" icon="pi pi-microsoft" :removable="true" class="mb-2"></Chip>
                </div>

                <h5 class="text-center sm:text-left">Image</h5>
                <div class="flex align-items-center flex-column sm:flex-row">
                    <Chip label="Amy Elsner" image="demo/images/avatar/amyelsner.png" class="mr-2 mb-2"></Chip>
                    <Chip label="Asiya Javayant" image="demo/images/avatar/asiyajavayant.png" class="mr-2 mb-2"></Chip>
                    <Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2 mb-2"></Chip>
                    <Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" :removable="true" class="mb-2"></Chip>
                </div>

                <h5 class="text-center sm:text-left">Styling</h5>
                <div class="flex align-items-center flex-column sm:flex-row">
                    <Chip label="Action" class="mr-2 mb-2 custom-chip"></Chip>
                    <Chip label="Comedy" class="mr-2 mb-2 custom-chip"></Chip>
                    <Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2 mb-2 custom-chip"></Chip>
                    <Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" :removable="true" class="mb-2 custom-chip"></Chip>
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