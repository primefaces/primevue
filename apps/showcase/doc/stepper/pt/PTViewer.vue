<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="docs">
        <Stepper value="1" class="basis-[50rem]" linear>
            <StepList :style="{ overflowX: 'unset' }">
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel value="1">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" />
                    </div>
                </StepPanel>
                <StepPanel value="2">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" />
                    </div>
                </StepPanel>
                <StepPanel value="3">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="pt-6">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Stepper'),
                    key: 'Stepper'
                },
                {
                    data: getPTOptions('StepList'),
                    key: 'StepList'
                },
                {
                    data: getPTOptions('Step'),
                    key: 'Step'
                },
                {
                    data: getPTOptions('StepPanels'),
                    key: 'StepPanels'
                },
                {
                    data: getPTOptions('StepPanel'),
                    key: 'StepPanel'
                }
            ]
        };
    }
};
</script>
