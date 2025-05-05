<template>
    <DocComponent title="Vue DatePicker Component" header="DatePicker" description="DatePicker is a form component for date inputs." :componentDocs="docs" />
</template>

<script lang="ts">
import BasicDoc from '@/doc/datepicker/BasicDoc.vue';
import ButtonBarDoc from '@/doc/datepicker/ButtonBarDoc.vue';
import DateTemplateDoc from '@/doc/datepicker/DateTemplateDoc.vue';
import DisabledDoc from '@/doc/datepicker/DisabledDoc.vue';
import DownloadDoc from '@/doc/datepicker/DownloadDoc.vue';
import FilledDoc from '@/doc/datepicker/FilledDoc.vue';
import FormatDoc from '@/doc/datepicker/FormatDoc.vue';
import IconDoc from '@/doc/datepicker/IconDoc.vue';
import ImportDoc from '@/doc/datepicker/ImportDoc.vue';
import InlineDoc from '@/doc/datepicker/InlineDoc.vue';
import InvalidDoc from '@/doc/datepicker/InvalidDoc.vue';
import LocaleDoc from '@/doc/datepicker/LocaleDoc.vue';
import MinMaxDoc from '@/doc/datepicker/MinMaxDoc.vue';
import MonthPickerDoc from '@/doc/datepicker/MonthPickerDoc.vue';
import MultipleDoc from '@/doc/datepicker/MultipleDoc.vue';
import MultipleMonthsDoc from '@/doc/datepicker/MultipleMonthsDoc.vue';
import RangeDoc from '@/doc/datepicker/RangeDoc.vue';
import SizesDoc from '@/doc/datepicker/SizesDoc.vue';
import TimeDoc from '@/doc/datepicker/TimeDoc.vue';
import YearPickerDoc from '@/doc/datepicker/YearPickerDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
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
                    id: 'format',
                    label: 'Format',
                    component: FormatDoc
                },
                {
                    id: 'locale',
                    label: 'Locale',
                    component: LocaleDoc
                },
                {
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
                },
                {
                    id: 'minmax',
                    label: 'Min / Max',
                    component: MinMaxDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'range',
                    label: 'Range',
                    component: RangeDoc
                },
                {
                    id: 'button',
                    label: 'Button Bar',
                    component: ButtonBarDoc
                },
                {
                    id: 'time',
                    label: 'Time',
                    component: TimeDoc
                },
                {
                    id: 'monthpicker',
                    label: 'Month Picker',
                    component: MonthPickerDoc
                },
                {
                    id: 'yearpicker',
                    label: 'Year Picker',
                    component: YearPickerDoc
                },
                {
                    id: 'multiplemonths',
                    label: 'Multiple Months',
                    component: MultipleMonthsDoc
                },
                {
                    id: 'datetemplate',
                    label: 'Date Template',
                    component: DateTemplateDoc
                },
                {
                    id: 'inline',
                    label: 'Inline',
                    component: InlineDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                }
            ]
        };
    }
};
</script>
