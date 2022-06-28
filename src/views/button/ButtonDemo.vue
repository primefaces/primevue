<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Button</h1>
                <p>Button is an extension to standard button element with icons and theming.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Button label="Submit" />
                <Button label="Disabled" disabled="disabled" />
                <Button label="Link" class="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" aria-label="Submit" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Severities</h5>
                <Button label="Primary" />
                <Button label="Secondary" class="p-button-secondary" />
                <Button label="Success" class="p-button-success" />
                <Button label="Info" class="p-button-info" />
                <Button label="Warning" class="p-button-warning" />
                <Button label="Help" class="p-button-help" />
                <Button label="Danger" class="p-button-danger" />

                <h5>Raised Buttons</h5>
                <Button label="Primary" class="p-button-raised" />
                <Button label="Secondary" class="p-button-raised p-button-secondary" />
                <Button label="Success" class="p-button-raised p-button-success" />
                <Button label="Info" class="p-button-raised p-button-info" />
                <Button label="Warning" class="p-button-raised p-button-warning" />
                <Button label="Help" class="p-button-raised p-button-help" />
                <Button label="Danger" class="p-button-raised p-button-danger" />

                <h5>Rounded Buttons</h5>
                <Button label="Primary" class="p-button-rounded" />
                <Button label="Secondary" class="p-button-rounded p-button-secondary" />
                <Button label="Success" class="p-button-rounded p-button-success" />
                <Button label="Info" class="p-button-rounded p-button-info" />
                <Button label="Warning" class="p-button-rounded p-button-warning" />
                <Button label="Help" class="p-button-rounded p-button-help" />
                <Button label="Danger" class="p-button-rounded p-button-danger" />

                <h5>Text Buttons</h5>
                <Button label="Primary" class="p-button-text" />
                <Button label="Secondary" class="p-button-secondary p-button-text" />
                <Button label="Success" class="p-button-success p-button-text" />
                <Button label="Info" class="p-button-info p-button-text" />
                <Button label="Warning" class="p-button-warning p-button-text" />
                <Button label="Help" class="p-button-help p-button-text" />
                <Button label="Danger" class="p-button-danger p-button-text" />
                <Button label="Plain" class="p-button-text p-button-plain" />

                <h5>Raised Text Buttons</h5>
                <Button label="Primary" class="p-button-raised p-button-text" />
                <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" />
                <Button label="Success" class="p-button-raised p-button-success p-button-text" />
                <Button label="Info" class="p-button-raised p-button-info p-button-text" />
                <Button label="Warning" class="p-button-raised p-button-warning p-button-text" />
                <Button label="Help" class="p-button-raised p-button-help p-button-text" />
                <Button label="Danger" class="p-button-raised p-button-danger p-button-text" />
                <Button label="Plain" class="p-button-raised p-button-text p-button-plain" />

                <h5>Outlined Buttons</h5>
                <Button label="Primary" class="p-button-outlined" />
                <Button label="Secondary" class="p-button-outlined p-button-secondary" />
                <Button label="Success" class="p-button-outlined p-button-success" />
                <Button label="Info" class="p-button-outlined p-button-info" />
                <Button label="Warning" class="p-button-outlined p-button-warning" />
                <Button label="Help" class="p-button-outlined p-button-help" />
                <Button label="Danger" class="p-button-outlined p-button-danger" />

                <h5>Rounded Icon Buttons</h5>
                <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" class="p-button-rounded p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" class="p-button-rounded p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" class="p-button-rounded p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" class="p-button-rounded p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger" aria-label="Cancel" />
                <Button icon="pi pi-check" class="p-button-rounded" aria-label="Filter" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" class="p-button-rounded p-button-text" aria-label="Submit" />
                <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                <Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />

                <h5>Rounded and Outlined Icon Buttons</h5>
                <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" aria-label="Submit" />
                <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />

                <h5>Badges</h5>
                <Button type="button" label="Emails" badge="8" />
                <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

                <h5>Loading</h5>
                <Button type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
                <Button type="button" label="Search" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1)"  />
                <Button type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
                <Button type="button" label="Search" :loading="loading[3]" @click="load(3)" />

                <h5>Button Set</h5>
                <span class="p-buttonset">
                    <Button label="Save" icon="pi pi-check" />
                    <Button label="Delete" icon="pi pi-trash" />
                    <Button label="Cancel" icon="pi pi-times" />
                </span>

                <h5>Sizes</h5>
                <div class="sizes">
                    <Button label="Small" icon="pi pi-check" class="p-button-sm"  />
                    <Button label="Normal" icon="pi pi-check" class="p-button"  />
                    <Button label="Large" icon="pi pi-check" class="p-button-lg" />
                </div>

                <h5>Template</h5>
                <div class="template">
                    <Button class="google p-0" aria-label="Google">
                        <i class="pi pi-google px-2"></i>
                        <span class="px-3">Google</span>
                    </Button>
                    <Button class="youtube p-0" aria-label="Youtube">
                        <i class="pi pi-youtube px-2"></i>
                        <span class="px-3">Youtube</span>
                    </Button>
                    <Button class="vimeo p-0" aria-label="Vimeo">
                        <i class="pi pi-vimeo px-2"></i>
                        <span class="px-3">Vimeo</span>
                    </Button>
                    <Button class="facebook p-0" aria-label="Facebook">
                        <i class="pi pi-facebook px-2"></i>
                        <span class="px-3">Facebook</span>
                    </Button>
                    <Button class="twitter p-0" aria-label="Twitter">
                        <i class="pi pi-twitter px-2"></i>
                        <span class="px-3">Twitter</span>
                    </Button>
                    <Button class="slack p-0" aria-label="Slack">
                        <i class="pi pi-slack px-2"></i>
                        <span class="px-3">Slack</span>
                    </Button>
                    <Button class="amazon p-0" aria-label="Amazon">
                        <i class="pi pi-amazon px-2"></i>
                        <span class="px-3">Amazon</span>
                    </Button>
                    <Button class="discord p-0" aria-label="Discord">
                        <i class="pi pi-discord px-2"></i>
                        <span class="px-3">Discord</span>
                    </Button>
                </div>
            </div>
        </div>

        <ButtonDoc/>
    </div>
</template>

<script>
import ButtonDoc from './ButtonDoc'

export default {
    data() {
        return {
            loading: [false, false, false]
        }
    },
    methods: {
        load(index) {
            this.loading[index] = true;
            setTimeout(() => this.loading[index] = false, 1000);
        }
    },
	components: {
		'ButtonDoc': ButtonDoc
    }
}
</script>

<style lang="scss" scoped>
.p-button {
    margin-right: .5rem;
}

.p-buttonset {
    .p-button {
        margin-right: 0;
    }
}

.sizes {
    .button {
        margin-bottom: .5rem;
        display: block;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.template .p-button i {
    line-height: 2.25rem;
}
.template .p-button.google {
    background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--purple-700);
}
.template .p-button.google:hover {
    background-position: left bottom;
}
.template .p-button.google i {
    background-color: var(--purple-700);
}
.template .p-button.google:focus {
    box-shadow: 0 0 0 1px var(--purple-400);
}
.template .p-button.youtube {
    background: linear-gradient(to left, var(--pink-600) 50%, var(--pink-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--pink-700);
}
.template .p-button.youtube:hover {
    background-position: left bottom;
}
.template .p-button.youtube i {
    background-color: var(--pink-700);
}
.template .p-button.youtube:focus {
    box-shadow: 0 0 0 1px var(--pink-400);
}
.template .p-button.vimeo {
    background: linear-gradient(to left, var(--green-200) 50%, var(--green-300) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--green-300);
}
.template .p-button.vimeo:hover {
    background-position: left bottom;
}
.template .p-button.vimeo i {
    background-color: var(--green-300);
}
.template .p-button.vimeo:focus {
    box-shadow: 0 0 0 1px var(--green-400);
}
.template .p-button.facebook {
    background: linear-gradient(to left, var(--indigo-600) 50%, var(--indigo-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--indigo-700);
}
.template .p-button.facebook:hover {
    background-position: left bottom;
}
.template .p-button.facebook i {
    background-color: var(--indigo-700);
}
.template .p-button.facebook:focus {
    box-shadow: 0 0 0 1px var(--indigo-400);
}
.template .p-button.twitter {
    background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--blue-500);
}
.template .p-button.twitter:hover {
    background-position: left bottom;
}
.template .p-button.twitter i {
    background-color: var(--blue-500);
}
.template .p-button.twitter:focus {
    box-shadow: 0 0 0 1px var(--blue-200);
}
.template .p-button.slack {
    background: linear-gradient(to left, var(--orange-400) 50%, var(--orange-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--orange-500);
}
.template .p-button.slack:hover {
    background-position: left bottom;
}
.template .p-button.slack i {
    background-color: var(--orange-500);
}
.template .p-button.slack:focus {
    box-shadow: 0 0 0 1px var(--orange-200);
}
.template .p-button.amazon {
    background: linear-gradient(to left, var(--yellow-400) 50%, var(--yellow-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--yellow-500);
}
.template .p-button.amazon:hover {
    background-position: left bottom;
}
.template .p-button.amazon i {
    background-color: var(--yellow-500);
}
.template .p-button.amazon:focus {
    box-shadow: 0 0 0 1px var(--yellow-200);
}
.template .p-button.discord {
    background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--bluegray-800);
}
.template .p-button.discord:hover {
    background-position: left bottom;
}
.template .p-button.discord i {
    background-color: var(--bluegray-800);
}
.template .p-button.discord:focus {
    box-shadow: 0 0 0 1px var(--bluegray-500);
}

@media screen and (max-width: 960px) {
    .p-button {
        margin-bottom: .5rem;

        &:not(.p-button-icon-only) {
            display: flex;
            width: 100%;
        }
    }

    .p-buttonset {
        .p-button {
            margin-bottom: 0;
        }
    }
}
</style>