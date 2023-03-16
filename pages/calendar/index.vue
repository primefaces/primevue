<template>
    <DocComponent title="Vue Calendar Component" header="Calendar" description="Calendar, also known as DatePicker, is a form component to work with dates." :componentDocs="docs" :apiDocs="['Calendar']" />
</template>

<script>
import AccessibilityDoc from '@/doc/calendar/AccessibilityDoc';
import BasicDoc from '@/doc/calendar/BasicDoc';
import ButtonBarDoc from '@/doc/calendar/ButtonBarDoc';
import DateTemplateDoc from '@/doc/calendar/DateTemplateDoc';
import DisabledDoc from '@/doc/calendar/DisabledDoc';
import FloatLabelDoc from '@/doc/calendar/FloatLabelDoc';
import VeeValidateDoc from '@/doc/calendar/form/VeeValidateDoc.vue';
import FormatDoc from '@/doc/calendar/FormatDoc';
import IconDoc from '@/doc/calendar/IconDoc';
import ImportDoc from '@/doc/calendar/ImportDoc';
import InlineDoc from '@/doc/calendar/InlineDoc';
import InvalidDoc from '@/doc/calendar/InvalidDoc';
import LocaleDoc from '@/doc/calendar/LocaleDoc';
import MinMaxDoc from '@/doc/calendar/MinMaxDoc';
import MonthPickerDoc from '@/doc/calendar/MonthPickerDoc';
import MultipleDoc from '@/doc/calendar/MultipleDoc';
import MultipleMonthsDoc from '@/doc/calendar/MultipleMonthsDoc';
import RangeDoc from '@/doc/calendar/RangeDoc';
import StyleDoc from '@/doc/calendar/StyleDoc';
import TimeDoc from '@/doc/calendar/TimeDoc';
import TouchUIDoc from '@/doc/calendar/TouchUIDoc';
import YearPickerDoc from '@/doc/calendar/YearPickerDoc';

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
                    id: 'form',
                    label: 'Form',
                    description: 'Compatibility with popular Vue form libraries.',
                    children: [
                        {
                            id: 'veevalidate',
                            label: 'VeeValidate',
                            component: VeeValidateDoc
                        }
                    ]
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
