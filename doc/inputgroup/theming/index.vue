<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>InputGroup Theming</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import InputGroupAddonStyleDoc from './InputGroupAddonStyleDoc.vue';
import InputGroupStyleDoc from './InputGroupStyleDoc.vue';
import TailwindDoc from './TailwindDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'theming.styled',
                    label: 'Styled',
                    children: [
                        {
                            id: 'theming.inputgroup',
                            label: 'InputGroup',
                            component: InputGroupStyleDoc
                        },
                        {
                            id: 'theming.inputgroupaddon',
                            label: 'InputGroupAddon',
                            component: InputGroupAddonStyleDoc
                        }
                    ]
                },
                {
                    id: 'theming.unstyled',
                    label: 'Unstyled',
                    description: 'Theming is implemented with the pass through properties in unstyled mode.',
                    children: [
                        {
                            id: 'theming.tailwind',
                            label: 'Tailwind',
                            component: TailwindDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>
