<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Badge</h1>
                <p>Badge is a small status indicator for another element.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h5>Numbers</h5>
            <div class="badges">
                 <span class="p-badge">2</span>
                <span class="p-badge p-badge-success">8</span>
                <span class="p-badge p-badge-info">4</span>
                <span class="p-badge p-badge-warning">12</span>
                <span class="p-badge p-badge-danger">3</span>
            </div>

            <h5>Tags</h5>
            <div class="badges">
                <span class="p-tag">Primary</span>
                <span class="p-tag p-tag-success">Success</span>
                <span class="p-tag p-tag-info">Info</span>
                <span class="p-tag p-tag-warning">Warning</span>
                <span class="p-tag p-tag-danger">Danger</span>
            </div>

            <h5>Pills</h5>
            <div class="badges">
                <span class="p-tag p-tag-rounded">Primary</span>
                <span class="p-tag p-tag-rounded p-tag-success">Success</span>
                <span class="p-tag p-tag-rounded p-tag-info">Info</span>
                <span class="p-tag p-tag-rounded p-tag-warning">Warning</span>
                <span class="p-tag p-tag-rounded p-tag-danger">Danger</span>
            </div>

            <h5>Positioned Badge</h5>
            <span class="p-overlay-badge">
                 <span class="p-badge">2</span>
                <i class="pi pi-bell" style="font-size: 2em"></i>
            </span>

            <span class="p-overlay-badge">
                <span class="p-badge p-badge-warning">5</span>
                <Button type="button" label="New" />
            </span>

            <h5>Inline Button Badge</h5>
            <Button type="button" label="Emails" badge="8" />
            <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

            <h5>Sizes</h5>
            <div class="badges">
                <span class="p-badge">2</span>
                <span class="p-badge p-badge-lg p-badge-sucess">4</span>
                <span class="p-badge p-badge-xl p-badge-warning">6</span>
            </div>
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
.badges {
    .p-badge, .p-tag {
        margin-right: .5rem;
    }
}

.p-button {
    margin-right: .5rem;
}

.p-overlay-badge {
    margin-right: 2rem;
}

/deep/ h1, h2 {
    .p-badge {
        vertical-align: middle;
    }
}
</style>