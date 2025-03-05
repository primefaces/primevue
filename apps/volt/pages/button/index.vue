<template>
    <DocComponent title="Vue Button Component" header="Button" description="Button is an extension to standard input element with icons and theming." :componentDocs="docs" />
</template>

<script setup>
import BadgeDoc from '@/doc/button/BadgeDoc.vue';
import BasicDoc from '@/doc/button/BasicDoc.vue';
import ButtonGroupDoc from '@/doc/button/ButtonGroupDoc.vue';
import DisabledDoc from '@/doc/button/DisabledDoc.vue';
import HeadlessDoc from '@/doc/button/HeadlessDoc.vue';
import IconOnlyDoc from '@/doc/button/IconOnlyDoc.vue';
import IconsDoc from '@/doc/button/IconsDoc.vue';
import ImportDoc from '@/doc/button/ImportDoc.vue';
import LinkDoc from '@/doc/button/LinkDoc.vue';
import LoadingDoc from '@/doc/button/LoadingDoc.vue';
import NoticeDoc from '@/doc/button/NoticeDoc.vue';
import OutlinedDoc from '@/doc/button/OutlinedDoc.vue';
import RaisedDoc from '@/doc/button/RaisedDoc.vue';
import RaisedTextDoc from '@/doc/button/RaisedTextDoc.vue';
import RoundedDoc from '@/doc/button/RoundedDoc.vue';
import SeverityDoc from '@/doc/button/SeverityDoc.vue';
import SizesDoc from '@/doc/button/SizesDoc.vue';
import TemplateDoc from '@/doc/button/TemplateDoc.vue';
import TextDoc from '@/doc/button/TextDoc.vue';

import { ref } from 'vue';

const docs = ref([
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'basic',
        label: 'Basic',
        component: BasicDoc
    },
    {
        id: 'icons',
        label: 'Icons',
        component: IconsDoc
    },
    {
        id: 'loading',
        label: 'Loading',
        component: LoadingDoc
    },
    {
        id: 'link',
        label: 'Link',
        component: LinkDoc
    },
    {
        id: 'severity',
        label: 'Severity',
        component: SeverityDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: DisabledDoc
    },
    {
        id: 'raised',
        label: 'Raised',
        component: RaisedDoc
    },
    {
        id: 'rounded',
        label: 'Rounded',
        component: RoundedDoc
    },
    {
        id: 'text',
        label: 'Text',
        component: TextDoc
    },
    {
        id: 'raisedtext',
        label: 'Raised Text',
        component: RaisedTextDoc
    },
    {
        id: 'outlined',
        label: 'Outlined',
        component: OutlinedDoc
    },
    {
        id: 'icononly',
        label: 'Icon Only',
        component: IconOnlyDoc
    },
    {
        id: 'badge',
        label: 'Badge',
        component: BadgeDoc
    },
    {
        id: 'buttongroup',
        label: 'Button Group',
        component: ButtonGroupDoc
    },
    {
        id: 'sizes',
        label: 'Sizes',
        component: SizesDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'headless',
        label: 'Headless',
        component: HeadlessDoc
    },
    {
        id: 'notice',
        label: 'Notice',
        component: NoticeDoc
    }
]);
</script>
