<template>
    <div class="app-demoactions flex align-items-end justify-content-end mt-3">
        <Button class="p-button-text p-button-rounded p-button-plain p-button-lg p-button-icon-only" @click="toggleMenu">
            <svg role="img" viewBox="0 0 24 24" width="17" height="17" fill="var(--text-color-secondary)" style="display:block">
                <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"/>
            </svg>
        </Button>
        <Button icon="pi pi-github" class="p-button-text p-button-rounded p-button-plain p-button-lg ml-2" @click="viewOnGitHub"></Button>
        <Button class="p-button-text p-button-rounded p-button-plain p-button-lg p-button-icon-only ml-2" @click="viewOnFigma()">
            <svg role="img" width="14" height="20" viewBox="0 0 14 20" fill="var(--text-color-secondary)" style="display:block" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0373535 3.76517C0.0373535 1.70627 1.70642 0.0372009 3.76533 0.0372009H6.35303H6.96359H6.96371H7.57428H10.162C12.2209 0.0372009 13.89 1.70627 13.89 3.76517C13.89 5.06889 13.2207 6.2163 12.2071 6.88262C13.2207 7.54894 13.89 8.69634 13.89 10.0001C13.89 12.059 12.2209 13.728 10.162 13.728H10.081C9.11583 13.728 8.23633 13.3613 7.57428 12.7595V13.1174V13.1175V13.728V16.1943C7.57428 18.2807 5.86159 19.9628 3.78544 19.9628C1.73166 19.9628 0.0373535 18.2988 0.0373535 16.2348C0.0373535 14.9311 0.706521 13.7838 1.72011 13.1174C0.706521 12.4511 0.0373535 11.3037 0.0373535 10.0001C0.0373535 8.69634 0.706572 7.54894 1.72023 6.88262C0.706571 6.2163 0.0373535 5.06889 0.0373535 3.76517ZM6.35314 9.97036C6.35307 9.98025 6.35303 9.99015 6.35303 10.0001C6.35303 10.01 6.35307 10.0199 6.35314 10.0298V12.5068H3.76533L3.75083 12.5069C2.37301 12.4991 1.25849 11.3797 1.25849 10.0001C1.25849 8.61557 2.38083 7.49323 3.76533 7.49323H6.35314V9.97036ZM7.57428 10.0245C7.58737 11.3977 8.70465 12.5069 10.081 12.5069H10.162C11.5465 12.5069 12.6688 11.3846 12.6688 10.0001C12.6688 8.61557 11.5465 7.49323 10.162 7.49323H10.081C8.70465 7.49323 7.58737 8.6024 7.57428 9.97566V10.0245ZM3.76533 13.728L3.75083 13.728C2.37301 13.7358 1.25849 14.8552 1.25849 16.2348C1.25849 17.6142 2.39583 18.7417 3.78544 18.7417C5.19741 18.7417 6.35314 17.5961 6.35314 16.1943V13.728H3.76533ZM3.76533 1.25833H6.35303V6.27201H3.76533C2.38084 6.27201 1.25849 5.14966 1.25849 3.76517C1.25849 2.38068 2.38083 1.25833 3.76533 1.25833ZM7.57428 1.25833V6.27201H10.162C11.5465 6.27201 12.6688 5.14966 12.6688 3.76517C12.6688 2.38068 11.5465 1.25833 10.162 1.25833H7.57428Z" fill="var(--text-color-secondary)"/>
            </svg>
        </Button>
        <Button icon="pi pi-info-circle" class="p-button-text p-button-rounded p-button-plain p-button-lg ml-2" @click="scrollToDocs"></Button>
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
        viewOnFigma() {
            if (this.$appState.darkTheme)
                window.open('https://www.figma.com/file/LJBqVfMpK8xY6KR2KIc8RK/Preview-%7C-Dark-%7C-PrimeOne-2022-%7C-1.0.0?node-id=806%3A36648', '_blank');
            else
                window.open('https://www.figma.com/file/c3BuENd8nGcyPmn7ADieee/Preview-%7C-PrimeOne-2022-%7C-1.0.0?node-id=806%3A36648', '_blank');
        },
        viewOnGitHub() {
            EventBus.emit('view-github');
        }
    }
};
</script>