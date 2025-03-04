<template>
    <div :class="['doc-component', className]">
        <Head>
            <Title>Volt | {{ title }}</Title>
            <Meta name="description" :content="'Volt | ' + description" />
        </Head>

        <ul class="doc-tabmenu">
            <li :class="{ 'doc-tabmenu-active': tab === 0 }">
                <button type="button" @click="tab = 0">FEATURES</button>
            </li>
            <li :class="{ 'doc-tabmenu-active': tab === 1 }">
                <button type="button" @click="tab = 1">CODE</button>
            </li>
        </ul>

        <div class="doc-tabpanels">
            <div v-show="tab === 0" class="doc-tabpanel">
                <div class="doc-main">
                    <div class="doc-intro">
                        <h1>{{ header }}</h1>
                        <p>
                            <span>{{ description }}</span>
                        </p>
                        <div class="pt-3 flex gap-2">
                            <a
                                :href="`https://primevue.org${originPath}/#api`"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex rounded-full px-3 py-1 bg-surface-200 hover:bg-surface-300 transition-all duration-200 gap-2 items-center text-sm dark:bg-surface-800 dark:hover:bg-surface-700"
                                ><span class="text-surface-900 dark:text-surface-50 font-medium">API Doc</span><i class="pi pi-external-link text-xs! text-surface-900 dark:text-surface-50"></i
                            ></a>
                            <a
                                :href="`https://primevue.org${originPath}/#pt`"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex rounded-full px-3 py-1 bg-surface-200 hover:bg-surface-300 transition-all duration-200 gap-2 items-center text-sm text-surface-900 dark:bg-surface-800 dark:hover:bg-surface-700"
                                ><span class="text-surface-900 dark:text-surface-50 font-medium">PassThrough Doc</span><i class="pi pi-external-link text-xs! text-surface-900 dark:text-surface-50"></i
                            ></a>
                            <a
                                :href="`https://primevue.org${originPath}/#accessibility`"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex rounded-full px-3 py-1 bg-surface-200 hover:bg-surface-300 transition-all duration-200 gap-2 items-center text-sm text-surface-900 dark:bg-surface-800 dark:hover:bg-surface-700"
                                ><span class="text-surface-900 dark:text-surface-50 font-medium">Accessibility</span><i class="pi pi-external-link text-xs! text-surface-900 dark:text-surface-50"></i
                            ></a>
                        </div>
                    </div>
                    <DocSections :docs="componentDocs" />
                </div>
                <DocSectionNav :docs="componentDocs" />
            </div>

            <div v-if="tab === 1" class="doc-tabpanel">
                <DocPreset :presetKey="header?.toLowerCase()" :introText="`${header} Code`" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

defineProps({
    title: String,
    header: String,
    description: String,
    componentDocs: Object,
    className: String,
    presetDoc: Object
});

const route = useRoute();
const tab = ref(0);

const originPath = computed(() => route.path);
</script>
