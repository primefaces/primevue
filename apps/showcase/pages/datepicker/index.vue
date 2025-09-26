<template>
    <DocComponent title="Vue DatePicker Component" header="DatePicker" description="DatePicker is a form component for date inputs." :componentDocs="docs" :apiDocs="['DatePicker']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/datepicker/AccessibilityDoc';
import BasicDoc from '@/doc/datepicker/BasicDoc.vue';
import ButtonBarDoc from '@/doc/datepicker/ButtonBarDoc.vue';
import ClearIconDoc from '@/doc/datepicker/ClearIconDoc.vue';
import DateTemplateDoc from '@/doc/datepicker/DateTemplateDoc.vue';
import DisabledDoc from '@/doc/datepicker/DisabledDoc.vue';
import FilledDoc from '@/doc/datepicker/FilledDoc.vue';
import FloatLabelDoc from '@/doc/datepicker/FloatLabelDoc.vue';
import FluidDoc from '@/doc/datepicker/FluidDoc.vue';
import FormatDoc from '@/doc/datepicker/FormatDoc.vue';
import FormsDoc from '@/doc/datepicker/FormsDoc.vue';
import IconDoc from '@/doc/datepicker/IconDoc.vue';
import IftaLabelDoc from '@/doc/datepicker/IftaLabelDoc.vue';
import ImportDoc from '@/doc/datepicker/ImportDoc.vue';
import InlineDoc from '@/doc/datepicker/InlineDoc.vue';
import InvalidDoc from '@/doc/datepicker/InvalidDoc.vue';
import LocaleDoc from '@/doc/datepicker/LocaleDoc.vue';
import MinMaxDoc from '@/doc/datepicker/MinMaxDoc.vue';
import ModelTypeDoc from '@/doc/datepicker/ModelTypeDoc.vue';
import MonthPickerDoc from '@/doc/datepicker/MonthPickerDoc.vue';
import MultipleDoc from '@/doc/datepicker/MultipleDoc.vue';
import MultipleMonthsDoc from '@/doc/datepicker/MultipleMonthsDoc.vue';
import RangeDoc from '@/doc/datepicker/RangeDoc.vue';
import SizesDoc from '@/doc/datepicker/SizesDoc.vue';
import TimeDoc from '@/doc/datepicker/TimeDoc.vue';
import YearPickerDoc from '@/doc/datepicker/YearPickerDoc.vue';
import PTComponent from '@/doc/datepicker/pt/index.vue';
import ThemingDoc from '@/doc/datepicker/theming/index.vue';

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
                    id: 'forms',
                    label: 'Forms',
                    component: FormsDoc
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
                    id: 'modeltype',
                    label: 'Model Type',
                    component: ModelTypeDoc
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
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'iftalabel',
                    label: 'Ifta Label',
                    component: IftaLabelDoc
                },
                {
                    id: 'clearicon',
                    label: 'Clear Icon',
                    component: ClearIconDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'fluid',
                    label: 'Fluid',
                    component: FluidDoc
                },
                {
                    id: 'filled',
                    label: 'Filled',
                    component: FilledDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
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
