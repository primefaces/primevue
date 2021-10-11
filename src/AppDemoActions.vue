<template>
    <div class="app-demoactions p-d-flex p-ai-end p-jc-end p-mt-3">
        <Button class="p-button-text p-button-rounded p-button-plain p-button-lg p-button-icon-only" @click="toggleMenu">
            <svg role="img" viewBox="0 0 24 24" width="17" height="17" fill="var(--text-color-secondary)" style="display:block">
                <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"/>
            </svg>
        </Button>
        <Button icon="pi pi-github" class="p-button-text p-button-rounded p-button-plain p-button-lg p-ml-2" @click="viewOnGitHub"></Button>
        <Button icon="pi pi-info-circle" class="p-button-text p-button-rounded p-button-plain p-button-lg p-ml-2" @click="scrollToDocs"></Button>
        <Menu ref="menu" :model="items" :popup="true" style="width:14rem"/>
    </div>
</template>

<script>
import EventBus from '@/AppEventBus';

export default {
    data() {
        return {
			items: [
                {
                    label: 'Options API Demo',
                    command: () => {
                        EventBus.emit('run-demo', 'options-api');
                    }
                },
                {
                    label: 'Composition API Demo',
                    command: () => {
                        EventBus.emit('run-demo', 'composition-api');
                    }
                },
                {
                    label: 'Browser Demo',
                    command: () => {
                        EventBus.emit('run-demo', 'browser-source');
                    }
                }
			]
		}
    },
    methods: {
        toggleMenu(event) {
            this.$refs.menu.toggle(event);
        },
        scrollToDocs() {
            document.getElementById('app-doc').scrollIntoView({behavior: 'smooth'});
        },
        viewOnGitHub() {
            EventBus.emit('view-github');
        }
    }
};
</script>