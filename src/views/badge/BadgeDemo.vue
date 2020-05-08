<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Badge</h1>
                <p>Badge is a small status indicator for another element.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Numbers</h3>
            <span class="p-badge">2</span>
            <span class="p-badge p-badge-success">8</span>
            <span class="p-badge p-badge-info">4</span>
            <span class="p-badge p-badge-warning">12</span>
            <span class="p-badge p-badge-danger">3</span>

            <h3>Tags</h3>
            <span class="p-tag">Primary</span> 
            <span class="p-tag p-tag-success">Success</span>
            <span class="p-tag p-tag-info">Info</span>
            <span class="p-tag p-tag-warning">Warning</span>
            <span class="p-tag p-tag-danger">Danger</span>

            <h3>Pills</h3>
            <span class="p-tag p-tag-rounded">Primary</span>
            <span class="p-tag p-tag-rounded p-tag-success">Success</span>
            <span class="p-tag p-tag-rounded p-tag-info">Info</span>
            <span class="p-tag p-tag-rounded p-tag-warning">Warning</span>
            <span class="p-tag p-tag-rounded p-tag-danger">Danger</span>

            <h3>Positioned Badge</h3>
            <span class="p-overlay-badge">
                 <span class="p-badge">2</span>
                <i class="pi pi-bell" style="font-size: 2em"></i>
            </span>

            <span class="p-overlay-badge">
                <span class="p-badge p-badge-warning">5</span>
                <Button type="button" label="New" />
            </span>

            <h3>Sizes</h3>
            <span class="p-badge" style="font-size: 1em">2</span>
            <span class="p-badge p-badge-success" style="font-size: 1.25em">8</span>
            <span class="p-badge p-badge-info" style="font-size: 1.5em">4</span>
            <span class="p-badge p-badge-warning" style="font-size: 1.75em">12</span>
            <span class="p-badge p-badge-danger" style="font-size: 2em">3</span>

            <h1>Heading 1 <span class="p-tag p-tag-success">New</span></h1>
            <h2>Heading 2 <span class="p-tag p-tag-success">New</span></h2>
        </div>

        <BadgeDoc />
    </div>
</template>

<script>
import BadgeDoc from './BadgeDoc';

export default {
    data() {
        return {

        }
    },
	components: {
		'BadgeDoc': BadgeDoc
	}
}
</script>

<style lang="scss" scoped>
.p-badge, .p-tag {
    margin-right: .5em;
}

.p-overlay-badge {
    margin-right: 2em;

    .p-badge {
        margin-right: 0;
    }
}

/deep/ h1, h2 {
    .p-badge {
        vertical-align: middle;
    }
}
</style>