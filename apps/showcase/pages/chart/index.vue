<template>
    <DocComponent
        title="Vue Chart Component"
        header="Chart"
        description="Chart components are based on Chart.js, an open source HTML5 based charting library."
        :componentDocs="docs"
        :apiDocs="['Chart']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/chart/AccessibilityDoc.vue';
import BasicDoc from '@/doc/chart/BasicDoc.vue';
import ChartJSDoc from '@/doc/chart/ChartJSDoc.vue';
import ComboDoc from '@/doc/chart/ComboDoc.vue';
import DoughnutDoc from '@/doc/chart/DoughnutDoc.vue';
import HorizontalBarDoc from '@/doc/chart/HorizontalBarDoc.vue';
import ImportDoc from '@/doc/chart/ImportDoc.vue';
import LineDoc from '@/doc/chart/LineDoc.vue';
import LineStylesDoc from '@/doc/chart/LineStylesDoc.vue';
import MultiAxisDoc from '@/doc/chart/MultiAxisDoc.vue';
import PieChartDoc from '@/doc/chart/PieChartDoc.vue';
import PolarAreaDoc from '@/doc/chart/PolarAreaDoc.vue';
import RadarDoc from '@/doc/chart/RadarDoc.vue';
import StackedBarDoc from '@/doc/chart/StackedBarDoc.vue';
import VerticalBarDoc from '@/doc/chart/VerticalBarDoc.vue';
import PTComponent from '@/doc/chart/pt/index.vue';
import ThemingDoc from '@/doc/chart/theming/index.vue';

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
                    id: 'chartjs',
                    label: 'Chart.js',
                    component: ChartJSDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'pie',
                    label: 'Pie',
                    component: PieChartDoc
                },
                {
                    id: 'doughnut',
                    label: 'Doughnut',
                    component: DoughnutDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical Bar',
                    component: VerticalBarDoc
                },
                {
                    id: 'horizontal',
                    label: 'Horizontal Bar',
                    component: HorizontalBarDoc
                },
                {
                    id: 'stacked',
                    label: 'Stacked Bar',
                    component: StackedBarDoc
                },
                {
                    id: 'line',
                    label: 'Line',
                    component: LineDoc
                },
                {
                    id: 'multiaxis',
                    label: 'Multi Axis',
                    component: MultiAxisDoc
                },
                {
                    id: 'linestyles',
                    label: 'Line Styles',
                    component: LineStylesDoc
                },
                {
                    id: 'polararea',
                    label: 'Polar Area',
                    component: PolarAreaDoc
                },
                {
                    id: 'radar',
                    label: 'Radar',
                    component: RadarDoc
                },
                {
                    id: 'combo',
                    label: 'Combo',
                    component: ComboDoc
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
