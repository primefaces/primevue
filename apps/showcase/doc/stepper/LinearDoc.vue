<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>linear</i> property is present, current step must be completed in order to move to the next step.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Stepper value="1" linear class="basis-[50rem]">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Next" icon="pi pi-arrow-right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Stepper value="1" linear>
    <StepList>
        <Step value="1">Header I</Step>
        <Step value="2">Header II</Step>
        <Step value="3">Header III</Step>
    </StepList>
    <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-6 justify-start">
                <Button label="Next" icon="pi pi-arrow-right" @click="activateCallback('2')" />
            </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-6 justify-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
            </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
            </div>
            <div class="flex pt-6 justify-start">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
            </div>
        </StepPanel>
    </StepPanels>
</Stepper>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Stepper value="1" linear class="basis-[50rem]">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Next" icon="pi pi-arrow-right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Stepper value="1" linear class="basis-[50rem]">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Next" icon="pi pi-arrow-right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>
`
            }
        };
    }
};
</script>
