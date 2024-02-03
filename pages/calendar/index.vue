<template>
    <DocComponent
        title="Vue Calendar Component"
        header="Calendar"
        description="Calendar, also known as DatePicker, is a form component to work with dates."
        :componentDocs="docs"
        :apiDocs="['Calendar']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/calendar/AccessibilityDoc';
import BasicDoc from '@/doc/calendar/BasicDoc.vue';
import ButtonBarDoc from '@/doc/calendar/ButtonBarDoc.vue';
import DateTemplateDoc from '@/doc/calendar/DateTemplateDoc.vue';
import DisabledDoc from '@/doc/calendar/DisabledDoc.vue';
import FilledDoc from '@/doc/calendar/FilledDoc.vue';
import FloatLabelDoc from '@/doc/calendar/FloatLabelDoc.vue';
import FormatDoc from '@/doc/calendar/FormatDoc.vue';
import IconDoc from '@/doc/calendar/IconDoc.vue';
import ImportDoc from '@/doc/calendar/ImportDoc.vue';
import InlineDoc from '@/doc/calendar/InlineDoc.vue';
import InvalidDoc from '@/doc/calendar/InvalidDoc.vue';
import LocaleDoc from '@/doc/calendar/LocaleDoc.vue';
import MinMaxDoc from '@/doc/calendar/MinMaxDoc.vue';
import MonthPickerDoc from '@/doc/calendar/MonthPickerDoc.vue';
import MultipleDoc from '@/doc/calendar/MultipleDoc.vue';
import MultipleMonthsDoc from '@/doc/calendar/MultipleMonthsDoc.vue';
import RangeDoc from '@/doc/calendar/RangeDoc.vue';
import TimeDoc from '@/doc/calendar/TimeDoc.vue';
import TouchUIDoc from '@/doc/calendar/TouchUIDoc.vue';
import YearPickerDoc from '@/doc/calendar/YearPickerDoc.vue';
import PTComponent from '@/doc/calendar/pt/index.vue';
import ThemingDoc from '@/doc/calendar/theming/index.vue';

export default {
    data() {
        return {
            docs: [
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
                    id: 'touchui',
                    label: 'Touch UI',
                    component: TouchUIDoc
                },
                {
                    id: 'inline',
                    label: 'Inline',
                    component: InlineDoc
                },
                {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
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
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
