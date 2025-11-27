<template>
    <div class="doc-copy-markdown">
        <SplitButton label="Copy Markdown" icon="pi pi-copy" severity="secondary" outlined @click="copyMarkdown" :model="menuItems" />
    </div>
</template>

<script>
export default {
    name: 'DocCopyMarkdown',
    props: {
        componentName: {
            type: String,
            default: null
        },
        docType: {
            type: String,
            default: 'component'
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
        pageName() {
            const segments = this.$route.path.split('/').filter(Boolean);
            return segments[segments.length - 1] || segments[0];
        },
        markdownLink() {
            if (this.docType === 'page') {
                return `${this.baseUrl}/llms/pages/${this.pageName}.md`;
            }
            // For components, use the llms/components path
            return `${this.baseUrl}/llms/components/${this.pageName}.md`;
        },
        githubLink() {
            const name = this.componentName || this.pageName;
            if (name) {
                if (this.docType === 'page') {
                    const fullPath = this.$route.path.split('/').filter(Boolean).join('/');
                    return `https://github.com/primefaces/primevue/tree/master/apps/showcase/pages/${fullPath}/`;
                }
                return `https://github.com/primefaces/primevue/tree/master/apps/showcase/doc/${name}/`;
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
        // Markdown content is loaded on-demand when user clicks "Copy Markdown"
    },
    methods: {
        async loadMarkdownContent() {
            // Try with $fetch first (Nuxt's fetch wrapper)
            try {
                this.markdownContent = await $fetch(this.markdownLink, {
                    responseType: 'text'
                });
                return;
            } catch (error) {
                // Fallback to regular fetch
            }

            try {
                const response = await fetch(this.markdownLink);
                if (response.ok) {
                    this.markdownContent = await response.text();
                }
            } catch (error) {
                console.error('Failed to load markdown content:', error);
            }
        },
        async copyMarkdown() {
            try {
                // Load markdown content on-demand if not already loaded
                if (!this.markdownContent) {
                    await this.loadMarkdownContent();
                }

                if (!this.markdownContent) {
                    console.warn('No markdown content to copy');
                    alert('Failed to load markdown content. Please try again.');
                    return;
                }

                await navigator.clipboard.writeText(this.markdownContent);

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
            window.open(this.githubLink, '_blank', 'noopener,noreferrer');
        },
        openChatGPT() {
            window.open(this.chatGPTLink, '_blank', 'noopener,noreferrer');
        },
        openClaude() {
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
