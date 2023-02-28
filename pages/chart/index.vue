<template>
    <DocComponent title="Vue Chart Component" header="Chart" description="Chart components are based on Chart.js, an open source HTML5 based charting library." :componentDocs="docs" :apiDocs="['Chart']" />
</template>

<script>
import AccessibilityDoc from '@/doc/chart/AccessibilityDoc';
import BasicDoc from '@/doc/chart/BasicDoc';
import ChartJSDoc from '@/doc/chart/ChartJSDoc';
import ComboDoc from '@/doc/chart/ComboDoc';
import DoughnutDoc from '@/doc/chart/DoughnutDoc';
import HorizontalBarDoc from '@/doc/chart/HorizontalBarDoc';
import ImportDoc from '@/doc/chart/ImportDoc';
import LineDoc from '@/doc/chart/LineDoc';
import LineStylesDoc from '@/doc/chart/LineStylesDoc';
import MultiAxisDoc from '@/doc/chart/MultiAxisDoc';
import PieChartDoc from '@/doc/chart/PieChartDoc';
import PolarAreaDoc from '@/doc/chart/PolarAreaDoc';
import RadarDoc from '@/doc/chart/RadarDoc';
import StackedBarDoc from '@/doc/chart/StackedBarDoc';
import StyleDoc from '@/doc/chart/StyleDoc';
import VerticalBarDoc from '@/doc/chart/VerticalBarDoc';

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
