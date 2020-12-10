<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Avatar</h1>
                <p>Avatar represents people using icons, labels and images.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="p-grid">
                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Label</h5>
                        <Avatar label="P" class="p-mr-2" size="xlarge" />
                        <Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
                        <Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Label - Circle</h5>
                        <Avatar label="P" class="p-mr-2" size="xlarge" shape="circle" />
                        <Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"  />
                        <Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle"  />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Label - Badge</h5>
                        <Avatar label="U" class="p-mr-2" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4" />
                    </div>
                </div>
            </div>
           
            <div class="p-grid">
                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Icon</h5>
                        <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" />
                        <Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
                        <Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Icon - Circle</h5>
                        <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" shape="circle" />
                        <Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle" />
                        <Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" />
                    </div>
                </div>

                 <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Icon - Badge</h5>
                        <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" v-badge="4"/>
                    </div>
                </div>
            </div>

            <div class="p-grid">
                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Image</h5>
                        <Avatar image="demo/images/avatar/amyelsner.png" class="p-mr-2" size="xlarge" shape="circle" />
                        <Avatar image="demo/images/avatar/asiyajavayant.png" class="p-mr-2" size="large" shape="circle" />
                        <Avatar image="demo/images/avatar/onyamalimba.png" class="p-mr-2" shape="circle" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Avatar Group</h5>
                        <AvatarGroup class="p-mb-3">
                            <Avatar image="demo/images/avatar/amyelsner.png" size="large" shape="circle"/>
                            <Avatar image="demo/images/avatar/asiyajavayant.png" size="large" shape="circle"/>
                            <Avatar image="demo/images/avatar/onyamalimba.png" size="large" shape="circle"/>
                            <Avatar image="demo/images/avatar/ionibowcher.png" size="large" shape="circle"/>
                            <Avatar image="demo/images/avatar/xuxuefeng.png" size="large" shape="circle"/>
                            <Avatar label="+2" shape="circle" size="large" style="background-color:#9c27b0; color: #ffffff" />
                        </AvatarGroup>
                    </div>
                </div>

                 <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Image - Badge</h5>
                        <Avatar image="demo/images/organization/walter.jpg" class="p-mr-2" size="xlarge" v-badge.danger="4" />
                    </div>
                </div>
            </div>
        </div>

        <AvatarDoc />
    </div>
</template>

<script>
import AvatarDoc from './AvatarDoc';

export default {
    components: {
        'AvatarDoc': AvatarDoc
    }
}
</script>