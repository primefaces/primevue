<template>
    <div class="doc-copy-markdown">
        <SplitButton
            label="Copy Markdown"
            icon="pi pi-copy"
            severity="secondary"
            size="small"
            @click="copyMarkdown"
            :model="menuItems"
        />
    </div>
</template>

<script>
export default {
    name: 'DocCopyMarkdown',
    props: {
        componentName: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            markdownContent: '',
            menuItems: [
                {
                    label: 'Copy Markdown Link',
                    icon: 'pi pi-link',
                    command: () => this.copyMarkdownLink()
                },
                {
                    label: 'Open in GitHub',
                    icon: 'pi pi-github',
                    command: () => this.openGithub()
                },
                {
                    label: 'Open in ChatGPT',
                    icon: 'pi pi-comments',
                    command: () => this.openChatGPT()
                },
                {
                    label: 'Open in Claude',
                    icon: 'pi pi-comment',
                    command: () => this.openClaude()
                }
            ]
        };
    },
    computed: {
        baseUrl() {
            if (typeof window !== 'undefined') {
                return window.location.origin;
            }
            return 'https://primevue.org';
        },
        markdownLink() {
            // Extract component name from route (e.g., /button -> button)
            const segments = this.$route.path.split('/').filter(Boolean);
            const componentName = segments[segments.length - 1];

            // Files are in /llms/components/ directory
            return `${this.baseUrl}/llms/components/${componentName}.md`;
        },
        githubLink() {
            if (this.componentName) {
                return `https://github.com/primefaces/primevue/tree/master/apps/showcase/doc/${this.componentName}/`;
            }
            return 'https://github.com/primefaces/primevue/tree/master/apps/showcase/';
        },
        chatGPTLink() {
            const urlMessage = `Read ${this.markdownLink}, I want to ask questions about it.`;
            const encodedUrlMessage = encodeURIComponent(urlMessage);
            return `https://chatgpt.com/?hints=search&q=${encodedUrlMessage}`;
        },
        claudeLink() {
            const urlMessage = `Read ${this.markdownLink}, I want to ask questions about it.`;
            const encodedUrlMessage = encodeURIComponent(urlMessage);
            return `https://claude.ai/new?q=${encodedUrlMessage}`;
        }
    },
    mounted() {
        console.log('DocCopyMarkdown mounted');
        console.log('Markdown link:', this.markdownLink);

        // Wait a bit for the page to fully load, then load markdown
        setTimeout(() => {
            this.loadMarkdownContent();
        }, 500);
    },
    methods: {
        async loadMarkdownContent() {
            console.log('Loading markdown from:', this.markdownLink);

            // Try with $fetch first (Nuxt's fetch wrapper)
            try {
                this.markdownContent = await $fetch(this.markdownLink, {
                    responseType: 'text'
                });
                console.log('Markdown loaded via $fetch, length:', this.markdownContent.length);
                return;
            } catch (error) {
                console.warn('$fetch failed, trying regular fetch:', error);
            }

            // Fallback to regular fetch
            try {
                const response = await fetch(this.markdownLink);
                console.log('Fetch response status:', response.status);
                if (response.ok) {
                    this.markdownContent = await response.text();
                    console.log('Markdown loaded via fetch, length:', this.markdownContent.length);
                } else {
                    console.warn(`Markdown not found: ${this.markdownLink}`, response.status);
                }
            } catch (error) {
                console.error('Failed to load markdown content:', error);
            }
        },
        async copyMarkdown() {
            console.log('copyMarkdown called, content length:', this.markdownContent?.length);

            if (!this.markdownContent) {
                console.warn('No markdown content to copy');
                alert('Markdown content is still loading. Please try again.');
                return;
            }

            try {
                await navigator.clipboard.writeText(this.markdownContent);
                console.log('Markdown copied successfully');

                if (this.$toast) {
                    this.$toast.add({
                        severity: 'success',
                        summary: 'Copied',
                        detail: 'Markdown content copied to clipboard',
                        life: 2000
                    });
                }
            } catch (error) {
                console.error('Failed to copy markdown:', error);
                alert('Failed to copy: ' + error.message);
            }
        },
        async copyMarkdownLink() {
            console.log('copyMarkdownLink called');
            try {
                await navigator.clipboard.writeText(this.markdownLink);
                if (this.$toast) {
                    this.$toast.add({
                        severity: 'success',
                        summary: 'Link Copied',
                        detail: 'Markdown link copied to clipboard',
                        life: 2000
                    });
                } else {
                    alert('Link copied: ' + this.markdownLink);
                }
            } catch (error) {
                console.error('Failed to copy link:', error);
                alert('Failed to copy link: ' + error.message);
            }
        },
        openGithub() {
            console.log('Opening GitHub:', this.githubLink);
            window.open(this.githubLink, '_blank', 'noopener,noreferrer');
        },
        openChatGPT() {
            console.log('Opening ChatGPT:', this.chatGPTLink);
            window.open(this.chatGPTLink, '_blank', 'noopener,noreferrer');
        },
        openClaude() {
            console.log('Opening Claude:', this.claudeLink);
            window.open(this.claudeLink, '_blank', 'noopener,noreferrer');
        }
    }
};
</script>

<style scoped>
.doc-copy-markdown {
    position: relative;
}
</style>
