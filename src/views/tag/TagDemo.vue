<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tag</h1>
                <p>Tag component is used to categorize content.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Tags</h5>
                <Tag class="p-mr-2" value="Primary"></Tag>
                <Tag class="p-mr-2" severity="success" value="Success"></Tag>
                <Tag class="p-mr-2" severity="info" value="Info"></Tag>
                <Tag class="p-mr-2" severity="warning" value="Warning"></Tag>
                <Tag severity="danger" value="Danger"></Tag>

                <h5>Pills</h5>
                <Tag class="p-mr-2" value="Primary" rounded></Tag>
                <Tag class="p-mr-2" severity="success" value="Success" rounded></Tag>
                <Tag class="p-mr-2" severity="info" value="Info" rounded></Tag>
                <Tag class="p-mr-2" severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>

                <h5>Icons</h5>
                <Tag class="p-mr-2" icon="user" value="Primary"></Tag>
                <Tag class="p-mr-2" icon="check" severity="success" value="Success"></Tag>
                <Tag class="p-mr-2" icon="info-circle" severity="info" value="Info"></Tag>
                <Tag class="p-mr-2" icon="exclamation-triangle" severity="warning" value="Warning"></Tag>
                <Tag icon="times" severity="danger" value="Danger"></Tag>
            </div>
        </div>

        <TagDoc />
    </div>
</template>

<script>
import TagDoc from './TagDoc';

export default {
	components: {
		'TagDoc': TagDoc
	}
}
</script>
